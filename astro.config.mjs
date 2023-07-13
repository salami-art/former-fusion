import { defineConfig } from 'astro/config';
import { customIntegration } from './integration'
// https://astro.build/config
export default defineConfig({
  integrations: [customIntegration()]
});
