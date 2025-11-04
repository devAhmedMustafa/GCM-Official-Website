<script>
  import { onMount } from 'svelte';
  import Icon from '@iconify/svelte';
  import CountUp from '$lib/components/common/CountUp.svelte';

  const shareholders = [
    {
      id: 'mohamed',
      name: 'Mohamed Ramadan',
      title: 'Co‑Founder, Chief Executive Officer',
      tag: 'Shareholder',
      icon: 'mdi:account-tie',
      color: '#cc0000',
      summary: [
        'Founder & CEO of GT Industries and Consolidated Corporate; proven operator in building and scaling sales organizations.',
        'Built and ran a 30–40 agent sales agency delivering major customer acquisition programs (e.g., HelloFresh Belgium).',
        'Generated €6M+ client profit and €900k+ in revenue for GT Industries with outcome-focused execution.',
        'Leads strategy, P&L, regulatory/ground operations in the UAE, and enterprise partnerships.',
        'Translates disciplined field leadership into scalable memberships, corporate contracts, and resort-linked programs.'
      ],
      stats: [
        { label: 'Client Profit', value: 6000000, prefix: '€', suffix: '+', duration: 1400 },
        { label: 'GT Industries Revenue', value: 900000, prefix: '€', suffix: '+', duration: 1400 }
      ]
    },
    {
      id: 'imran',
      name: 'Dr. Imran Khan',
      title: 'Clinical Director',
      tag: 'Shareholder',
      icon: 'mdi:stethoscope',
      color: '#400a0a',
      summary: [
        'Specialist physiotherapist, researcher, and performance consultant in MSK rehab, pain management, and regenerative medicine.',
        'Founder and Clinical Director of The Recovery Room: evidence-based recovery bridging physiotherapy, cellular optimisation, and longevity science.',
        'Integrates peptide therapy, IV nutrient protocols, hormonal balancing, and targeted regenerative techniques.',
        'Philosophy unites biomechanics, neuroendocrinology, and molecular biology to accelerate recovery and cellular repair.',
        'Worked with elite athletes and Premier League professionals; advancing regenerative and longevity medicine in mainstream care.'
      ]
    }
  ];

  onMount(() => {
    const items = document.querySelectorAll('.reveal');
    if (typeof IntersectionObserver === 'undefined') {
      items.forEach((el) => el.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((el) => observer.observe(el));
  });
</script>

<section class="sh-hero">
  <div class="container">
    <h1 class="reveal">Shareholders</h1>
    <p class="lead reveal">Leaders blending clinical science with disciplined execution to scale outcomes with integrity.</p>
  </div>
  <div class="bg-ornament" aria-hidden="true"></div>
</section>

<section class="sh-grid">
  <div class="container grid">
    {#each shareholders as s (s.id)}
      <article class="card reveal">
        <header class="card-head">
          <div class="avatar" style={`--accent:${s.color}`}>
            <Icon icon={s.icon} width="20" height="20" />
          </div>
          <div class="id">
            <h2>{s.name}</h2>
            <p class="title">{s.title} <span class="chip">{s.tag}</span></p>
          </div>
        </header>

        <ul class="bullets">
          {#each s.summary as point}
            <li>{point}</li>
          {/each}
        </ul>

        {#if s.stats}
          <div class="stats">
            {#each s.stats as st}
              <div class="stat">
                <div class="stat-value"><CountUp target={st.value} prefix={st.prefix} suffix={st.suffix} duration={st.duration} /></div>
                <div class="stat-label">{st.label}</div>
              </div>
            {/each}
          </div>
        {/if}
      </article>
    {/each}
  </div>
</section>

<style>
  .container { width: 90%; max-width: 1200px; margin: 0 auto; }

  .sh-hero {
    position: relative;
    padding: 6rem 0 2.25rem;
    overflow: hidden;
  }
  .sh-hero h1 {
    font-size: 2.6rem; color: #300808; font-weight: 800; margin: 0 0 .5rem;
    opacity: 0; transform: translateY(12px); transition: opacity .6s ease, transform .6s ease;
  }
  .sh-hero .lead {
    color: #4a4a4a; max-width: 780px; font-size: 1.05rem;
    opacity: 0; transform: translateY(12px); transition: opacity .6s ease .06s, transform .6s ease .06s;
  }

  .bg-ornament { position:absolute; inset:0; pointer-events:none; }

  .sh-grid { padding: 1rem 0 4rem; }
  .grid {
    display: grid; gap: 1.25rem; grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .card {
    background: rgba(255,255,255,0.92);
    border: 1px solid rgba(204,0,0,0.12);
    border-radius: 16px;
    box-shadow: 0 12px 28px rgba(0,0,0,0.06);
    padding: 1.25rem 1.25rem 1rem;
    transform: translateY(14px) scale(.985);
    opacity: 0;
    transition: transform 500ms ease, box-shadow 500ms ease, opacity 500ms ease;
  }
  .card:hover { transform: translateY(-4px) scale(1.005); box-shadow: 0 18px 36px rgba(0,0,0,0.09); }

  .card-head { display: grid; grid-template-columns: 54px 1fr; gap: .9rem; align-items: center; margin-bottom: .6rem; }
  .avatar { width: 54px; height: 54px; border-radius: 12px; display: grid; place-items: center; background: linear-gradient(135deg, color-mix(in oklab, var(--accent), white 82%), color-mix(in oklab, var(--accent), transparent 94%)); border: 1px solid color-mix(in oklab, var(--accent), transparent 70%); }
  .id h2 { font-size: 1.25rem; color: #300808; margin: 0; }
  .title { color: #4a4a4a; margin: .15rem 0 0; }
  .chip { background: rgba(204,0,0,.08); color: #cc0000; border: 1px solid rgba(204,0,0,.18); padding: .15rem .5rem; border-radius: 999px; font-size: .8rem; margin-left: .4rem; }

  .bullets { margin: .6rem 0 .9rem; padding-left: 1.1rem; }
  .bullets li { color: #333; line-height: 1.5; margin: .35rem 0; }

  .stats { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .75rem; margin-top: .4rem; }
  .stat { background: linear-gradient(180deg, rgba(204,0,0,0.06), rgba(204,0,0,0.02)); border: 1px solid rgba(204,0,0,0.12); border-radius: 12px; padding: .6rem .75rem; text-align: center; }
  .stat-value { color: #cc0000; font-weight: 800; font-size: 1.15rem; }
  .stat-label { color: #4a4a4a; font-size: .85rem; }

  /* Reveal */
  :global(.visible) { opacity: 1 !important; transform: none !important; }
  .reveal { opacity: 0; transform: translateY(14px); transition: opacity .6s ease, transform .6s ease; }

  @media (max-width: 900px) {
    .grid { grid-template-columns: 1fr; }
    .sh-hero { padding: 5rem 0 1.75rem; }
    .sh-hero h1 { font-size: 2.1rem; }
  }
</style>
