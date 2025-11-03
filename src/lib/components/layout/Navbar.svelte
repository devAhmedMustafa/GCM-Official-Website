<script>
  import { onMount } from 'svelte';

  // Initialize variables or state
  let isScrolled = false;

  // Handle scroll events
  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 50;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<header class:scrolled={isScrolled}>
  <div class="container">
    <div class="logo">
      <a href="/">
        <span class="logo-text">Bayt Al Ihyaa</span>
      </a>
    </div>
    
    <nav>
      <ul class="nav-links">
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#approach">Our Approach</a></li>
        <li><a href="#memberships">Memberships</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    
  </div>
</header>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1.5rem 0;
    background: transparent;
    transition: all 0.3s ease;
    z-index: 1000;
  }

  header.scrolled {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo a {
    text-decoration: none;
  }

  .logo-text {
    color: #400a0a;
    font-weight: 700;
    font-size: 1.5rem;
  }

  nav {
    display: flex;
  }

  .nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
  }

  .nav-links a {
    color: #400a0a;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .nav-links a:hover {
    color: #cc0000;
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .nav-links {
      display: none; /* Will be replaced with mobile menu toggle */
    }
  }
</style>
