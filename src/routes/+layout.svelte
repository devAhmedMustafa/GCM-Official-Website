<script>
  import Navbar from '$lib/components/layout/Navbar.svelte';
  import '../app.css';
  
  let { children } = $props();
</script>

<Navbar />

<main>
  {@render children()}
</main>

<style>
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
