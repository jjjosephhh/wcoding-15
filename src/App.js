import "./App.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import { UserContext } from "./contexts";
import { useState } from "react";
import UseCallbackDemo from "./pages/UseCallbackDemo";

function App() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    age: 0,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:userId" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/demo" element={<UseCallbackDemo />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
