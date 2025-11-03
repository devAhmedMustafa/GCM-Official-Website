<script>
  // Any imports or logic can go here
</script>

<section id="testimonials" class="testimonials-section">
  <div class="container">
    <h2>Proven Expertise. Trusted Results.</h2>
    
    <div class="testimonial-content">
      <p class="testimonial-text">
        Our UK-based prototype, The Recovery Room, has served over 5,000 clients including Premier League athletes, demonstrating measurable outcomes in recovery, vitality, and performance.
      </p>
      
      <!-- Placeholder for future testimonial quotes or client logos -->
      <div class="testimonial-metrics">
        <div class="metric">
          <div class="metric-value">5,000+</div>
          <div class="metric-label">Clients Served</div>
        </div>
        <div class="metric">
          <div class="metric-value">98%</div>
          <div class="metric-label">Client Satisfaction</div>
        </div>
        <div class="metric">
          <div class="metric-value">100%</div>
          <div class="metric-label">Science-Backed</div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .testimonials-section {
    width: 100%;
    min-height: 100vh;
    padding: 5rem 5%;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  h2 {
    font-size: 2.5rem;
    color: #400a0a;
    margin-bottom: 2.5rem;
    font-weight: 700;
  }
  
  .testimonial-content {
    max-width: 900px;
    margin: 0 auto;
  }
  
  .testimonial-text {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #4a5568;
    margin-bottom: 3rem;
  }
  
  .testimonial-metrics {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
  }
  
  .metric {
    flex: 1;
  }
  
  .metric-value {
    font-size: 2.5rem;
    font-weight: 700;
    color: #cc0000;
    margin-bottom: 0.5rem;
  }
  
  .metric-label {
    font-size: 1rem;
    color: #4a5568;
  }
  
  @media (max-width: 768px) {
    .testimonials-section {
      padding: 4rem 5%;
    }
    
    h2 {
      font-size: 2rem;
    }
    
    .testimonial-metrics {
      flex-direction: column;
      gap: 2rem;
    }
    
    .metric-value {
      font-size: 2rem;
    }
  }
</style>
