import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const products = [
  {
    id: 1,
    name: "Roasted Cracked Salted Pistachios",
    price: 12.99,
    image: "/assets/images/kavrulmus.png"
  },
  {
    id: 2,
    name: "(Not Roasted) Raw Pistachios",
    price: 11.99,
    image: "/assets/images/kavrulmamis.png"
  },
  {
    id: 3,
    name: "Tree-Ripened Shelled Pistachios",
    price: 10.99,
    image: "/assets/images/kuru.png"
  },
  {
    id: 4,
    name: "Roasted Pistachio Kernels",
    price: 14.99,
    image: "/assets/images/ic.png"
  },
  {
    id: 5,
    name: "(Not Roasted) Raw Pistachio Kernels",
    price: 8.99,
    image: "/assets/images/ic2.png"
  },
  {
    id: 6,
    name: "Chopped File Siirt Pistachio Kernels",
    price: 13.99,
    image: "/assets/images/kesik.png"
  },
  {
    id: 7,
    name: "Pistachio flour",
    price: 7.99,
    image: "/assets/images/toz.png"
  }
];

const SimpleDialog = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            ×
          </button>
        </div>
        <div className="text-gray-600">
  {content.map((line, index) => (
    <p key={index} className="mb-2">
      {line.trim() === '' ? <br /> : line}
    </p>
  ))}
</div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Hero = () => (
  <div className="relative h-screen">
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/background.png')" }}
    />
    <div className="absolute inset-0 bg-black bg-opacity-30" />
    <div className="relative h-full flex items-center justify-center">
      <div className="bg-white bg-opacity-90 p-12 rounded-lg max-w-2xl mx-4 text-center">
        <h1 className="text-4xl font-bold mb-4">PistachioHut</h1>
        <p className="text-gray-700 mb-6">
          From our fields to your door: pure, authentic pistachios. Always fresh, delivered everywhere.
        </p>
        <Link to="/products">
          <button className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition-colors">
            Check Our Pistachio Collection
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const ProductCard = ({ id, name, price, image }) => (
  <Link to={`/product/${id}`} className="block">
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-medium text-gray-800 mb-2">{name}</h3>
      <p className="text-green-600 font-bold">${price.toFixed(2)}</p>
    </div>
  </Link>
);

const Products = () => (
  <section id="products" className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Products</h2>
      <p className="text-center text-gray-600 mb-12">Order it for you or for your beloved ones</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  </section>
);

const Feature = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const learnMoreContent = {
    title: 'Our Commitment to Quality',
    content: [
      `🌱 Eco-sustainable Practices:`,
      `• Solar-powered processing facilities`,
      `• Water conservation techniques`,
      `• Minimal packaging waste`,
      `• Composting and recycling programs`,
      ``,
      `🌿 Organic Certification:`,
      `• No artificial pesticides or fertilizers`,
      `• Non-GMO verified`,
      `• Regular soil quality monitoring`,
      `• Natural pest control methods`,
      ``,
      `🤝 Supporting Local Communities:`,
      `• Fair wages for all workers`,
      `• Educational programs for local farmers`,
      `• Community development initiatives`,
      `• Local employment opportunities`,
      ``,
      `🔍 Quality Control:`,
      `• Hand-selected pistachios`,
      `• Multiple quality check points`,
      `• State-of-the-art processing`,
      `• Rigorous food safety standards`,
      ``,
      `Join us in our mission to provide the best pistachios while protecting our environment and supporting our local communities.`,
    ],
  };
  

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">Organic and tasteful pistachios</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
              Eco-sustainable
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
              Vegan
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
              Organic
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
              Supporting local businesses
            </li>
          </ul>
          <button 
            onClick={() => setIsDialogOpen(true)}
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors"
          >
            Learn more
          </button>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/assets/images/PistachioTreePhoto.png" 
            alt="Fresh pistachios on tree" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <SimpleDialog 
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title={learnMoreContent.title}
        content={learnMoreContent.content}
      />
    </section>
  );
};

const TestimonialCard = ({ quote, author, rating, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex justify-center mb-4">
      <img src={image} alt={author} className="w-16 h-16 rounded-full" />
    </div>
    <div className="flex justify-center mb-4">
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-3xl text-yellow-400">★</span>
        ))}
      </div>
    </div>
    <p className="text-center text-gray-700 mb-4 italic">"{quote}"</p>
    <p className="text-center font-medium">{author}</p>
  </div>
);

const Testimonials = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Testimonials</h2>
      <p className="text-center text-gray-600 mb-12">Some quotes from our happy customers</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TestimonialCard 
          quote="Best pistachio ever!"
          author="Linda"
          rating={4}
          image="/assets/images/linda.png"
        />
        <TestimonialCard 
          quote="Recommended for everyone!"
          author="Edward"
          rating={5}
          image="/assets/images/edward.png"
        />
        <TestimonialCard 
          quote="Organic, natural, and tasteful - just great"
          author="Alex"
          rating={4}
          image="/assets/images/alex.png"
        />
      </div>
    </div>
  </section>
);

const PopularProducts = () => {
  const popularProducts = products.slice(0, 4);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Popular</h2>
        <p className="text-center text-gray-600 mb-12">Our top-selling products that you may like</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {popularProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <Products />
    <Feature />
    <Testimonials />
    <PopularProducts />
    <Footer />
  </div>
);

export default HomePage;