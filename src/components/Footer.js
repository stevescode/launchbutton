import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <ul class="Gb7db0d G424bc7">
        <li class="Ga388f9 G1b59f4 16px G20ad7f">
            <a class="Ga8eb7b G8aa691 Gefef6b G5153a3 Gce18fe" href="/#" to="/" data-selid="footer-home" title="Home">Home</a>
        </li>
        <li class="Ga388f9 G1b59f4 16px G20ad7f"><span data-test="week-recipes" role="button" tabindex="0">
            <a class="Ga8eb7b G8aa691 Gefef6b G5153a3 Gce18fe" data-selid="footer-this-weeks-recipes" title="This Week's Recipes" href="/#">This Week's Recipes</a></span>
        </li>
        <li class="Ga388f9 G1b59f4 16px G20ad7f">
            <a class="Ga8eb7b G8aa691 Gefef6b G5153a3 Gce18fe" href="/#" to="/help-centre" data-optimizely="footer-help-link" data-selid="footer-learn-more" title="Help">Help</a>
        </li>
        <li class="Ga388f9 G1b59f4 16px G20ad7f mobile-hidden550">
            Terms (<a class="Ga8eb7b G8aa691 Gefef6b G5153a3 Gce18fe" href="/#" to="/terms-of-use" data-selid="footer-terms-of-use" title="Terms &amp; Conditions">Website</a>) (<a class="Ga8eb7b G8aa691 Gefef6b G5153a3 Gce18fe" href="/terms-and-conditions" to="/terms-and-conditions" data-selid="footer-terms-and-conditions" title="Terms &amp; Conditions for Sale of Goods">Sale</a>)
        </li>
        <li class="Ga388f9 G1b59f4 16px G20ad7f mobile-hidden550">
            <a class="Ga8eb7b G8aa691 Gefef6b G5153a3 Gce18fe" href="/#" data-selid="footer-cookbook" to="/cookbook" title="Cookbook">Cookbook</a>
        </li>
        <li class="Ga388f9 G1b59f4 16px G20ad7f mobile-hidden1060">
            <a class="Ga8eb7b G8aa691 Gefef6b G5153a3 Gce18fe" href="/#" to="/jobs" data-selid="footer-jobs" title="Jobs">Jobs</a>
        </li>
        <li class="Ga388f9 G1b59f4 16px G20ad7f mobile-hidden1060">
            <a class="Ga8eb7b G8aa691 Gefef6b G5153a3 Gce18fe" href="/#" to="/blog/sustainability" data-selid="footer-we-care" title="We Care">We Care</a>
        </li>
        <li class="Ga388f9 G1b59f4 16px G20ad7f mobile-hidden1060">
            <a class="Ga8eb7b G8aa691 Gefef6b G5153a3 Gce18fe" href="/#" to="/blog" data-selid="footer-blog" title="Blog">Blog</a>
        </li>
        <li class="Ga388f9 G1b59f4 16px G20ad7f mobile-hidden1060">
            <a class="Ga8eb7b G8aa691 Gefef6b G5153a3 Gce18fe" data-selid="footer-privacy-statement" title="Privacy Policy" href="/#">Privacy Policy</a>
        </li>

      </ul>
    </div>
  );
};

export default Footer;
