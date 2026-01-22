
window.addEventListener('DOMContentLoaded', function () {
    const EMAILJS_PUBLIC_KEY = "9EGAWICZhzVX9Xb9S";
    const EMAILJS_SERVICE_ID = "service_4mmknyv";
    const EMAILJS_TEMPLATE_ID = "template_jschm1v";

    if (window.emailjs && emailjs.init) {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    } else {
        console.warn("EmailJS SDK not found. Make sure the script tag is included in the HTML.");
    }

    const form = document.getElementById("contactForm");
    if (!form) return;
    const submitBtn = form.querySelector("button[type='submit']");
    const responseEl = document.getElementById("responseMessage");

    function showMessage(text, isError = false) {
        if (responseEl) {
            responseEl.textContent = text;
            responseEl.style.color = isError ? "crimson" : "green";
        } else {
            alert(text);
        }
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const company = form.company.value.trim();
        const fullname = form.fullname.value.trim();
        const email = form.email.value.trim();
        const phone = form.phone.value.trim();
        const message = form.message.value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]{10}$/;

        if (fullname.length < 2 || company.length < 2 ||
            !emailPattern.test(email) || !phonePattern.test(phone) ||
            message.length < 5) {
            showMessage("Please fill all details correctly before proceeding.", true);
            return;
        }

        submitBtn.disabled = true;
        const initialBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = "Sending...";

        const templateParams = {
            company: company,
            fullname: fullname,
            email: email,
            phone: phone,
            message: message
        };

        if (!window.emailjs || !emailjs.send) {
            showMessage("Email service not available. Check EmailJS setup.", true);
            submitBtn.disabled = false;
            submitBtn.innerHTML = initialBtnText;
            return;
        }

        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
            .then(function (response) {
                showMessage("Message sent successfully!");
                form.reset();
            }, function (err) {
                console.error("EmailJS error:", err);
                showMessage("Failed to send message. Please try again later.", true);
            })
            .finally(function () {
                submitBtn.disabled = false;
                submitBtn.innerHTML = initialBtnText;
            });
    });
});
