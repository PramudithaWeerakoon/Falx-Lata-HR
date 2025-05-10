'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import WhatsAppButton from '@/app/components/Main/WhatsAppButton';

const ConditionalWhatsAppButton = ({ phoneNumber }) => {
  const pathname = usePathname();
  
  // Don't show on the contact page
  if (pathname === '/contact') {
    return null;
  }
  
  return <WhatsAppButton phoneNumber={phoneNumber} />;
};

export default ConditionalWhatsAppButton;
