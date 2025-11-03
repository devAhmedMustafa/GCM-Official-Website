<script>
  import { onMount } from 'svelte';
  import HeartScene from '../heart_scene/HeartScene.svelte';

  let showVideo = true;

  onMount(() => {
  });
</script>

<section class="hero">

  <HeartScene />

  <div class="hero-content">
    <div class="text-content">
      <h1>Redefining Health. Extending Life.</h1>
      <p>The first dedicated longevity and preventive medicine center in the Northern Emirates — where medical excellence meets luxury wellness.</p>
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
    color: var(--text-color);
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    color: var(--text-muted-color);
  }

  .video-container, .image-placeholder, .video-placeholder {
    width: 100%;
    height: 500px;
    border-radius: 10px;
    background-color: #ffffff33;
    backdrop-filter: blur(5px);
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
