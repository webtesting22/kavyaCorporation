import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  "All",
  ...Array.from(new Set(dummyProducts.map((p) => p.category))),
];

const Produts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const filteredProducts =
    selectedCategory === "All"
      ? dummyProducts
      : dummyProducts.filter((p) => p.category === selectedCategory);

  return (
    <div style={{ background: "#fff", minHeight: "100vh", padding: "40px 0" }}>
      {/* Breadcrumb */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px 20px 20px",
        }}
      >
        <nav style={{ fontSize: 14, marginBottom: 24 }}>
          <span
            style={{ color: "#222", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Home
          </span>
          <span style={{ margin: "0 8px", color: "#888" }}>/</span>
          <span style={{ color: "#e63b3b", fontWeight: 600 }}>Products</span>
        </nav>
        <h1
          style={{
            fontSize: 38,
            fontWeight: 800,
            color: "#111",
            marginBottom: 8,
          }}
        >
          Our Products
        </h1>
        <div
          style={{
            height: 4,
            width: 60,
            background: "linear-gradient(45deg, #e63b3b, #ff6b6b)",
            borderRadius: 2,
            marginBottom: 32,
          }}
        />
        {/* Filters */}
        <div style={{ display: "flex", gap: 16, marginBottom: 32 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background:
                  selectedCategory === cat
                    ? "linear-gradient(45deg, #e63b3b, #ff6b6b)"
                    : "#fff",
                color: selectedCategory === cat ? "#fff" : "#222",
                border: "1.5px solid #e63b3b",
                borderRadius: 24,
                padding: "8px 24px",
                fontWeight: 600,
                fontSize: 15,
                cursor: "pointer",
                boxShadow:
                  selectedCategory === cat ? "0 2px 8px #e63b3b22" : "none",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Product Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: 32,
            marginTop: 16,
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/products/${product.id}`)}
              style={{
                background: "#fff",
                borderRadius: 18,
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                border: "1.5px solid #f2f2f2",
                cursor: "pointer",
                transition: "box-shadow 0.2s, border 0.2s",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                minHeight: 420,
                position: "relative",
              }}
            >
              {/* Image Carousel */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 220,
                  background: "#f9f9f9",
                }}
              >
                <img
                  src={product.images[0]}
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderTopLeftRadius: 18,
                    borderTopRightRadius: 18,
                  }}
                />
                {product.images.length > 1 && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 10,
                      right: 10,
                      background: "rgba(0,0,0,0.6)",
                      color: "#fff",
                      fontSize: 12,
                      borderRadius: 12,
                      padding: "2px 10px",
                    }}
                  >
                    +{product.images.length - 1} more
                  </span>
                )}
              </div>
              {/* Product Info */}
              <div
                style={{
                  padding: "22px 18px 18px 18px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h2
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#111",
                    marginBottom: 6,
                  }}
                >
                  {product.title}
                </h2>
                <div
                  style={{
                    color: "#e63b3b",
                    fontWeight: 600,
                    fontSize: 16,
                    marginBottom: 8,
                  }}
                >
                  ₹{product.price.toLocaleString()}
                </div>
                <div
                  style={{
                    color: "#65696C",
                    fontSize: 15,
                    marginBottom: 10,
                    minHeight: 44,
                  }}
                >
                  {product.description}
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap",
                    marginBottom: 10,
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
                        fontSize: 12,
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
                    gap: 16,
                    marginTop: "auto",
                  }}
                >
                  <span
                    style={{
                      color: product.stock > 0 ? "#1bbf4c" : "#e63b3b",
                      fontWeight: 600,
                      fontSize: 14,
                    }}
                  >
                    {product.stock > 0
                      ? `In Stock (${product.stock})`
                      : "Out of Stock"}
                  </span>
                  <span style={{ color: "#888", fontSize: 13 }}>
                    Brand: <b style={{ color: "#222" }}>{product.brand}</b>
                  </span>
                  <span style={{ color: "#888", fontSize: 13 }}>
                    Rating: <b style={{ color: "#222" }}>{product.rating}★</b>
                  </span>
                </div>
              </div>
              {/* Brand Gradient Bar */}
              <div
                style={{
                  height: 6,
                  width: "100%",
                  background: "linear-gradient(45deg, #e63b3b, #ff6b6b)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Produts;
