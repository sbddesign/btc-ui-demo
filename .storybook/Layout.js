import React from 'react';
import '../src/index.css';

const Layout = ({ children }) => {
  return (
    <div className="p-4" style={{'padding': '20px'}}>
      {children}
    </div>
  )
}

export default Layout;