import React from "react";
import CoinGeckco from '../images/coingecko-logo.webp';
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>Powered By: </p>
        <img src={CoinGeckco} alt="CoinGeckco Logo" />
      </div>
      <hr className="divider" />
      <div className="container">
        <p>
          Copyright © 2023 Crypto Compare All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
