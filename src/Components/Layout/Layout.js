import Sidebar from "../Common/Sidebar/Sidebar";
import Header from '../Common/Header/Header';
import React, { useState } from "react";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }
  return (
    <>
      <Header handleSidebar={handleSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} handleSidebar={handleSidebar} />
      <main className="main-wrapper">
        <div className="container-fluid">
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout;
