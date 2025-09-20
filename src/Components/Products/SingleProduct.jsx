import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Dummy data (should match Produts.jsx)
const dummyProducts = [
  // 🔥 Extinguishers
  {
    id: 1,
    title: "ABC Powder Fire Extinguisher",
    images: ["/Images/Products/ABC Powder Fire Extinguisher.png", ""],
    description:
      "Multi-purpose dry chemical extinguisher effective on Class A (solid), Class B (liquid), and Class C (gas) fires. Lightweight, reliable, and easy to operate, suitable for offices, factories, and homes.",
    stock: 25,
    price: 2499,
    brand: "Kavya",
    category: "Extinguishers",
    tags: ["ABC", "Portable", "Chemical"],
    rating: 4.7,
  },
  {
    id: 2,
    title: "CO2 Fire Extinguisher",
    images: ["/Images/Products/CO2 Fire Extinguisher.png", ""],
    description:
      "Carbon dioxide extinguisher designed for electrical and flammable liquid fires. Leaves no residue and prevents equipment damage, widely used in IT rooms and electrical installations.",
    stock: 18,
    price: 2999,
    brand: "Kavya",
    category: "Extinguishers",
    tags: ["CO2", "Electrical", "Clean Agent"],
    rating: 4.6,
  },
  {
    id: 3,
    title: "Foam Fire Extinguisher",
    images: ["/Images/Products/Foam Fire Extinguisher.png", ""],
    description:
      "Foam-based extinguisher effective against flammable liquid (Class B) fires and solid combustibles. Forms a cooling blanket to prevent re-ignition, ideal for warehouses and fuel stations.",
    stock: 20,
    price: 2799,
    brand: "Kavya",
    category: "Extinguishers",
    tags: ["Foam", "Class B", "Re-ignition Prevention"],
    rating: 4.5,
  },
  {
    id: 4,
    title: "Water Fire Extinguisher",
    images: ["/Images/Products/Water Fire Extinguisher.png", ""],
    description:
      "Traditional water extinguisher suitable for Class A fires involving wood, paper, and textiles. Economical and highly effective in schools, offices, and residential buildings.",
    stock: 15,
    price: 1999,
    brand: "Kavya",
    category: "Extinguishers",
    tags: ["Water", "Class A", "Cost-Effective"],
    rating: 4.4,
  },
  {
    id: 5,
    title: "Clean Agent Fire Extinguisher",
    images: ["/Images/Products/Clean Agent Fire Extinguisher.png", ""],
    description:
      "Environmentally safe clean agent extinguisher effective against Class B and C fires. Leaves no residue and safe for sensitive equipment like servers and electronics.",
    stock: 12,
    price: 3499,
    brand: "Kavya",
    category: "Extinguishers",
    tags: ["Clean Agent", "Electronics", "No Residue"],
    rating: 4.8,
  },

  // 🚒 Hydrant Systems
  {
    id: 6,
    title: "Fire Hydrant System",
    images: ["/Images/Products/Fire Hydrant System.png", ""],
    description:
      "Comprehensive fire hydrant system providing water at high pressure to suppress large fires. Widely installed in industrial plants, malls, and large buildings for maximum protection.",
    stock: 5,
    price: 25999,
    brand: "Kavya",
    category: "Hydrant Systems",
    tags: ["Hydrant", "Water Supply", "Industrial"],
    rating: 4.8,
  },
  {
    id: 7,
    title: "Pillar Hydrant",
    images: ["/Images/Products/Pillar Hydrant.png", ""],
    description:
      "Outdoor pillar hydrant unit designed for emergency fire water supply. Rugged construction ensures durability and easy accessibility during firefighting operations.",
    stock: 8,
    price: 15999,
    brand: "Kavya",
    category: "Hydrant Systems",
    tags: ["Pillar", "Outdoor", "Emergency"],
    rating: 4.6,
  },

  // 🧯 Hose Reels
  {
    id: 8,
    title: "Fire Hose Reel System",
    images: ["/Images/Products/Fire Hose Reel System.png", ""],
    description:
      "Robust hose reel system allowing controlled water flow for firefighting. Designed for commercial and industrial installations for quick and effective fire suppression.",
    stock: 10,
    price: 8999,
    brand: "Kavya",
    category: "Hose Reels",
    tags: ["Hose Reel", "Commercial", "Suppression"],
    rating: 4.5,
  },
  {
    id: 9,
    title: "Canvas Fire Hose",
    images: ["/Images/Products/Canvas Fire Hose.png", ""],
    description:
      "Durable fire hose made of canvas material, resistant to high pressure and abrasion. Essential for hydrant and hose reel operations in fire emergencies.",
    stock: 25,
    price: 2999,
    brand: "Kavya",
    category: "Hose Reels",
    tags: ["Canvas", "Durable", "Hydrant"],
    rating: 4.4,
  },

  // 🔔 Alarm & Detection
  {
    id: 10,
    title: "Fire Alarm Control Panel",
    images: ["/Images/Products/Fire Alarm Control Panel.png", ""],
    description:
      "Centralized control panel for fire alarm systems. Capable of monitoring multiple zones with reliable indicators and alarm outputs for quick response.",
    stock: 7,
    price: 12999,
    brand: "Kavya",
    category: "Alarm & Detection",
    tags: ["Control Panel", "Alarm", "Multi-Zone"],
    rating: 4.7,
  },
  {
    id: 11,
    title: "Smoke Detector",
    images: ["/Images/Products/Smoke Detecto.png", ""],
    description:
      "Sensitive smoke detection unit that triggers early warning alarms. Designed for residential and commercial spaces to provide life-saving alerts.",
    stock: 30,
    price: 1999,
    brand: "Kavya",
    category: "Alarm & Detection",
    tags: ["Smoke", "Detector", "Early Warning"],
    rating: 4.7,
  },
  {
    id: 12,
    title: "Heat Detector",
    images: ["/Images/Products/Heat Detector.png", ""],
    description:
      "Reliable detector that responds to significant temperature changes. Best suited for areas where smoke detection may cause false alarms, such as kitchens or boiler rooms.",
    stock: 25,
    price: 2299,
    brand: "Kavya",
    category: "Alarm & Detection",
    tags: ["Heat", "Detector", "Fire Detection"],
    rating: 4.6,
  },
  {
    id: 13,
    title: "Manual Call Point (MCP)",
    images: ["", ""],
    description:
      "Manually operated fire alarm switch. Allows occupants to trigger alarms in case of fire, ensuring rapid response from fire safety systems.",
    stock: 40,
    price: 999,
    brand: "Kavya",
    category: "Alarm & Detection",
    tags: ["Manual", "Call Point", "Safety"],
    rating: 4.5,
  },
  {
    id: 14,
    title: "Hooter-Sounder",
    images: ["/Images/Products/Hooter-Sounder.png", ""],
    description:
      "Powerful hooter and sounder system that ensures fire alarms are heard clearly across the premises. Supports integration with fire alarm control panels.",
    stock: 22,
    price: 1499,
    brand: "Kavya",
    category: "Alarm & Detection",
    tags: ["Hooter", "Sounder", "Alarm"],
    rating: 4.6,
  },

  // 💡 Lighting
  {
    id: 15,
    title: "Exit-Emergency Light",
    images: ["/Images/Products/Exit-Emergency Light.png", ""],
    description:
      "High-visibility LED exit signage with backup power. Ensures safe evacuation routes are illuminated during power outages and fire emergencies.",
    stock: 15,
    price: 3499,
    brand: "Kavya",
    category: "Lighting",
    tags: ["LED", "Exit", "Emergency"],
    rating: 4.6,
  },

  // 💦 Suppression Systems
  {
    id: 16,
    title: "Kitchen Fire Suppression System",
    images: ["/Images/Products/Kitchen Fire Suppression System.png", ""],
    description:
      "Automatic fire suppression system designed for commercial kitchens. Targets grease and oil fires quickly, minimizing property damage and ensuring staff safety.",
    stock: 6,
    price: 35999,
    brand: "Kavya",
    category: "Suppression Systems",
    tags: ["Kitchen", "Automatic", "Suppression"],
    rating: 4.8,
  },
  {
    id: 17,
    title: "Fire Sprinkler System",
    images: ["/Images/Products/Fire Sprinkler System.png", ""],
    description:
      "Ceiling-mounted sprinkler system offering fast and reliable water discharge in case of fire. Commonly installed in offices, malls, and industrial facilities.",
    stock: 12,
    price: 29999,
    brand: "Kavya",
    category: "Suppression Systems",
    tags: ["Sprinkler", "Automatic", "Water-Based"],
    rating: 4.7,
  },
  {
    id: 18,
    title: "Gas-Based Suppression System",
    images: ["/Images/Products/Gas-Based Suppression System.png", ""],
    description:
      "Advanced gas suppression system suitable for data centers, server rooms, and archives. Extinguishes fires without leaving residue or damaging sensitive equipment.",
    stock: 4,
    price: 49999,
    brand: "Kavya",
    category: "Suppression Systems",
    tags: ["Gas", "Clean Agent", "Residue-Free"],
    rating: 4.9,
  },

  // 🛡️ Accessories
  {
    id: 19,
    title: "Fire Blanket",
    images: ["/Images/Products/Fire Blanket.png", ""],
    description:
      "Essential safety blanket designed to smother small fires by cutting off oxygen supply. Useful in kitchens, laboratories, and workplaces.",
    stock: 50,
    price: 799,
    brand: "Kavya",
    category: "Accessories",
    tags: ["Blanket", "Smothering", "Portable"],
    rating: 4.5,
  },
  {
    id: 20,
    title: "Safety Signage",
    images: ["/Images/Products/Safety Signage.png", ""],
    description:
      "Photoluminescent and reflective fire safety signs for exits, alarms, and equipment. Provides clear guidance during emergencies even in low light.",
    stock: 100,
    price: 499,
    brand: "Kavya",
    category: "Accessories",
    tags: ["Signage", "Exit Signs", "Guidance"],
    rating: 4.4,
  },
  {
    id: 21,
    title: "Firefighter PPE Kit",
    images: ["/Images/Products/Firefighter PPE Kit.png", ""],
    description:
      "Personal protective equipment kit including fire-resistant suit, helmet, gloves, and boots. Designed for maximum protection of fire response teams.",
    stock: 10,
    price: 15999,
    brand: "Kavya",
    category: "Accessories",
    tags: ["PPE", "Protective", "Firefighter"],
    rating: 4.8,
  },
];

