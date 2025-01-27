"use client"
import React from 'react';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div >
       
   
      <main className=''>
       
        {children}
     
      </main>
    </div>
  );
};

export default Layout;