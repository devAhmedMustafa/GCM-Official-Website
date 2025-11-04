<script>
  import { onMount } from 'svelte';

  /**
   * CountUp component
   * - Animates from 0 to target when it enters the viewport
   * - Respects prefers-reduced-motion by skipping animation
   */
  export let target = 0;
  export let duration = 1200; // ms
  export let decimals = 0; // number of decimal places
  export let prefix = '';
  export let suffix = '';
  export let once = true; // animate only once
  export let threshold = 0.3; // intersection threshold

  // Optional custom easing; default is easeOutCubic
  export let easing = (t) => 1 - Math.pow(1 - t, 3);

  let el = null;
  let value = 0;
  let hasAnimated = false;

  // Format number with locale separators and fixed decimals
  function formatNumber(n) {
    const opts = {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    };
    return n.toLocaleString(undefined, opts);
  }

  function animateToTarget() {
    if (hasAnimated && once) return;

    // Accessibility: if user prefers reduced motion, jump to end
    const mq = typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : null;

    if (mq && mq.matches) {
      value = target;
      hasAnimated = true;
      return;
    }

    const start = performance.now();
    const from = 0;
    const to = target;

    const step = (now) => {
      const t = Math.min(1, (now - start) / Math.max(1, duration));
      value = from + (to - from) * easing(t);
      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        value = to;
        hasAnimated = true;
      }
    };
    requestAnimationFrame(step);
  }

  onMount(() => {
    // Guard for environments without IntersectionObserver
    if (typeof IntersectionObserver === 'undefined') {
      animateToTarget();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          animateToTarget();
          if (once) observer.disconnect();
        }
      },
      { threshold }
    );

    if (el) observer.observe(el);

    return () => observer.disconnect();
  });
</script>

<span bind:this={el} aria-label={`${prefix}${formatNumber(target)}${suffix}`}>
  {prefix}{formatNumber(value)}{suffix}
</span>

<style>
  span {
    display: inline-block;
  }
</style>
