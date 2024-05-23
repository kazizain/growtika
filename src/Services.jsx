import React from 'react';

const Services = () => {
  return (
    <div className="bg-gradient-to-br from-blue-400 to-purple-600 min-h-screen flex flex-col items-center justify-center">
      <header className="bg-white bg-opacity-25 backdrop-blur-lg w-full py-6 shadow-md">
        <h1 className="text-4xl text-white text-center font-bold animate-pulse">Welcome to Growtika</h1>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl text-white font-semibold mb-4">Our Home for Professional Services</h2>
          <p className="text-lg text-white max-w-xl">Explore our range of professional services including web development, logo design, and bidding services.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-lg">
          <div className="bg-white bg-opacity-25 backdrop-blur-md shadow-md rounded-lg overflow-hidden transform transition hover:scale-105">
            <img src="web.jpeg" alt="Web Development" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Web Development</h3>
              <p className="text-gray-700">Custom web development services to help you build and maintain a strong online presence.</p>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-25 backdrop-blur-md shadow-md rounded-lg overflow-hidden transform transition hover:scale-105">
            <img src="OIP.jpeg" alt="Logo Design" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Logo Design</h3>
              <p className="text-gray-700">Professional logo design services to create a memorable brand identity.</p>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-25 backdrop-blur-md shadow-md rounded-lg overflow-hidden transform transition hover:scale-105">
            <img src="bid.png" alt="Bidding Services" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Bidding Services</h3>
              <p className="text-gray-700">Expert bidding services to help you win contracts and grow your business.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white bg-opacity-25 backdrop-blur-lg w-full py-4 shadow-md">
        <p className="text-gray-800 text-center">&copy; 2024 Growtika. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Services;
