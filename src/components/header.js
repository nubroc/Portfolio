import React, { useState, useEffect, useRef } from 'react';
import './header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header>
            <a href="./" className="logo">Numa Studio</a>
            <nav>
                <a
                    href='#'
                    onClick={isMenuOpen ? null : toggleMenu}
                    aria-expanded={isMenuOpen}
                    className={isMenuOpen ? 'disabled' : ''}
                    style={{ pointerEvents: isMenuOpen ? 'none' : 'auto' }}
                >
                    Menu
                </a>
            </nav>
            <div ref={sidebarRef} className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#section1">Services</a></li>
                    <li><a href="#section2">Projets</a></li>
                    <li><a href="#section3">Contact</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
