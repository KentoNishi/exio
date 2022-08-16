<script lang="ts">
  import {
    exioApp,
    exioFadeInAnimation,
    exioZoomInAnimation,
  } from 'exio/svelte';
  import { _ } from 'svelte-i18n';
</script>

<div use:exioApp data-theme="dark" use:exioZoomInAnimation>
  <div class="gradient-banner" use:exioFadeInAnimation>
    <span class="title">{$_('title')}</span>
    <span class="description">{$_('description')}</span>
  </div>
</div>

<style>
  .gradient-banner {
    width: 100vw;
    height: 100vh;
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
  .gradient-banner > .description {
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    max-width: 600px;
  }
</style>