const categories = [
  ...Array.from(new Set(dummyProducts.map((p) => p.category))),
];

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = dummyProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div
        style={{
          padding: 60,
          textAlign: "center",
          color: "#e63b3b",
          fontWeight: 700,
          fontSize: 24,
        }}
      >
        Product not found.
        <br />
        <button
          onClick={() => navigate("/products")}
          style={{
            marginTop: 24,
            background: "linear-gradient(45deg, #e63b3b, #ff6b6b)",
            color: "#fff",
            border: "none",
            borderRadius: 24,
            padding: "10px 32px",
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div style={{ background: "#fff", minHeight: "100vh", padding: "40px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: 14, marginBottom: 24 }}>
          <span
            style={{ color: "#222", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Home
          </span>
          <span style={{ margin: "0 8px", color: "#888" }}>/</span>
          <span
            style={{ color: "#222", cursor: "pointer" }}
            onClick={() => navigate("/products")}
          >
            Products
          </span>
          <span style={{ margin: "0 8px", color: "#888" }}>/</span>
          <span style={{ color: "#e63b3b", fontWeight: 600 }}>
            {product.title}
          </span>
        </nav>
        <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
          {/* Sidebar Filters (dummy, for look) */}
          <aside
            style={{
              minWidth: 200,
              maxWidth: 220,
              flex: "1 1 220px",
              background: "#fafbfc",
              borderRadius: 16,
              boxShadow: "0 2px 8px #e63b3b11",
              padding: 24,
              height: "fit-content",
              marginBottom: 32,
            }}
          >
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#222",
                marginBottom: 18,
              }}
            >
              Categories
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {categories.map((cat) => (
                <li key={cat} style={{ marginBottom: 10 }}>
                  <span
                    style={{
                      color: "#e63b3b",
                      fontWeight: 600,
                      fontSize: 15,
                      cursor: "pointer",
                      borderRadius: 8,
                      padding: "4px 12px",
                      background: "#fff",
                      border: "1px solid #e63b3b22",
                    }}
                  >
                    {cat}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
          {/* Product Details */}
          <main
            style={{
              flex: "3 1 500px",
              background: "#fff",
              borderRadius: 18,
              boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
              border: "1.5px solid #f2f2f2",
              padding: 32,
              minWidth: 320,
            }}
          >
            <button
              onClick={() => navigate("/products")}
              style={{
                marginBottom: 18,
                background: "linear-gradient(45deg, #e63b3b, #ff6b6b)",
                color: "#fff",
                border: "none",
                borderRadius: 18,
                padding: "7px 22px",
                fontWeight: 600,
                fontSize: 15,
                cursor: "pointer",
              }}
            >
              ← Back
            </button>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
              {/* Image Gallery */}
              <div style={{ minWidth: 260, maxWidth: 340, flex: "1 1 260px" }}>
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1.1/1",
                    background: "#f9f9f9",
                    borderRadius: 14,
                    overflow: "hidden",
                    marginBottom: 12,
                  }}
                >
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  {product.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={product.title + idx}
                      style={{
                        width: 54,
                        height: 54,
                        objectFit: "cover",
                        borderRadius: 8,
                        border: "2px solid #e63b3b22",
                        background: "#fff",
                      }}
                    />
                  ))}
                </div>
              </div>
              {/* Info */}
              <div style={{ flex: "2 1 320px", minWidth: 220 }}>
                <h1
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    color: "#111",
                    marginBottom: 8,
                  }}
                >
                  {product.title}
                </h1>
                <div
                  style={{
                    height: 4,
                    width: 60,
                    background: "linear-gradient(45deg, #e63b3b, #ff6b6b)",
                    borderRadius: 2,
                    marginBottom: 18,
                  }}
                />
                <div
                  style={{
                    color: "#e63b3b",
                    fontWeight: 700,
                    fontSize: 22,
                    marginBottom: 10,
                  }}
                >
                  ₹{product.price.toLocaleString()}
                </div>
                <div
                  style={{ color: "#65696C", fontSize: 16, marginBottom: 18 }}
                >
                  {product.description}
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap",
                    marginBottom: 16,
                  }}
                >
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: "linear-gradient(45deg, #e63b3b, #ff6b6b)",
                        color: "#fff",
                        borderRadius: 12,
                        padding: "2px 12px",
                        fontSize: 13,
                        fontWeight: 600,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 18,
                    marginBottom: 18,
                  }}
                >
                  <span
                    style={{
                      color: product.stock > 0 ? "#1bbf4c" : "#e63b3b",
                      fontWeight: 600,
                      fontSize: 15,
                    }}
                  >
                    {product.stock > 0
                      ? `In Stock (${product.stock})`
                      : "Out of Stock"}
                  </span>
                  <span style={{ color: "#888", fontSize: 14 }}>
                    Brand: <b style={{ color: "#222" }}>{product.brand}</b>
                  </span>
                  <span style={{ color: "#888", fontSize: 14 }}>
                    Rating: <b style={{ color: "#222" }}>{product.rating}★</b>
                  </span>
                </div>
                <button
                  style={{
                    background: "linear-gradient(45deg, #e63b3b, #ff6b6b)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 24,
                    padding: "12px 38px",
                    fontWeight: 700,
                    fontSize: 18,
                    marginTop: 10,
                    cursor: "pointer",
                    boxShadow: "0 2px 8px #e63b3b22",
                  }}
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
