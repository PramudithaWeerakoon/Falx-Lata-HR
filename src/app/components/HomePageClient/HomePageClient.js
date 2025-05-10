'use client'

import React from 'react';
import HomePageContent from '@/app/components/Main/Main';
import ScrollTriggeredMenu from '../NavBar/ScrollTriggeredMenu';
import PageLoader from '../Main/PageLoader';

export default function HomePageClient() {
  return (
    <>
      <ScrollTriggeredMenu />
      <PageLoader>
        <HomePageContent />
      </PageLoader>
    </>
  );
}
