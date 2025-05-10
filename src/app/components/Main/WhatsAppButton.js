'use client'

import React from 'react';
import Image from 'next/image';

const WhatsAppButton = ({ phoneNumber }) => {
  const handleWhatsAppClick = () => {
    // Format the phone number (remove spaces, dashes, etc.)
    const formattedNumber = phoneNumber.replace(/\s+/g, '');
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${formattedNumber}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg rounded-full"
      onClick={handleWhatsAppClick}
      title={`Chat with us on WhatsApp: ${phoneNumber}`}
    >
      <div className="relative h-16 w-16 bg-[#25D366] rounded-full flex items-center justify-center p-3">
        <Image 
          src="/whatsapp.png" 
          alt="WhatsApp Chat"
          width={45}
          height={45}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default WhatsAppButton;
