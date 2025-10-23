import React from "react";

const Footer = () => {
  return (
    <div className="bg-champagne font-quicksand">
      <footer className="text-center py-6 bg-champange">
        <p className="text-sm text-blush">&copy; {new Date().getFullYear()} JavaBunny. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
