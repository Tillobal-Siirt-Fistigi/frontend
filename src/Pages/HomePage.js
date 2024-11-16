import React from 'react';
import { Home, ShoppingCart, User } from 'lucide-react';
import './HomePage.css';


const Header = () => (
    <header className="header">
      <img src="/placeholder.svg?height=50&width=150" alt="Tillobal Sirt Logo" className="logo" />
      <nav className="nav">
        <a href="#products" className="nav-link">Products</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#contact" className="nav-link">Contact us</a>
      </nav>
      <div className="user-actions">
        <User className="icon" />
        <ShoppingCart className="icon" />
      </div>
    </header>
  );
  
const Hero = () => (
<div className="hero">
    <div className="hero-content">
    <h1 className="hero-title">Tillobal Sirt Fistigi</h1>
    <p className="hero-subtitle">Taste the difference with our premium pistachios</p>
    <button className="cta-button">Check all of our pistachios</button>
    </div>
</div>
);

const ProductCard = ({ name, price, image }) => (
<div className="product-card">
    <img src={image} alt={name} className="product-image" />
    <h3 className="product-name">{name}</h3>
    <p className="product-price">${price.toFixed(2)}</p>
</div>
);

const Products = () => (
<section className="products-section" id="products">
    <h2 className="section-title">Products</h2>
    <div className="products-grid">
    <ProductCard name="Roasted Cracked Salted Pistachios" price={12.99} image="/assets/images/kavrulmus.png" />
    <ProductCard name="(Not Roasted) Raw Pistachios" price={11.99} image="/assets/images/kavrulmamis.png" />
    <ProductCard name="Tree-Ripened Shelled Pistachios" price={10.99} image="/assets/images/kuru.png" />
    <ProductCard name="Roasted Pistachio Kernels" price={14.99} image="/assets/images/ic.png" />
    <ProductCard name="(Not Roasted) Raw Pistachio Kernels" price={8.99} image="/assets/images/ic2.png" />
    <ProductCard name="Chopped File Siirt Pistachio Kernels" price={13.99} image="/assets/images/kesik.png" />
    <ProductCard name="Pistachio flour" price={7.99} image="/assets/images/toz.png" />
    </div>
</section>
);

const Feature = () => (
<section className="feature-section" id="about">
    <div className="feature-content">
    <h2 className="section-title">Organic and tasteful pistachios</h2>
    <ul className="feature-list">
        <li>Eco-sustainable</li>
        <li>Organic</li>
        <li>Supporting local farmers</li>
    </ul>
    <button className="cta-button">Learn more</button>
    </div>
    <div className="feature-image">
    <img src="/assets/images/PistachioTreePhoto.png" alt="Pistachio tree" />
    </div>
</section>
);

const Testimonial = ({ quote, author, rating }) => (
<div className="testimonial-card">
    <div className="testimonial-rating">
    {[...Array(rating)].map((_, i) => (
        <span key={i} className="star">★</span>
    ))}
    </div>
    <p className="testimonial-quote">"{quote}"</p>
    <p className="testimonial-author">{author}</p>
</div>
);

const Testimonials = () => (
<section className="testimonials-section">
    <h2 className="section-title">Testimonials</h2>
    <div className="testimonials-grid">
    <Testimonial quote="I love it! Best pistachios ever!" author="John Doe" rating={5} />
    <Testimonial quote="Excellent product for snacking" author="Jane Smith" rating={5} />
    <Testimonial quote="Organic, natural, and healthy - love these!" author="Mike Johnson" rating={5} />
    </div>
</section>
);

const PopularProducts = () => (
<section className="popular-products-section">
    <h2 className="section-title">Popular</h2>
    <div className="products-grid">
    <ProductCard name="Roasted Cracked Salted Pistachios" price={12.99} image="/assets/images/kavrulmus.png" />
    <ProductCard name="(Not Roasted) Raw Pistachios" price={11.99} image="/assets/images/kavrulmamis.png" />
    <ProductCard name="Tree-Ripened Shelled Pistachios" price={10.99} image="/assets/images/kuru.png" />
    <ProductCard name="Roasted Pistachio Kernels" price={14.99} image="/assets/images/ic.png" />
    </div>
</section>
);

const Footer = () => (
<footer className="footer">
    <div className="footer-content">
    <div className="footer-section">
        <img src="/placeholder.svg?height=50&width=150" alt="Tillobal Sirt Logo" className="footer-logo" />
        <p>Your natural gift from Siirt</p>
    </div>
    <div className="footer-section">
        <h3 className="footer-title">Products</h3>
        <ul className="footer-list">
        <li><a href="#" className="footer-link">New arrivals</a></li>
        <li><a href="#" className="footer-link">Best sellers</a></li>
        <li><a href="#" className="footer-link">Sale</a></li>
        </ul>
    </div>
    <div className="footer-section">
        <h3 className="footer-title">About</h3>
        <ul className="footer-list">
        <li><a href="#" className="footer-link">Our story</a></li>
        <li><a href="#" className="footer-link">Sustainability</a></li>
        <li><a href="#" className="footer-link">Contact us</a></li>
        </ul>
    </div>
    <div className="footer-section">
        <h3 className="footer-title">Help</h3>
        <ul className="footer-list">
        <li><a href="#" className="footer-link">Shipping</a></li>
        <li><a href="#" className="footer-link">Returns</a></li>
        <li><a href="#" className="footer-link">FAQ</a></li>
        </ul>
    </div>
    </div>
    <div className="footer-bottom">
    <p>&copy; 2024 Tillobal Sirt. All rights reserved.</p>
    </div>
</footer>
);



const HomePage = () => (
    <div className="app">
        <Header />
        <main>
            <Hero />
            <Products />
            <Feature />
            <Testimonials />
            <PopularProducts />
        </main>
        <Footer />
    </div>
);

export default HomePage

