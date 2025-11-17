import React from "react";
import "./Footer.css";

const Footer = () => {
    //hàm cuộn lên đầu trang
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="footer" data-aos='fade-up'>
            <div className="footer-content">
                <p>© {new Date().getFullYear()} Mai Tấn Hưng. All right reserved.</p>
                
                <ul className="footer-links">
                    <li><a href="#about">Giới thiệu</a></li>
                    <li><a href="#projects">Dự án</a></li>
                    <li><a href="#contact">Liên hệ</a></li>
                </ul>

                <button className="scroll-top" onClick={scrollToTop}>⬆️</button>
            </div>
        </footer>
    );
};

export default Footer;