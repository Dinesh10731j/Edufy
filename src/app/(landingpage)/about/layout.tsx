"use client"
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/footer';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div >
       
   
      <main className=''>
       
       <Header/>
        {children}
        <Footer/>
     
      </main>
    </div>
  );
};

export default Layout;