<script>
  import { onMount } from "svelte";

  onMount(() => {
    const points = document.querySelectorAll(".difference-point");
    // Animate in when they scroll into view (adds "visible" gradually)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    points.forEach((point) => observer.observe(point));
  });
</script>

<section id="difference" class="difference-section">
  <div class="container">
    <h2 class="title">
      Closer Than Dubai. <span>Better Than a Spa.</span>
    </h2>

    <div class="difference-container">
      <div class="difference-point">
        <div class="icon">👨‍⚕️</div>
        <div class="content">
          <h3>Surgeon-led care</h3>
          <p>Medical expertise guided by specialists, not trends.</p>
        </div>
      </div>

      <div class="difference-point">
        <div class="icon">🧬</div>
        <div class="content">
          <h3>Evidence-based programs</h3>
          <p>Science that shapes real outcomes — not passing fads.</p>
        </div>
      </div>

      <div class="difference-point">
        <div class="icon">🏝️</div>
        <div class="content">
          <h3>Luxury resort integration</h3>
          <p>Wellness experiences in serene, world-class environments.</p>
        </div>
      </div>

      <div class="difference-point">
        <div class="icon">🇦🇪</div>
        <div class="content">
          <h3>Serving the Northern Emirates</h3>
          <p>Exceptional care, closer to home — without the travel hassle.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .difference-section {
    width: 100%;
    min-height: 100vh;
    padding: 6rem 5%;
    overflow: hidden;
  }

  .title {
    font-size: 2.6rem;
    color: #300808;
    margin-bottom: 3.5rem;
    font-weight: 700;
    text-align: center;
  }

  .title span {
    color: #cc0000;
  }

  .difference-container {
    columns: 2; 
    gap: 2rem;
    margin: 0 auto;
  }

  .difference-point {
    display: flex;
    align-items: flex-start;
    background: white;
    border-radius: 16px;
    padding: 1.8rem;
    transform: translateY(0);
    opacity: 1;
    transition: transform 0.5s ease, box-shadow 0.5s ease, opacity 0.5s ease;
  }

  .difference-point:hover {
    transform: translateY(-6px) scale(1.02);
  }

  .icon {
    font-size: 2.8rem;
    margin-right: 1.2rem;
    flex-shrink: 0;
    transition: transform 0.4s ease;
  }

  .difference-point:hover .icon {
    transform: rotate(-10deg) scale(1.1);
  }

  .content h3 {
    font-size: 1.3rem;
    color: #cc0000;
    margin-bottom: 0.4rem;
    font-weight: 600;
  }

  .content p {
    font-size: 0.95rem;
    color: #4a4a4a;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 2rem;
    }

    .difference-section {
      padding: 4rem 6%;
    }

    .icon {
      font-size: 2.2rem;
      margin-right: 1rem;
    }
  }
</style>
