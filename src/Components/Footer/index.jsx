import React from 'react';
import { ImFacebook2, ImInstagram, ImTwitter, ImYoutube } from 'react-icons/im';
import FooterLinks from './FooterLinks';
import './index.css';

const Footer = () => (
  <>
    <footer>
      <div className="social_links">
        <a
          href="https://www.facebook.com/NetflixSG"
          target="_blank"
          aria-label="facebook"
          rel="noreferrer"
        >
          <ImFacebook2 size={25} style={{ fill: 'grey' }} />
        </a>
        <a
          href="https://www.instagram.com/netflixSG/"
          target="_blank"
          aria-label="instagram"
          rel="noreferrer"
        >
          <ImInstagram size={25} style={{ fill: 'grey' }} />
        </a>
        <a
          href="https://twitter.com/NetflixAsia"
          target="_blank"
          aria-label="twitter"
          rel="noreferrer"
        >
          <ImTwitter size={25} style={{ fill: 'grey' }} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCZoC-XeDO7HxbAdeCaRPPCw/feed"
          target="_blank"
          aria-label="youtube"
          rel="noreferrer"
        >
          <ImYoutube size={25} style={{ fill: 'grey' }} />
        </a>
      </div>
      <FooterLinks />
      <div className="copyright">© 1997-2021 Netflix, Inc.</div>
    </footer>
  </>
);

export default Footer;
