import React from 'react';
import HeaderBottom from '../components/header/HeaderBottom';
import HeaderMiddle from '../components/header/HeaderMiddle';
import HeaderTop from '../components/header/HeaderTop';

const Header = () => {
  return (
    <header>
      {/* Top navigation header */}
      <div className="container">
        <HeaderTop />

        {/* Middle navigation header */}
       <HeaderMiddle />
      </div>
      {/* Bottom navigation header */}
      <HeaderBottom />
    </header>
  );
};

export default Header;
