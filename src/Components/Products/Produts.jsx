import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  'All',
  ...Array.from(new Set(dummyProducts.map((p) => p.category))),
];

const Produts = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const filteredProducts =
    selectedCategory === 'All'
      ? dummyProducts
      : dummyProducts.filter((p) => p.category === selectedCategory);

  return (
    <div style={{ background: '#fff', minHeight: '100vh', padding: '40px 0' }}>
      {/* Breadcrumb */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px 20px 20px' }}>
        <nav style={{ fontSize: 14, marginBottom: 24 }}>
          <span style={{ color: '#222', cursor: 'pointer' }} onClick={() => navigate('/')}>Home</span>
          <span style={{ margin: '0 8px', color: '#888' }}>/</span>
          <span style={{ color: '#e63b3b', fontWeight: 600 }}>Products</span>
        </nav>
        <h1 style={{ fontSize: 38, fontWeight: 800, color: '#111', marginBottom: 8 }}>Our Products</h1>
        <div style={{ height: 4, width: 60, background: 'linear-gradient(45deg, #e63b3b, #ff6b6b)', borderRadius: 2, marginBottom: 32 }} />
        {/* Filters */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 32 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: selectedCategory === cat ? 'linear-gradient(45deg, #e63b3b, #ff6b6b)' : '#fff',
                color: selectedCategory === cat ? '#fff' : '#222',
                border: '1.5px solid #e63b3b',
                borderRadius: 24,
                padding: '8px 24px',
                fontWeight: 600,
                fontSize: 15,
                cursor: 'pointer',
                boxShadow: selectedCategory === cat ? '0 2px 8px #e63b3b22' : 'none',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Product Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: 32,
            marginTop: 16,
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/products/${product.id}`)}
              style={{
                background: '#fff',
                borderRadius: 18,
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                border: '1.5px solid #f2f2f2',
                cursor: 'pointer',
                transition: 'box-shadow 0.2s, border 0.2s',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 420,
                position: 'relative',
              }}
            >
              {/* Image Carousel */}
              <div style={{ position: 'relative', width: '100%', height: 220, background: '#f9f9f9' }}>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: 18, borderTopRightRadius: 18 }}
                />
                {product.images.length > 1 && (
                  <span style={{ position: 'absolute', bottom: 10, right: 10, background: 'rgba(0,0,0,0.6)', color: '#fff', fontSize: 12, borderRadius: 12, padding: '2px 10px' }}>
                    +{product.images.length - 1} more
                  </span>
                )}
              </div>
              {/* Product Info */}
              <div style={{ padding: '22px 18px 18px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', marginBottom: 6 }}>{product.title}</h2>
                <div style={{ color: '#e63b3b', fontWeight: 600, fontSize: 16, marginBottom: 8 }}>₹{product.price.toLocaleString()}</div>
                <div style={{ color: '#65696C', fontSize: 15, marginBottom: 10, minHeight: 44 }}>{product.description}</div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                  {product.tags.map((tag) => (
                    <span key={tag} style={{ background: 'linear-gradient(45deg, #e63b3b, #ff6b6b)', color: '#fff', borderRadius: 12, padding: '2px 12px', fontSize: 12, fontWeight: 600 }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 'auto' }}>
                  <span style={{ color: product.stock > 0 ? '#1bbf4c' : '#e63b3b', fontWeight: 600, fontSize: 14 }}>
                    {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
                  </span>
                  <span style={{ color: '#888', fontSize: 13 }}>Brand: <b style={{ color: '#222' }}>{product.brand}</b></span>
                  <span style={{ color: '#888', fontSize: 13 }}>Rating: <b style={{ color: '#222' }}>{product.rating}★</b></span>
                </div>
              </div>
              {/* Brand Gradient Bar */}
              <div style={{ height: 6, width: '100%', background: 'linear-gradient(45deg, #e63b3b, #ff6b6b)' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Produts;