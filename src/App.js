import "./App.css";
import React from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      {contacts.map((element) => (
        <Contact data={element} />
      ))}
    </div>
  );
};

export default App;
