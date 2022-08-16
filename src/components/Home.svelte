<script lang="ts">
  import {
    exioApp,
    exioFadeInAnimation,
    exioZoomInAnimation,
    exioButton,
    exioIcon,
    exioSwitch,
  } from 'exio/svelte';
  import { _ } from 'svelte-i18n';
  const links = [
    {
      title: $_('banner.buttons.npm'),
      href: 'https://www.npmjs.com/package/exio',
    },
    {
      title: $_('banner.buttons.github'),
      href: 'https://github.com/KentoNishi/exio',
    },
    {
      title: $_('banner.buttons.docs'),
      href: '#/docs',
    },
  ];
  let dark = true;
</script>

<div use:exioApp data-theme={dark ? 'dark' : 'light'} use:exioZoomInAnimation>
  <div class="gradient-banner" use:exioFadeInAnimation>
    <div class="toggler">
      <span use:exioIcon>light_mode</span>
      <input
        type="checkbox"
        use:exioSwitch
        id="dark-mode"
        bind:checked={dark}
      />
      <span use:exioIcon>dark_mode</span>
    </div>
    <span class="title">{$_('title')}</span>
    <span class="description">{$_('description')}</span>
    <div class="buttons">
      {#each links as link}
        <a href={link.href} target="_blank">
          <button class="bg-gray" style="cursor: pointer;" use:exioButton>
            {link.title}
            <span use:exioIcon>open_in_new</span>
          </button>
        </a>
      {/each}
    </div>
  </div>
  <div class="section">
    <div class="content">
      <div class="title">{$_('about.title')}</div>
      <div class="desc">{$_('about.description')}</div>
    </div>
  </div>
  <div class="section">
    <div class="content">
      <div class="title">{$_('demo.title')}</div>
    </div>
  </div>
</div>

<style>
  .gradient-banner {
    width: 100vw;
    height: max(50vh, 400px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .gradient-banner > .title {
    font-size: 8rem;
    font-weight: bold;
    background: linear-gradient(135deg, #2cd17e 0%, #30cde2 46%, #0066ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  [data-theme='dark'] .gradient-banner {
    background-color: #090a1b;
  }
  [data-theme='light'] .gradient-banner {
    background-color: #d1f4ff;
  }
  [data-theme='dark'] .bg-gray {
    background-color: #2f2f2f;
  }
  [data-theme='light'] .bg-gray {
    background-color: #bebebe;
  }
  .gradient-banner > .description {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    max-width: 600px;
  }
  .gradient-banner > .buttons {
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  .section {
    margin: 1rem;
    display: flex;
    justify-content: center;
  }
  .section > .content {
    max-width: 1200px;
    font-size: 1.25rem;
    margin-top: 1rem;
    width: 100%;
  }
  .section > .content > .title {
    font-size: 2rem;
    font-weight: bold;
    text-align: left;
    width: 100%;
  }
  .section > .content > .desc {
    margin-top: 1rem;
  }
  [data-theme='dark'] input[type='checkbox'] {
    border-color: white;
  }
  [data-theme='light'] input[type='checkbox'] {
    border-color: black;
  }
  .toggler {
    display: flex;
    font-size: 1.6rem;
    align-items: center;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
</style>
