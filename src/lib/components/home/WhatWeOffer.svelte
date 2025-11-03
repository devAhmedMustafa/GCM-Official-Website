<script>
  // Any imports or logic can go here
</script>

<section id="offerings" class="offerings-section">
  <div class="container">
    <h2>Tailored Health. Proven Science.</h2>
    
    <div class="offerings-container">
      <div class="offering-card">
        <div class="offering-number">1️⃣</div>
        <h3>Membership Programs</h3>
        <p>
          Annual personalized health memberships (AED 15,000–25,000) — diagnostics, genetic screening, and lifestyle optimization with continuous physician care.
        </p>
      </div>
      
      <div class="offering-card">
        <div class="offering-number">2️⃣</div>
        <h3>Longevity Retreats</h3>
        <p>
          2–5 day medical wellness retreats in partnership with luxury resorts — merging clinical precision with ultimate relaxation.
        </p>
      </div>
      
      <div class="offering-card">
        <div class="offering-number">3️⃣</div>
        <h3>Corporate Wellness</h3>
        <p>
          Executive wellness programs for leaders who value long-term vitality, performance, and productivity.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .offerings-section {
    width: 100%;
    padding: 5rem 5%;
    background-color: #f8f8f8;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  h2 {
    font-size: 2.5rem;
    color: #400a0a;
    margin-bottom: 3rem;
    font-weight: 700;
  }
  
  .offerings-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  
  .offering-card {
    flex: 1;
    background-color: #ffffff;
    padding: 2.5rem 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
    text-align: left;
  }
  
  .offering-card:hover {
    transform: translateY(-10px);
  }
  
  .offering-number {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  h3 {
    font-size: 1.5rem;
    color: #cc0000;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #4a5568;
  }
  
  @media (max-width: 768px) {
    .offerings-container {
      flex-direction: column;
      gap: 1.5rem;
    }
    
    h2 {
      font-size: 2rem;
    }
    
    .offering-card {
      padding: 2rem 1.5rem;
    }
  }
</style>
