<script>
  import Hero from '$lib/components/home/Hero.svelte';
  import OurVision from '$lib/components/home/OurVision.svelte';
  import WhyItMatters from '$lib/components/home/WhyItMatters.svelte';
  import WhatWeOffer from '$lib/components/home/WhatWeOffer.svelte';
  import TheDifference from '$lib/components/home/TheDifference.svelte';
  import Testimonials from '$lib/components/home/Testimonials.svelte';
  import JoinSection from '$lib/components/home/JoinSection.svelte';
</script>

<main>
  <Hero />
  <OurVision />
  <WhyItMatters />
  <WhatWeOffer />
  <TheDifference />
  <Testimonials />
  <JoinSection />
</main>

<style>
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
