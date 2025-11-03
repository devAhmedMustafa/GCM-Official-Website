<script>
  // Any imports or logic can go here
</script>

<section id="join" class="join-section">
  <div class="container">
    <h2>Your Path to Longevity Starts Here</h2>
    
    <p class="join-text">
      Whether you're a resident seeking lifelong vitality or a visitor searching for a transformative wellness retreat, Consolidated Medical offers a personalized journey to a longer, healthier life.
    </p>
    
    <div class="cta-buttons">
      <button class="cta primary">Become a Member</button>
      <button class="cta secondary">Partner With Us</button>
    </div>
  </div>
</section>

<style>
  .join-section {
    width: 100%;
    padding: 5rem 5%;
    background: linear-gradient(to right, #f8f8f8, #ffffff);
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  h2 {
    font-size: 2.5rem;
    color: #400a0a;
    margin-bottom: 2rem;
    font-weight: 700;
  }
  
  .join-text {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #4a5568;
    max-width: 800px;
    margin: 0 auto 2.5rem auto;
  }
  
  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }
  
  .cta {
    padding: 0.9rem 2rem;
    font-size: 1.1rem;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .primary {
    background-color: #cc0000;
    color: white;
    border: none;
  }
  
  .primary:hover {
    background-color: #aa0000;
  }
  
  .secondary {
    background-color: transparent;
    color: #cc0000;
    border: 2px solid #cc0000;
  }
  
  .secondary:hover {
    background-color: rgba(204, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    .join-section {
      padding: 4rem 5%;
    }
    
    h2 {
      font-size: 2rem;
    }
    
    .cta-buttons {
      flex-direction: column;
      gap: 1rem;
    }
    
    .cta {
      width: 80%;
      margin: 0 auto;
    }
  }
</style>
