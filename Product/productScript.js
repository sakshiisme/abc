document.addEventListener('DOMContentLoaded', () => {
  const productItems = document.querySelectorAll('#productItems li');
  const productContent = document.getElementById('productContent');
  const defaultInfo = document.getElementById('defaultInfo');

const productData = {
  rsc: {
    title: "Regular Slotted Containers (RSC)",
    images: [
      "../images/productImages/rsc1.webp",
      "../images/productImages/rsc2.jpeg",
      "../images/productImages/rsc3.png"
    ],
    desc: "The most commonly used type of corrugated box, RSCs are designed with flaps of equal length that meet in the center when closed. They are cost-effective, easy to assemble, and ideal for a wide range of products including books, electronics, clothing, and industrial parts. Their standard structure provides excellent strength and protection during shipping and storage.<br><br>Features:<br>- Cost-effective and durable design.<br>- Simple and quick to assemble.<br>- Excellent strength to withstand rough handling.<br>- Versatile for a wide range of product types.<br>- Available in various sizes for different packaging needs.<br>- Eco-friendly, made from recyclable materials."
  },
  diecut: {
    title: "Die-cut Boxes",
    images: [
      "../images/productImages/diecut1.jpeg",
      "../images/productImages/diecut2.jpeg",
      "../images/productImages/diecut3.jpg"
    ],
    desc: "Precision-engineered boxes made using custom dies to create unique shapes, cutouts, and closures. These are perfect for retail packaging, promotional kits, and product displays. Die cut boxes offer a snug fit for your products, reducing movement during transit and enhancing the unboxing experience with custom shapes and branding opportunities.<br><br>Features:<br>- Custom shapes and sizes to fit products perfectly.<br>- High-end, professional appearance.<br>- Ideal for branded or promotional packaging.<br>- Enhances product presentation and customer experience.<br>- Made using die-cutting machines for accuracy.<br>- Available with window cut-outs, partitions, and other creative designs."
  },
  heavy: {
    title: "Heavy-duty Corrugated Boxes",
    images: [
      "../images/productImages/heavy1.jpg",
      "../images/productImages/heavy2.jpg",
      "../images/productImages/heavy3.webp"
    ],
    desc: "Built with double or triple-wall corrugated board, these boxes are designed for heavy-duty applications. They provide maximum strength and resistance to crushing, making them suitable for shipping industrial equipment, auto parts, large electronics, and fragile items. Ideal for long-distance transportation and export packaging.<br><br>Features:<br>- Double or triple-wall construction for extra strength.<br>- Withstands high stacking pressure.<br>- Suitable for heavy or delicate contents.<br>- Excellent for long-distance and export shipping.<br>- High load-bearing capacity.<br>- Custom sizes and reinforcement options available."
  },
  custom: {
    title: "Custom Printed Boxes",
    images: [
      "../images/productImages/custom1.jpeg",
      "../images/productImages/custom2.jpg",
      "../images/productImages/custom3.webp"
    ],
    desc: "Enhance your brand visibility with corrugated boxes printed with your logo, colors, product information, or marketing messages. Custom printed boxes not only offer product protection but also act as a powerful branding tool, helping you stand out in competitive markets like e-commerce, retail, and subscription-based services.<br><br>Features:<br>- High-quality printing with brand elements.<br>- Ideal for retail, e-commerce, and unboxing experience.<br>- Custom sizes and finishes available.<br>- Supports digital, flexo, and offset printing.<br>- Strength with visual appeal.<br>- Boosts customer recognition and loyalty."
  },
  multi: {
    title: "Multi-Depth Boxes",
    images: [
      "../images/productImages/multi1.jpg",
      "../images/productImages/multi2.jpg",
      "../images/productImages/multi3.webp"
    ],
    desc: "These innovative boxes come with multiple pre-scored creases at different heights, allowing you to adjust the box size as per your requirement by simply cutting down to the desired depth. Ideal for businesses with varying product sizes, they help minimize inventory and reduce storage and shipping costs.<br><br>Features:<br>- Adjustable depth for multiple product sizes.<br>- Reduces need for multiple box sizes in inventory.<br>- Saves storage space and shipping costs.<br>- Easy to modify by cutting down to required size.<br>- Efficient packaging for variable product dimensions.<br>- Eco-friendly and reusable."
  },

  mono: {
    title: "Mono Boxes",
    images: [
      "../images/productImages/mono1.jpg",
      "../images/productImages/mono2.jpg",
      "../images/productImages/mono3.webp"
    ],
    desc: "Mono boxes are single-material, single-wall corrugated containers often used for packaging lightweight or single-product shipments. They are an economical solution for everyday packaging needs in retail, FMCG, and household goods, offering ease of use and simplicity in design.<br><br>Features:<br>- Cost-effective for everyday packaging.<br>- Lightweight and easy to handle.<br>- Ideal for retail and FMCG goods.<br>- Simple and clean design.<br>- Easy to print and customize.<br>- Suitable for automated packing systems."
  },

  printed: {
    title: "Printed Boxes",
    images: [
      "../images/productImages/printed1.jpg",
      "../images/productImages/printed2.jpeg",
      "../images/productImages/printed3.jpeg"
    ],
    desc: "These are corrugated boxes with pre-designed prints such as handling instructions, barcodes, product details, or decorative graphics. Printed boxes enhance product appeal and customer communication while maintaining the protective quality of standard packaging.<br><br>Features:<br>- Pre-printed graphics, labels, and handling info.<br>- Enhances brand visibility and product details.<br>- Available in custom print finishes.<br>- Can include barcodes, QR codes, and logos.<br>- Combines branding with functionality.<br>- Helps improve customer communication."
  },

  folding: {
    title: "Fold Cartons",
    images: [
      "../images/productImages/fold1.png",
      "../images/productImages/fold2.webp",
      "../images/productImages/fold3.jpeg"
    ],
    desc: "Made from paperboard rather than corrugated fiberboard, folding cartons are commonly used for packaging smaller items like cosmetics, food products, pharmaceuticals, and consumer goods. They are lightweight, easily printable, and highly customizable in terms of design and finish.<br><br>Features:<br>- Lightweight and compact design.<br>- Easily printed with branding and graphics.<br>- Ideal for cosmetics, food, and pharma products.<br>- Foldable and flat-packed for efficient storage.<br>- Available with gloss, matte, or UV coatings.<br>- Custom die-cut and window options available."
  },
  rolls: {
    title: "Corrugated Rolls",
    images: [
      "../images/productImages/roll1.jpg",
      "../images/productImages/roll2.jpg",
      "../images/productImages/roll3.jpg"
    ],
    desc: "Flexible corrugated cardboard sheets provided in roll form, used as a cushioning and wrapping material for delicate or irregularly shaped items. Corrugated rolls are excellent for surface protection, void filling, and creating a barrier against scratches and impacts during transit.<br><br>Features:<br>- Flexible and easy to wrap around items.<br>- Provides cushioning and impact resistance.<br>- Lightweight and eco-friendly.<br>- Ideal for irregular-shaped or fragile items.<br>- Reduces transit damage.<br>- Available in custom widths and lengths."
  },
  specialty: {
    title: "Speciality Packaging",
    images: [
      "../images/productImages/special1.jpeg",
      "../images/productImages/special2.jpeg",
      "../images/productImages/special3.jpg"
    ],
    desc: "Designed for unique products or high-value items, specialty packaging includes custom inserts, compartments, partitions, and coatings to enhance protection, presentation, and product experience. Perfect for electronics, glassware, promotional gifts, and luxury items.<br><br>Features:<br>- Custom-fit inserts and partitions.<br>- High-end protection for delicate items.<br>- Premium look and unboxing experience.<br>- Suitable for luxury and electronic goods.<br>- Can include foil, embossing, and coatings.<br>- Tailored for specific product types."
  },
  solutions: {
    title: "Custom Solutions",
    images: [],
    desc: "We provide tailored packaging solutions that align with your product dimensions, weight, handling needs, and brand requirements. From structural design to material selection and printing, our team works with you to create packaging that protects, promotes, and performs.<br><br>Features:<br>- End-to-end custom design services.<br>- Material selection based on product needs.<br>- Tailored to branding and handling requirements.<br>- Structural prototypes and testing available.<br>- Collaborative development process.<br>- Perfect fit, performance, and presentation."
  },
  sustainable: {
    title: "Sustainable Packaging Options",
    images: [],
    desc: "Eco-conscious packaging made from recycled, biodegradable, or FSC-certified materials. These boxes are designed to reduce environmental impact without compromising durability or functionality. Perfect for brands committed to sustainability, these solutions support green initiatives and enhance brand reputation.<br><br>Features:<br>- Made from recycled or biodegradable materials.<br>- Supports green branding and CSR goals.<br>- Complies with sustainability certifications.<br>- Reduces carbon footprint in logistics.<br>- Safe for recycling and reuse.<br>- Combines performance with environmental care."
  },

    
    // ... (continue for each product similarly)
  };

  productItems.forEach(item => {
    item.addEventListener('click', () => {
      const productKey = item.getAttribute('data-product');
      const data = productData[productKey];

      if (data) {
        const imagesHtml = data.images.map(img => `
          <div class="product-card">
            <img src="${img}" alt="${data.title}">
          </div>
        `).join("");

        productContent.innerHTML = `
          <h2>${data.title}</h2>
          <div class="product-gallery">${imagesHtml}</div>
          <p class="product-description">${data.desc}</p>
        `;

        defaultInfo.style.display = 'none';
        productContent.style.display = 'block';
      }
    });
  });
});
