<script>
  // Any imports or logic can go here
</script>

<section id="difference" class="difference-section">
  <div class="container">
    <h2>Closer Than Dubai. Better Than a Spa.</h2>
    
    <div class="difference-container">
      <div class="difference-point">
        <div class="icon">👨‍⚕️</div>
        <div class="content">
          <h3>Surgeon-led care</h3>
          <p>medical credibility you can trust.</p>
        </div>
      </div>
      
      <div class="difference-point">
        <div class="icon">🧬</div>
        <div class="content">
          <h3>Evidence-based programs</h3>
          <p>science over trends.</p>
        </div>
      </div>
      
      <div class="difference-point">
        <div class="icon">🏝️</div>
        <div class="content">
          <h3>Integrated with luxury resorts</h3>
          <p>health meets hospitality.</p>
        </div>
      </div>
      
      <div class="difference-point">
        <div class="icon">🇦🇪</div>
        <div class="content">
          <h3>Serving the Northern Emirates</h3>
          <p>world-class care, close to home.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .difference-section {
    width: 100%;
    padding: 5rem 5%;
    background-color: #ffffff;
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
  
  .difference-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
    max-width: 900px;
    margin: 0 auto;
  }
  
  .difference-point {
    display: flex;
    align-items: center;
    text-align: left;
    padding: 1.5rem;
    background-color: #f8f8f8;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.03);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .difference-point:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.08);
  }
  
  .icon {
    font-size: 2.5rem;
    margin-right: 1.5rem;
  }
  
  .content h3 {
    font-size: 1.2rem;
    color: #cc0000;
    margin-bottom: 0.3rem;
    font-weight: 600;
  }
  
  .content p {
    font-size: 0.9rem;
    color: #4a5568;
    line-height: 1.4;
  }
  
  @media (max-width: 768px) {
    .difference-container {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    h2 {
      font-size: 2rem;
    }
    
    .difference-point {
      padding: 1.2rem;
    }
    
    .icon {
      font-size: 2rem;
      margin-right: 1rem;
    }
  }
</style>
