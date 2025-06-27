import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <a href="/">
                    <h1 className="footer__title">Jonathan</h1>
                </a>
                <ul className="footer__list">
                    <li>
                        <a href="/#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="/#portofolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="/#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://api.whatsapp.com/send?phone=40747104998&text=Hello!" className="footer__social-link" target="_blank">
                        <i class="bx bxl-whatsapp"></i>
                    </a>

                    <a href="https://linkedin.com/in/jonathanmogovan" className="footer__social-link" target="_blank">
                        <i class="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://github.com/jonathan2667" className="footer__social-link" target="_blank">
                        <i class="bx bxl-github"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; 2025 jmogovan. All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer;