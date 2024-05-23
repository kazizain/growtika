import React from 'react';

const About = () => {
  const waidatAliImage = 'wa.jpeg';
  const mohsinHameediImage = 'mo.jpeg';

  return (
    <div className="bg-gradient-to-br from-blue-400 to-purple-600 min-h-screen flex flex-col items-center justify-center">
      <header className="bg-white bg-opacity-25 backdrop-blur-lg w-full py-6 shadow-md">
        <h1 className="text-4xl text-white text-center font-bold">About Us</h1>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl text-gray-800 font-semibold mb-4 animate-pulse">Meet the Founders</h2>
          <p className="text-lg text-gray-700 max-w-xl animate-fadeIn">Learn more about the founders of Growtika and their contributions to the company.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-lg">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={waidatAliImage} alt="Waidat Ali" className="w-full h-65 object-cover rounded-t-lg" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Waidat Ali</h3>
              <p className="text-gray-700 mb-4">Founder</p>
              <p className="text-gray-600">Waidat Ali, the founder of Growtika, brings extensive experience in business development and strategic planning. His vision and leadership have been instrumental in shaping the company's growth trajectory.</p>
            </div>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={mohsinHameediImage} alt="Mohsin Hameedi" className="w-full h-65 object-cover rounded-t-lg" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Mohsin Hameedi</h3>
              <p className="text-gray-700 mb-4">Co-Founder</p>
              <p className="text-gray-600">Mohsin Hameedi, the co-founder of Growtika, is known for his innovative ideas and entrepreneurial spirit. His dedication to excellence and passion for growth drive the company forward.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <h2 className="text-2xl text-gray-800 font-semibold mb-4 animate-pulse">Our Vision</h2>
          <p className="text-lg text-gray-700 max-w-xl animate-fadeIn">We are committed to fostering creativity and innovation to drive the growth of our company. Mohsin Hameedi's leadership and vision guide us towards exploring new opportunities and bringing fresh ideas to the table.</p>
        </div>
      </main>

      <footer className="bg-white bg-opacity-25 backdrop-blur-lg w-full py-4 shadow-md">
        <p className="text-white text-center">&copy; 2024 Growtika. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
