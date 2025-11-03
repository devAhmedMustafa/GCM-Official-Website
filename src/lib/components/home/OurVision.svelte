<script>
	import { onMount, onDestroy } from 'svelte';
	import { fade, slide } from 'svelte/transition';

	export let id = 'our-vision';

	let rootEl;
	let visible = false;
	let observer;

	onMount(() => {
		if (typeof IntersectionObserver === 'undefined') {
			visible = true;
			return;
		}

		observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						visible = true;
						observer.disconnect();
					}
				}
			},
			{ threshold: 0.15 }
		);

		if (rootEl) observer.observe(rootEl);
	});

	onDestroy(() => {
		if (observer) observer.disconnect();
	});
</script>

<section bind:this={rootEl} id={id} class="vision" aria-labelledby="vision-headline">
	<div class="content" class:revealed={visible} in:fade={{ duration: 700 }}>
		<h2 id="vision-headline" class="headline" class:float={visible} in:slide={{ duration: 650, y: 8 }}>
			A New Era of Preventive Healthcare
		</h2>

		{#if visible}
			<p class="lead" in:fade={{ delay: 120, duration: 600 }}>At Bayt Al Ihyaa, we believe longevity isn’t about adding years to life — it’s about adding life to years.</p>

			<p class="desc" in:fade={{ delay: 220, duration: 600 }}>Our mission is to make world-class longevity and preventive medicine accessible in Ras Al Khaimah and Fujairah, combining medical science, advanced diagnostics, and resort-style wellness.</p>
		{/if}
	</div>
</section>

<style>
.vision {
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: clamp(1.5rem, 3vw, 4rem);
	color: var(--text-color);
}

.content {
	max-width: 88ch;
	text-align: center;
	padding: clamp(1rem, 2vw, 2.5rem);
	border-radius: var(--border-radius);
	transition: transform 420ms cubic-bezier(.2,.9,.2,1);
}

.content.revealed {
	transform: translateY(-4px);
}

.headline {
	font-weight: 700;
	color: var(--text-color);
	font-size: clamp(2rem, 4vw, 3.25rem);
	line-height: 1.05;
	margin-bottom: 0.75rem;
	letter-spacing: -0.01em;
	display: inline-block;
	transition: transform 520ms ease, color 520ms ease;
}

.headline:hover {
	transform: translateY(-6px) scale(1.01);
	color: var(--primary-color);
}

.lead {
	font-size: clamp(1.125rem, 2vw, 1.25rem);
	color: var(--text-muted-color);
	margin-bottom: 0.75rem;
}

.desc {
	font-size: clamp(1rem, 1.6vw, 1.125rem);
	color: var(--secondary-color);
	opacity: 0.95;
	max-width: 70ch;
	margin: 0.5rem auto 0;
}

.headline::after {
	content: "";
	display: block;
	margin: 1.25rem auto 0;
	height: 4px;
	width: 0;
	border-radius: 999px;
	background: linear-gradient(90deg, var(--primary-color), rgba(204,0,0,0.6));
	transition: width 520ms cubic-bezier(.2,.9,.2,1);
}

.content.revealed .headline::after {
	width: 56px;
}


@keyframes floatY {
	0% { transform: translateY(0); }
	50% { transform: translateY(-6px); }
	100% { transform: translateY(0); }
}

.headline.float {
	animation: floatY 6s ease-in-out infinite;
}

@media (min-width: 1024px) {
	.content {
		transform: translateY(-10px);
	}
}

@media (prefers-reduced-motion: reduce) {
	.headline.float,
	.headline,
	.content,
	.content.revealed .headline::after {
		animation: none !important;
		transition: none !important;
	}
}
</style>
