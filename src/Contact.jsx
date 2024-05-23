import React from 'react';

const Contact = () => {
  const contactInfo = [
    { name: 'Mohsin Hameedi', email: 'designspectracreations@gmail.com', whatsapp: '+923184439893' },
    { name: 'Waidat Ali', email: 'aliwahdat428@gmail.com', whatsapp: '+923471239954' }
  ];

  const handleEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleWhatsApp = (whatsapp) => {
    window.open(`https://wa.me/${whatsapp}`, '_blank');
  };

  return (
    <div className="bg-gradient-to-br from-blue-400 to-purple-600 min-h-screen flex flex-col items-center justify-center">
      <header className="bg-white bg-opacity-25 backdrop-blur-lg w-full py-6 shadow-md">
        <h1 className="text-4xl text-white text-center font-bold animate-pulse">Get in Touch</h1>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl text-white font-semibold mb-4">Connect with Us</h2>
          <p className="text-lg text-white max-w-xl">Reach out to us via email or WhatsApp. Click on the buttons below to contact Mohsin Hameedi or Waidat Ali.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-lg">
          {contactInfo.map((contact, index) => (
            <div key={index} className="bg-white bg-opacity-25 backdrop-blur-md shadow-md rounded-lg p-6 cursor-pointer transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold text-white mb-2">{contact.name}</h3>
              <div className="flex items-center mb-2">
                <span className="mr-2 text-white"><i className="fas fa-envelope"></i></span>
                <p onClick={() => handleEmail(contact.email)} className="cursor-pointer text-white">{contact.email}</p>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-white"><i className="fab fa-whatsapp"></i></span>
                <p onClick={() => handleWhatsApp(contact.whatsapp)} className="cursor-pointer text-white">{contact.whatsapp}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-white bg-opacity-25 backdrop-blur-lg w-full py-4 shadow-md">
        <p className="text-gray-800 text-center">&copy; 2024 Growtika. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
