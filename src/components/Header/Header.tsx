import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import type { RootState } from '../../app/store'; // adjust the path as needed
import styles from './Header.module.css'

const Header = () => {
  const { totalQuantity } = useSelector((state: RootState) => state.cart)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <div className={styles.contactInfo}>
            <span className={styles.phone}>
              <i className="fas fa-phone"></i> (225) 555-0118
            </span>
            <span className={styles.email}>
              <i className="far fa-envelope"></i> michelle.rivera@example.com
            </span>
          </div>
          <div className={styles.socialPromo}>
            <span>Follow Us and get a chance to win 80% off</span>
          </div>
          <div className={styles.socialLinks}>
            <span>Follow Us :</span>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={styles.mainHeader}>
        <div className={styles.mainHeaderContainer}>
          {/* Logo and Mobile Icons Row */}
          <div className={styles.logoAndIcons}>
            <div className={styles.logo}>
              <Link to="/">Bandage</Link>
            </div>
            <div className={styles.mobileIcons}>
              <button className={styles.hamburgerToggle} onClick={toggleMobileMenu}>
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <Link to="#home">Home</Link>
            <div className={styles.dropdown}>
              <Link to="#shop" className={styles.dropdownToggle}>
                Shop <span className={styles.dropdownArrow}><i className="fas fa-chevron-down"></i></span>
              </Link>
              <div className={styles.dropdownMenu}>
                <Link to="#category1">Category 1</Link>
                <Link to="#category2">Category 2</Link>
                <Link to="#category3">Category 3</Link>
              </div>
            </div>
            <Link to="#about">About</Link>
            <Link to="#blog">Blog</Link>
            <Link to="#contact">Contact</Link>
            <Link to="#pages">Pages</Link>
          </nav>

          {/* Desktop User Actions */}
          <div className={styles.userActions}>
            <Link to="#login" className={styles.loginLink}>
              <i className="far fa-user"></i> Login / Register
            </Link>
            <Link to="#search" className={styles.iconLink}>
              <i className="fas fa-search"></i>
            </Link>
            <Link to="#cart" className={styles.iconLink}>
              <i className="fas fa-shopping-cart"></i> <span className={styles.wishlistCount}>1</span>
              {totalQuantity > 0 && (
                <span className={styles.cartBadge}>{totalQuantity}</span>
              )}
            </Link>
            <Link to="#wishlist" className={styles.iconLink}>
              <i className="far fa-heart"></i> <span className={styles.wishlistCount}>1</span>
            </Link>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <nav className={styles.mobileNav}>
              <Link to="#home" onClick={toggleMobileMenu}>Home</Link>
              <Link to="#product" onClick={toggleMobileMenu}>Product</Link>
              <Link to="#pricing" onClick={toggleMobileMenu}>Pricing</Link>
              <Link to="#contact" onClick={toggleMobileMenu}>Contact</Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header