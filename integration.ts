import type { AstroIntegration } from "astro";

const customIntegration = function(options={}) {
  return {
    name: 'cypress-endpoint-server',
    hooks: {
      'astro:config:setup': ({injectRoute}) => {
        injectRoute({
          pattern: '/api/endpoints/[endpoint]',
          entryPoint: 'src/endpoints/endpoint.ts'
        });
        injectRoute({
          pattern: '/test/endpoints/[endpoint]',
          entryPoint: 'src/endpoints/Loader.astro'
        });
      }
    }
  } as AstroIntegration
}
export { customIntegration }