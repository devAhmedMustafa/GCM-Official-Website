<script>
  // Any imports or logic can go here
</script>

<footer class="footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-logo">
        <span class="logo-text">Bayt Al-Ihyaa</span>
        <p class="tagline">Where Science Meets Wellness.</p>
      </div>
      
      <div class="footer-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/programs">Programs</a></li>
          <li><a href="/partnerships">Partnerships</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      
      <div class="footer-social">
        <a href="#" class="social-icon">
          <span>LinkedIn</span>
        </a>
        <a href="#" class="social-icon">
          <span>Instagram</span>
        </a>
        <a href="#" class="social-icon">
          <span>X</span>
        </a>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Bayt Al-Ihyaa. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
  .footer {
    width: 100%;
    padding: 4rem 5% 2rem;
    background-color: #400a0a;
    color: white;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
    flex-wrap: wrap;
    gap: 2rem;
  }
  
  .footer-logo {
    flex: 1;
    min-width: 250px;
  }
  
  .logo-text {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    display: block;
  }
  
  .tagline {
    color: #f0cece;
    font-size: 1rem;
  }
  
  .footer-links {
    flex: 1;
    min-width: 200px;
  }
  
  .footer-links ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  
  .footer-links a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .footer-links a:hover {
    color: #cc0000;
  }
  
  .footer-social {
    display: flex;
    gap: 1.5rem;
  }
  
  .social-icon {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .social-icon:hover {
    color: #cc0000;
  }
  
  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1.5rem;
    text-align: center;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
  }
  
  @media (max-width: 768px) {
    .footer-top {
      flex-direction: column;
      gap: 2rem;
    }
    
    .footer-links ul {
      flex-direction: column;
      gap: 0.8rem;
    }
  }
</style>
