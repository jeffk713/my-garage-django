import React from 'react';

const NavLink = ({ children }) => {
  return (
    <div className='text-center font-semibold tracking-wider cursor-pointer'>
      {children}
    </div>
  );
};

export default NavLink;
