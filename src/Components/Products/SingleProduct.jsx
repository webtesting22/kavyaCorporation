import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Dummy data (should match Produts.jsx)
const dummyProducts = [
  {
    id: 1,
    title: 'Fire Extinguisher ABC',
    images: [
      '/Images/HeroSection/Fire Extinguishers.png',
      'https://images.unsplash.com/photo-1722227089176-a981d2544b5f?q=80&w=3087&auto=format&fit=crop',
    ],
    description: 'Multi-purpose dry chemical fire extinguisher for class A, B, and C fires. Reliable and easy to use.',
    stock: 12,
    price: 2499,
    brand: 'Kavya',
    category: 'Extinguishers',
    tags: ['Portable', 'Safety', 'ABC'],
    rating: 4.7,
  },
  {
    id: 2,
    title: 'Fire Hose Reel System',
    images: [
      'https://suresafety.com/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/f/i/fire-hose-reel_1.jpg',
      '/Images/HeroSection/Commercial Systems.jpg',
    ],
    description: 'Robust fire hose reel system for commercial and industrial use. Ensures quick response to fire emergencies.',
    stock: 7,
    price: 8999,
    brand: 'Kavya',
    category: 'Hose Reels',
    tags: ['Water-Based', 'Suppression'],
    rating: 4.5,
  },
  {
    id: 3,
    title: 'Fire Alarm System',
    images: [
      '/Images/HeroSection/Fire Alarm Systems.jpg',
      'https://images.unsplash.com/photo-1614519473079-44574d3f4389?q=80&w=2940&auto=format&fit=crop',
    ],
    description: 'Advanced fire alarm system with early detection and wireless connectivity. Protects lives and property.',
    stock: 20,
    price: 15999,
    brand: 'Kavya',
    category: 'Alarms',
    tags: ['Detection', 'Wireless'],
    rating: 4.9,
  },
  {
    id: 4,
    title: 'Exit & Emergency Lighting',
    images: [
      '/Images/HeroSection/Exit Lighting.jpg',
      'https://images.unsplash.com/photo-1735321626737-f80d9d2076c9?q=80&w=2869&auto=format&fit=crop',
    ],
    description: 'High-visibility exit and emergency lighting for safe evacuation during emergencies.',
    stock: 15,
    price: 3499,
    brand: 'Kavya',
    category: 'Lighting',
    tags: ['LED', 'Emergency'],
    rating: 4.6,
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
      <div style={{ padding: 60, textAlign: 'center', color: '#e63b3b', fontWeight: 700, fontSize: 24 }}>
        Product not found.
        <br />
        <button onClick={() => navigate('/products')} style={{ marginTop: 24, background: 'linear-gradient(45deg, #e63b3b, #ff6b6b)', color: '#fff', border: 'none', borderRadius: 24, padding: '10px 32px', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>Back to Products</button>
      </div>
    );
  }

  return (
    <div style={{ background: '#fff', minHeight: '100vh', padding: '40px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: 14, marginBottom: 24 }}>
          <span style={{ color: '#222', cursor: 'pointer' }} onClick={() => navigate('/')}>Home</span>
          <span style={{ margin: '0 8px', color: '#888' }}>/</span>
          <span style={{ color: '#222', cursor: 'pointer' }} onClick={() => navigate('/products')}>Products</span>
          <span style={{ margin: '0 8px', color: '#888' }}>/</span>
          <span style={{ color: '#e63b3b', fontWeight: 600 }}>{product.title}</span>
        </nav>
        <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
          {/* Sidebar Filters (dummy, for look) */}
          <aside style={{ minWidth: 200, maxWidth: 220, flex: '1 1 220px', background: '#fafbfc', borderRadius: 16, boxShadow: '0 2px 8px #e63b3b11', padding: 24, height: 'fit-content', marginBottom: 32 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#222', marginBottom: 18 }}>Categories</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {categories.map((cat) => (
                <li key={cat} style={{ marginBottom: 10 }}>
                  <span style={{ color: '#e63b3b', fontWeight: 600, fontSize: 15, cursor: 'pointer', borderRadius: 8, padding: '4px 12px', background: '#fff', border: '1px solid #e63b3b22' }}>{cat}</span>
                </li>
              ))}
            </ul>
          </aside>
          {/* Product Details */}
          <main style={{ flex: '3 1 500px', background: '#fff', borderRadius: 18, boxShadow: '0 4px 24px rgba(0,0,0,0.07)', border: '1.5px solid #f2f2f2', padding: 32, minWidth: 320 }}>
            <button onClick={() => navigate('/products')} style={{ marginBottom: 18, background: 'linear-gradient(45deg, #e63b3b, #ff6b6b)', color: '#fff', border: 'none', borderRadius: 18, padding: '7px 22px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>← Back</button>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
              {/* Image Gallery */}
              <div style={{ minWidth: 260, maxWidth: 340, flex: '1 1 260px' }}>
                <div style={{ width: '100%', aspectRatio: '1.1/1', background: '#f9f9f9', borderRadius: 14, overflow: 'hidden', marginBottom: 12 }}>
                  <img src={product.images[0]} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  {product.images.map((img, idx) => (
                    <img key={idx} src={img} alt={product.title + idx} style={{ width: 54, height: 54, objectFit: 'cover', borderRadius: 8, border: '2px solid #e63b3b22', background: '#fff' }} />
                  ))}
                </div>
              </div>
              {/* Info */}
              <div style={{ flex: '2 1 320px', minWidth: 220 }}>
                <h1 style={{ fontSize: 32, fontWeight: 800, color: '#111', marginBottom: 8 }}>{product.title}</h1>
                <div style={{ height: 4, width: 60, background: 'linear-gradient(45deg, #e63b3b, #ff6b6b)', borderRadius: 2, marginBottom: 18 }} />
                <div style={{ color: '#e63b3b', fontWeight: 700, fontSize: 22, marginBottom: 10 }}>₹{product.price.toLocaleString()}</div>
                <div style={{ color: '#65696C', fontSize: 16, marginBottom: 18 }}>{product.description}</div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 16 }}>
                  {product.tags.map((tag) => (
                    <span key={tag} style={{ background: 'linear-gradient(45deg, #e63b3b, #ff6b6b)', color: '#fff', borderRadius: 12, padding: '2px 12px', fontSize: 13, fontWeight: 600 }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 18 }}>
                  <span style={{ color: product.stock > 0 ? '#1bbf4c' : '#e63b3b', fontWeight: 600, fontSize: 15 }}>
                    {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
                  </span>
                  <span style={{ color: '#888', fontSize: 14 }}>Brand: <b style={{ color: '#222' }}>{product.brand}</b></span>
                  <span style={{ color: '#888', fontSize: 14 }}>Rating: <b style={{ color: '#222' }}>{product.rating}★</b></span>
                </div>
                <button style={{ background: 'linear-gradient(45deg, #e63b3b, #ff6b6b)', color: '#fff', border: 'none', borderRadius: 24, padding: '12px 38px', fontWeight: 700, fontSize: 18, marginTop: 10, cursor: 'pointer', boxShadow: '0 2px 8px #e63b3b22' }}>Enquire Now</button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct; 