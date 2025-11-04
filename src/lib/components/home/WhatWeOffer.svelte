<script>
  import "aos/dist/aos.css";
  import AOS from "aos";
  import { onMount } from "svelte";

  onMount(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      easing: "ease-out-cubic",
    });

    const section = document.getElementById("offerings");
    const image = document.querySelector(".resort-img");

    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      const min = Math.min(scrollPosition, section.offsetTop);

      const transformY = section.offsetTop - min;
      image.style.transform = `translateY(${transformY}px)`;
    });

  });
</script>

<section id="offerings" class="offerings-section">
  <div class="container">

    <img src="/Resort3.png" class="resort-img" alt="">

    <h2 data-aos="fade-up">Tailored Health. Proven Science.</h2>
    
    <div class="offerings-container">
      <div class="offering-card" data-aos="fade-up" data-aos-delay="100">
        <h3>Membership Programs</h3>
        <p>
          Annual personalized health memberships (AED 15,000–25,000) — diagnostics, genetic screening, and lifestyle optimization with continuous physician care.
        </p>
      </div>
      
      <div class="offering-card" data-aos="fade-up" data-aos-delay="200">
        <h3>Longevity Retreats</h3>
        <p>
          2–5 day medical wellness retreats in partnership with luxury resorts — merging clinical precision with ultimate relaxation.
        </p>
      </div>
      
      <div class="offering-card" data-aos="fade-up" data-aos-delay="300">
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
    min-height: 100vh;
    padding: 8rem 5%;
    position: relative;
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
  }
  
  .offerings-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
  
  .offering-card {
    flex: 1;
    min-width: 300px;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    padding: 2.5rem 2rem;
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    position: relative;
  }

  .offering-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.6rem;
    color: #cc0000;
    margin-bottom: 1rem;
    font-weight: 700;
  }
  
  p {
    font-size: 1.05rem;
    line-height: 1.7;
    color: #4a4a4a;
  }

  .resort-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
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
