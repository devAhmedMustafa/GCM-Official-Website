<script>
  import "aos/dist/aos.css";
  import AOS from "aos";
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";

  // Initialize AOS when component mounts
  onMount(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      easing: "ease-out-cubic",
    });
  });
</script>

<section id="why-it-matters" class="why-section">
  <div class="container">
    <h2 data-aos="fade-up">The Future of Health is Preventive</h2>
    
    <div class="stats-container">
      <div class="stat-card" data-aos="fade-up" data-aos-delay="100">
        <Icon icon="solar:money-bag-bold-duotone" class="icon" width="48" height="48" style="color: var(--primary-color); margin: auto; margin-bottom: 1rem; " />
        <div class="value">$4B+</div>
        <div class="description">UAE longevity market by 2030</div>
      </div>
      
      <div class="stat-card" data-aos="fade-up" data-aos-delay="200">
        <Icon icon="solar:dna-bold-duotone" class="icon" width="48" height="48" style="color: var(--primary-color); margin: auto; margin-bottom: 1rem; " />
        <div class="value">60%</div>
        <div class="description">expected margins from personalized preventive care</div>
      </div>
      
      <div class="stat-card" data-aos="fade-up" data-aos-delay="300">
        <Icon icon="fluent:beach-16-filled" class="icon" width="48" height="48" style="color: var(--primary-color); margin: auto; margin-bottom: 1rem;" />
        <div class="value">3.5M+</div>
        <div class="description">annual visitors projected to RAK by 2030</div>
      </div>
    </div>
    
    <p class="why-text" data-aos="fade-up" data-aos-delay="400">
      While most clinics focus on treatment, we focus on prevention — transforming how health is experienced in the Northern Emirates.
    </p>
  </div>
</section>

<style>
  .why-section {
    width: 100%;
    min-height: 100vh;
    padding: 8rem 5%;
    display: flex;
    align-items: center;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  h2 {
    font-size: 2.8rem;
    color: #2d0a0a;
    margin-bottom: 4rem;
    font-weight: 800;
    letter-spacing: -0.5px;
  }
  
  .stats-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 4rem;
  }
  
  .stat-card {
    flex: 1;
    max-width: 300px;
    border-radius: 16px;
    padding: 2.5rem 2rem;
    transition: transform 0.4s ease;
    transform-style: preserve-3d;
  }

  .stat-card * {
    cursor: default;
  }

  .stat-card:hover {
    transform: translateY(-8px) rotateX(5deg);
  }
  
  @keyframes floatIcon {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }
  
  .value {
    font-size: 2.2rem;
    font-weight: 800;
    color: #e63946;
    margin-bottom: 0.5rem;
  }
  
  .description {
    font-size: 1rem;
    color: #4a4a4a;
    line-height: 1.5;
  }
  
  .why-text {
    font-size: 1.25rem;
    line-height: 1.9;
    color: #3a3a3a;
    max-width: 750px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .stats-container {
      flex-direction: column;
      align-items: center;
    }
    
    .stat-card {
      width: 100%;
      max-width: 100%;
    }
    
    h2 {
      font-size: 2rem;
    }
  }
</style>
