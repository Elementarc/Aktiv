import React from 'react';
import Navigation from "./navigation"

export default function Layout({children}: any) {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>  
        <Navigation/>
        {children}
    </div>
  );
}
