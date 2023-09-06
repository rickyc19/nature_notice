import React from 'react';

function Logo() {
  return (
    <div className={'logo-with-text'}>
      <img src={"%PUBLIC_URL%/tree-icon.svg"} alt={'logo'} />
      <h3>Nature Notice</h3>
    </div>
  );
}

export default function Navbar() {
  return (
    <nav>
      <Logo />
    </nav>
  );
}
