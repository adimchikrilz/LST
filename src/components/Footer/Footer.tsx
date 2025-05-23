import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Header section with logo and social icons */}
        <div className={styles.footerHeader}>
          <div className={styles.logo}>
            Bandage
          </div>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f" style={{color: '#23A6F0'}}></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" style={{color: '#23A6F0'}}></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter" style={{color: '#23A6F0'}}></i>
            </a>
          </div>
        </div>
        
        {/* Divider line */}
        <div className={styles.divider}></div>
        
        {/* Footer content */}
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <h3>Company Info</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Carrier</a></li>
              <li><a href="#hiring">We are hiring</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3>Legal</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Carrier</a></li>
              <li><a href="#hiring">We are hiring</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3>Features</h3>
            <ul>
              <li><a href="#marketing">Business Marketing</a></li>
              <li><a href="#analytics">User Analytic</a></li>
              <li><a href="#live-chat">Live Chat</a></li>
              <li><a href="#support">Unlimited Support</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3>Resources</h3>
            <ul>
              <li><a href="#ios-android">IOS & Android</a></li>
              <li><a href="#demo">Watch a Demo</a></li>
              <li><a href="#customers">Customers</a></li>
              <li><a href="#api">API</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3>Get In Touch</h3>
            <div className={styles.subscribeForm}>
              <input
                type="email"
                placeholder="Your Email"
                className={styles.emailInput}
              />
              <button className={styles.subscribeBtn}>Subscribe</button>
            </div>
            <p className={styles.placeholderText}>Lore imp sum dolor Amit</p>
          </div>
        </div>
        
        {/* Footer note */}
        <div className={styles.footerNote}>
          Made With Love By Finland All Right Reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer