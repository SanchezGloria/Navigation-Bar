import React, { useState, useEffect, useRef } from 'react';
import NavBar from './NavBar';
import '../Stylesheets/App.css';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <NavBar open={open} />
    </div>
  );
}

export default App;
