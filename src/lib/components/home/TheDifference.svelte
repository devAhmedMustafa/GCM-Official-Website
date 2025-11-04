<script>
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";

  onMount(() => {
    const points = document.querySelectorAll(".difference-point, .title, .subtitle");
    // If IntersectionObserver isn't available, reveal immediately (graceful fallback)
    if (typeof IntersectionObserver === "undefined") {
      points.forEach((el) => el.classList.add("visible"));
      return;
    }

    // Animate in when they scroll into view (adds "visible" gradually)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    points.forEach((point) => observer.observe(point));
  });
</script>

<section id="difference" class="difference-section">
  <div class="container">
    <h2 class="title">
      Closer Than Dubai. <span>Better Than a Spa.</span>
    </h2>
    <p class="subtitle">Clinical-grade programs, delivered with resort-level care — a blend of science, luxury, and results.</p>

    <div class="difference-container">
      <div class="difference-point">
        <div class="icon-wrap" aria-hidden="true">
          <Icon icon="mdi:doctor" class="icon" width="28" height="28" />
        </div>
        <div class="content">
          <h3>Surgeon-led care</h3>
          <p>Medical expertise guided by specialists, not trends.</p>
        </div>
      </div>

      <div class="difference-point">
        <div class="icon-wrap" aria-hidden="true">
          <Icon icon="solar:dna-bold-duotone" class="icon" width="28" height="28" />
        </div>
        <div class="content">
          <h3>Evidence-based programs</h3>
          <p>Science that shapes real outcomes — not passing fads.</p>
        </div>
      </div>

      <div class="difference-point">
        <div class="icon-wrap" aria-hidden="true">
          <Icon icon="streamline-plump:beach-solid" class="icon" width="28" height="28" />
        </div>
        <div class="content">
          <h3>Luxury resort integration</h3>
          <p>Wellness experiences in serene, world-class environments.</p>
        </div>
      </div>

      <div class="difference-point">
        <div class="icon-wrap" aria-hidden="true">
          <Icon icon="arcticons:uae4droid" class="icon" width="28" height="28" />
        </div>
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
    padding: 6rem 5%;
    overflow: hidden;
    position: relative;
    background:
      radial-gradient(1200px 600px at 20% -10%, rgba(204,0,0,0.12), transparent 70%),
      radial-gradient(1000px 500px at 100% 0%, rgba(64,10,10,0.08), transparent 70%),
      linear-gradient(180deg, #fff, #fff);
  }

  .title {
    font-size: 2.6rem;
    color: #300808;
    margin-bottom: 3.5rem;
    font-weight: 700;
    text-align: center;
    opacity: 0;
    transform: translateY(12px);
    transition: opacity .6s ease, transform .6s ease;
  }

  .title span {
    color: #cc0000;
  }

  .subtitle {
    text-align: center;
    color: #4a4a4a;
    margin-bottom: 2.5rem;
    opacity: 0;
    transform: translateY(12px);
    transition: opacity .6s ease .05s, transform .6s ease .05s;
  }

  .difference-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
    margin: 0 auto;
    max-width: 1100px;
  }

  .difference-point {
    display: grid;
    grid-template-columns: 52px 1fr;
    align-items: center;
    background: rgba(255,255,255,0.9);
    backdrop-filter: saturate(120%) blur(2px);
    border-radius: 16px;
    padding: 1.25rem 1.25rem;
    border: 1px solid rgba(204,0,0,0.12);
    box-shadow: 0 10px 24px rgba(0,0,0,0.04);
    transform: translateY(14px) scale(.98);
    opacity: 0;
    gap: 20px;
    transition: transform 500ms ease, box-shadow 500ms ease, opacity 500ms ease;
  }

  .difference-point:hover {
    transform: translateY(-4px) scale(1.01);
    box-shadow: 0 16px 32px rgba(0,0,0,0.08);
  }

  .difference-point::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
  }

  .difference-point .icon-wrap {
    width: 52px;
    height: 52px;
    border-radius: 12px;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg, rgba(204,0,0,0.14), rgba(204,0,0,0.04));
    border: 1px solid rgba(204,0,0,0.18);
    margin-right: 0.9rem;
  }

  /* Icon color is handled by wrapper background; adjust inner SVG via :global if needed */
  :global(.icon) {
    color: #cc0000;
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

  /* Reveal animation */
  :global(.visible) {
    opacity: 1 !important;
    transform: none !important;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 2rem;
    }

    .difference-section {
      padding: 4rem 6%;
    }

    .difference-container {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
</style>
