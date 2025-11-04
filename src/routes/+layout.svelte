<script>
  import Navbar from '$lib/components/layout/Navbar.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  import '../app.css';
  
  let { children } = $props();
</script>

<!-- <Navbar /> -->

<main>
  {@render children()}
</main>

<Footer />

<style>
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
