"use client"
import React from 'react';
import DashboardSidenav from '@/components/dashboardsidenav';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div >
       
   
      <main className=''>
       
      <DashboardSidenav>{children}</DashboardSidenav>  
     
      </main>
    </div>
  );
};

export default Layout;