import './i18n/i18n';
import App from './views/App.svelte';

const app = new App({
  target: document.getElementById('app'),
});

if (import.meta.hot) {
  import.meta.hot.on('vite:beforeUpdate', () => location.reload());
}

export default app;
