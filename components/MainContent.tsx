import React from 'react';
import LandingPage from './LandingPage';

interface MainContentProps {
  setPage: (page: string) => void;
  setSelectedProduct: (productName: string | null) => void;
  heroBannerUrl: string;
}

const MainContent: React.FC<MainContentProps> = ({ setPage, setSelectedProduct, heroBannerUrl }) => {
  return (
    <>
      <LandingPage setPage={setPage} setSelectedProduct={setSelectedProduct} heroBannerUrl={heroBannerUrl} />
    </>
  );
};

export default MainContent;
