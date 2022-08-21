<script lang="ts">
  import {
    exioApp,
    exioFadeInAnimation,
    exioZoomInAnimation,
    exioButton,
    exioIcon,
  } from 'exio/svelte';
  import { _ } from 'svelte-i18n';
  import Demo from './Demo.svelte';
  import { dataTheme } from '../ts/stores';
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
  const format = (code: string, depth = 0) => {
    let lines = code.split('\n');
    const lenTabs = lines[1].search(/\S|$/);
    lines = lines
      .splice(depth ? 0 : 1)
      .map(
        (line) =>
          (line.replace(/ /g, '') !== '' ? ' '.repeat(depth) : '') +
          line.substr(lenTabs)
      );
    return lines.join('\n');
  };
  const c = (code: string, styles: string) => {
    return format(code) + `\n<${'style'}>${format(styles, 2)}</${'style'}>`;
  };
</script>

<div
  use:exioApp
  data-theme={$dataTheme}
  use:exioZoomInAnimation
  style="padding-top: 50px;"
>
  <div class="gradient-banner" use:exioFadeInAnimation>
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
      <Demo />
    </div>
  </div>
</div>

<style>
  .gradient-banner {
    width: 100%;
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
  [data-theme='dark'] {
    --accent: #0065c7;
  }
  [data-theme='light'] {
    --accent: #5dceff;
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
    font-size: 1rem;
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
</style>
