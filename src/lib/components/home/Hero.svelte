<script>
  // Import any assets or components needed
  import { onMount } from 'svelte';

  // Reactive declarations
  let showVideo = true;

  // Lifecycle
  onMount(() => {
    // Any initialization code
  });
</script>

<section class="hero">
  <div class="hero-content">
    <div class="text-content">
      <h1>Redefining Health. Extending Life.</h1>
      <p>The first dedicated longevity and preventive medicine center in the Northern Emirates — where medical excellence meets luxury wellness.</p>
      
      <div class="cta-buttons">
        <button class="cta primary">Book a Consultation</button>
        <button class="cta secondary">Explore Memberships</button>
      </div>
    </div>
    
    <div class="visual-content">
      <!-- Placeholder for video or image -->
      {#if showVideo}
        <div class="video-container">
          <!-- Video will be implemented later -->
          <div class="video-placeholder"></div>
        </div>
      {:else}
        <div class="image-placeholder"></div>
      {/if}
    </div>
  </div>
</section>

<style>
  .hero {
    width: 100%;
    height: 100vh;
    min-height: 600px;
    background: linear-gradient(to right, #f5f9ff, #e6f0ff);
    display: flex;
    align-items: center;
    padding: 0 5%;
    overflow: hidden;
    position: relative;
  }

  .hero-content {
    display: flex;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    gap: 4rem;
  }

  .text-content {
    flex: 1;
    padding-right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .visual-content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 3.5rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: #400a0a;
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    color: #4a5568;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }

  .cta {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
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

  .video-container, .image-placeholder, .video-placeholder {
    width: 100%;
    height: 400px;
    border-radius: 10px;
    background-color: #f0e2e2;
    overflow: hidden;
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .hero-content {
      flex-direction: column;
      gap: 2rem;
    }

    .text-content {
      padding-right: 0;
    }

    h1 {
      font-size: 2.5rem;
    }
  }
</style>
