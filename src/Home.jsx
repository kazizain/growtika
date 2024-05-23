import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    "Custom web development tailored to your business needs.",
    "Professional logo design to represent your brand identity.",
    "Comprehensive bidding services to help you win more projects."
  ];

  return (
    <div className="Home">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Growtika</div>
          <div>
            <a href="#services" className="text-white mx-4 hover:underline">Services</a>
            <a href="#about" className="text-white mx-4 hover:underline">About Us</a>
            <a href="#contact" className="text-white mx-4 hover:underline">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-400 to-purple-600 text-white h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 animate-bounce">Welcome to Growtika</h1>
          <p className="text-2xl mb-8">Fostering creativity and innovation to drive business growth.</p>
          <Link to="/services">
            <button className="bg-white text-blue-600 py-2 px-6 rounded-full text-xl hover:bg-gray-200 transition duration-300">Get Started</button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About Growtika</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {services.map((service, index) => (
                <p key={index} className="text-gray-600 mb-4">{service}</p>
              ))}
            </div>
            <div className="h-64 md:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.838604550305!2d-122.08424968469397!3d37.42206597982492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24f5b6a3db1%3A0x9172d83d342a6e8e!2sGoogleplex!5e0!3m2!1sen!2sus!4v1622308086789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Growtika Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Growtika. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
