// vite.config.ts
import { defineConfig } from "file:///C:/Users/MJW/freesnowboarding/urara/node_modules/.pnpm/vite@4.4.9_@types+node@20.6.0/node_modules/vite/dist/node/index.js";
import UnoCSS from "file:///C:/Users/MJW/freesnowboarding/urara/node_modules/.pnpm/unocss@0.55.7_postcss@8.4.29_rollup@2.79.1_vite@4.4.9/node_modules/unocss/dist/vite.mjs";
import { presetTagify, presetIcons } from "file:///C:/Users/MJW/freesnowboarding/urara/node_modules/.pnpm/unocss@0.55.7_postcss@8.4.29_rollup@2.79.1_vite@4.4.9/node_modules/unocss/dist/index.mjs";
import extractorSvelte from "file:///C:/Users/MJW/freesnowboarding/urara/node_modules/.pnpm/@unocss+extractor-svelte@0.55.7/node_modules/@unocss/extractor-svelte/dist/index.mjs";
import { imagetools } from "file:///C:/Users/MJW/freesnowboarding/urara/node_modules/.pnpm/vite-imagetools@4.0.19_rollup@2.79.1/node_modules/vite-imagetools/dist/index.mjs";
import { sveltekit as SvelteKit } from "file:///C:/Users/MJW/freesnowboarding/urara/node_modules/.pnpm/@sveltejs+kit@1.25.0_svelte@4.2.0_vite@4.4.9/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { SvelteKitPWA } from "file:///C:/Users/MJW/freesnowboarding/urara/node_modules/.pnpm/@vite-pwa+sveltekit@0.1.3_@sveltejs+kit@1.25.0_vite-plugin-pwa@0.14.7/node_modules/@vite-pwa/sveltekit/dist/index.mjs";
import TailwindCSS from "file:///C:/Users/MJW/freesnowboarding/urara/node_modules/.pnpm/tailwindcss@3.3.3/node_modules/tailwindcss/lib/index.js";

// tailwind.config.ts
import typography from "file:///C:/Users/MJW/freesnowboarding/urara/node_modules/.pnpm/@tailwindcss+typography@0.5.10_tailwindcss@3.3.3/node_modules/@tailwindcss/typography/src/index.js";
import daisyui from "file:///C:/Users/MJW/freesnowboarding/urara/node_modules/.pnpm/daisyui@3.7.3/node_modules/daisyui/src/index.js";

// src/lib/config/general.ts
var theme = [
  {
    name: "cmyk",
    text: "\u{1F5A8} Light"
  },
  {
    name: "dracula",
    text: "\u{1F9DB} Dark"
  },
  {
    name: "valentine",
    text: "\u{1F338} Valentine"
  },
  {
    name: "aqua",
    text: "\u{1F4A6} Aqua"
  },
  {
    name: "synthwave",
    text: "\u{1F303} Synthwave"
  },
  {
    name: "night",
    text: "\u{1F303} Night"
  },
  {
    name: "lofi",
    text: "\u{1F3B6} Lo-Fi"
  },
  {
    name: "lemonade",
    text: "\u{1F34B} Lemonade"
  },
  {
    name: "cupcake",
    text: "\u{1F9C1} Cupcake"
  },
  {
    name: "garden",
    text: "\u{1F3E1} Garden"
  },
  {
    name: "retro",
    text: "\u{1F307} Retro"
  },
  {
    name: "black",
    text: "\u{1F5A4} Black"
  }
];

// tailwind.config.ts
var tailwind_config_default = {
  content: ["./src/**/*.{html,md,js,svelte,ts}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'ul:has(li):has(input[type="checkbox"])': {
              padding: 0
            },
            'ul > li:has(input[type="checkbox"])': {
              listStyle: "none"
            },
            'ul > li:has(input[type="checkbox"]) ul li': {
              paddingLeft: 30
            }
          }
        }
      }
    }
  },
  plugins: [typography, daisyui],
  daisyui: { themes: theme.map(({ name }) => name) }
};

// vite.config.ts
import LightningCSS from "file:///C:/Users/MJW/freesnowboarding/urara/node_modules/.pnpm/postcss-lightningcss@0.7.0_postcss@8.4.29/node_modules/postcss-lightningcss/src/index.js";
var vite_config_default = defineConfig({
  envPrefix: "URARA_",
  build: {
    sourcemap: false,
    rollupOptions: {
      cache: false
    }
  },
  css: {
    postcss: {
      plugins: [TailwindCSS(tailwind_config_default), LightningCSS()]
    }
  },
  plugins: [
    UnoCSS({
      content: { pipeline: { include: [/\.svelte$/, /\.md?$/, /\.ts$/] } },
      extractors: [extractorSvelte],
      presets: [
        presetTagify({
          extraProperties: (matched) => matched.startsWith("i-") ? { display: "inline-block" } : {}
        }),
        presetIcons({ scale: 1.5 })
      ]
    }),
    imagetools(),
    SvelteKit(),
    SvelteKitPWA({
      registerType: "autoUpdate",
      manifest: false,
      scope: "/",
      workbox: {
        globPatterns: ["posts.json", "**/*.{js,css,html,svg,ico,png,webp,avif}"],
        globIgnores: ["**/sw*", "**/workbox-*"]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidGFpbHdpbmQuY29uZmlnLnRzIiwgInNyYy9saWIvY29uZmlnL2dlbmVyYWwudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxNSldcXFxcZnJlZXNub3dib2FyZGluZ1xcXFx1cmFyYVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTUpXXFxcXGZyZWVzbm93Ym9hcmRpbmdcXFxcdXJhcmFcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL01KVy9mcmVlc25vd2JvYXJkaW5nL3VyYXJhL3ZpdGUuY29uZmlnLnRzXCI7Ly8gdml0ZSBkZWZpbmUgY29uZmlnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbi8vIHZpdGUgcGx1Z2luXHJcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXHJcbmltcG9ydCB7IHByZXNldFRhZ2lmeSwgcHJlc2V0SWNvbnMgfSBmcm9tICd1bm9jc3MnXHJcbmltcG9ydCBleHRyYWN0b3JTdmVsdGUgZnJvbSAnQHVub2Nzcy9leHRyYWN0b3Itc3ZlbHRlJ1xyXG5pbXBvcnQgeyBpbWFnZXRvb2xzIH0gZnJvbSAndml0ZS1pbWFnZXRvb2xzJ1xyXG5pbXBvcnQgeyBzdmVsdGVraXQgYXMgU3ZlbHRlS2l0IH0gZnJvbSAnQHN2ZWx0ZWpzL2tpdC92aXRlJ1xyXG5pbXBvcnQgeyBTdmVsdGVLaXRQV0EgfSBmcm9tICdAdml0ZS1wd2Evc3ZlbHRla2l0J1xyXG4vLyBwb3N0Y3NzICYgdGFpbHdpbmRjc3NcclxuaW1wb3J0IFRhaWx3aW5kQ1NTIGZyb20gJ3RhaWx3aW5kY3NzJ1xyXG5pbXBvcnQgdGFpbHdpbmRDb25maWcgZnJvbSAnLi90YWlsd2luZC5jb25maWcnXHJcbi8vIEB0cy1leHBlY3QtZXJyb3IgdHMoNzAxNilcclxuaW1wb3J0IExpZ2h0bmluZ0NTUyBmcm9tICdwb3N0Y3NzLWxpZ2h0bmluZ2NzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgZW52UHJlZml4OiAnVVJBUkFfJyxcclxuICBidWlsZDoge1xyXG4gICAgc291cmNlbWFwOiBmYWxzZSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgY2FjaGU6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBjc3M6IHtcclxuICAgIHBvc3Rjc3M6IHtcclxuICAgICAgcGx1Z2luczogW1RhaWx3aW5kQ1NTKHRhaWx3aW5kQ29uZmlnKSwgTGlnaHRuaW5nQ1NTKCldXHJcbiAgICB9XHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICBVbm9DU1Moe1xyXG4gICAgICBjb250ZW50OiB7IHBpcGVsaW5lOiB7IGluY2x1ZGU6IFsvXFwuc3ZlbHRlJC8sIC9cXC5tZD8kLywgL1xcLnRzJC9dIH0gfSxcclxuICAgICAgZXh0cmFjdG9yczogW2V4dHJhY3RvclN2ZWx0ZV0sXHJcbiAgICAgIHByZXNldHM6IFtcclxuICAgICAgICBwcmVzZXRUYWdpZnkoe1xyXG4gICAgICAgICAgZXh0cmFQcm9wZXJ0aWVzOiAobWF0Y2hlZDogc3RyaW5nKSA9PiAobWF0Y2hlZC5zdGFydHNXaXRoKCdpLScpID8geyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9IDoge30pXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgcHJlc2V0SWNvbnMoeyBzY2FsZTogMS41IH0pXHJcbiAgICAgIF1cclxuICAgIH0pLFxyXG4gICAgaW1hZ2V0b29scygpLFxyXG4gICAgU3ZlbHRlS2l0KCksXHJcbiAgICBTdmVsdGVLaXRQV0Eoe1xyXG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcclxuICAgICAgbWFuaWZlc3Q6IGZhbHNlLFxyXG4gICAgICBzY29wZTogJy8nLFxyXG4gICAgICB3b3JrYm94OiB7XHJcbiAgICAgICAgZ2xvYlBhdHRlcm5zOiBbJ3Bvc3RzLmpzb24nLCAnKiovKi57anMsY3NzLGh0bWwsc3ZnLGljbyxwbmcsd2VicCxhdmlmfSddLFxyXG4gICAgICAgIGdsb2JJZ25vcmVzOiBbJyoqL3N3KicsICcqKi93b3JrYm94LSonXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIF1cclxufSlcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxNSldcXFxcZnJlZXNub3dib2FyZGluZ1xcXFx1cmFyYVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTUpXXFxcXGZyZWVzbm93Ym9hcmRpbmdcXFxcdXJhcmFcXFxcdGFpbHdpbmQuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9NSlcvZnJlZXNub3dib2FyZGluZy91cmFyYS90YWlsd2luZC5jb25maWcudHNcIjtpbXBvcnQgdHlwZSB7IENvbmZpZyB9IGZyb20gJ3RhaWx3aW5kY3NzJ1xyXG5pbXBvcnQgdHlwb2dyYXBoeSBmcm9tICdAdGFpbHdpbmRjc3MvdHlwb2dyYXBoeSdcclxuaW1wb3J0IGRhaXN5dWkgZnJvbSAnZGFpc3l1aSdcclxuXHJcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi9zcmMvbGliL2NvbmZpZy9nZW5lcmFsJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNvbnRlbnQ6IFsnLi9zcmMvKiovKi57aHRtbCxtZCxqcyxzdmVsdGUsdHN9J10sXHJcbiAgdGhlbWU6IHtcclxuICAgIGV4dGVuZDoge1xyXG4gICAgICB0eXBvZ3JhcGh5OiB7XHJcbiAgICAgICAgREVGQVVMVDoge1xyXG4gICAgICAgICAgY3NzOiB7XHJcbiAgICAgICAgICAgICd1bDpoYXMobGkpOmhhcyhpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0pJzoge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3VsID4gbGk6aGFzKGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSknOiB7XHJcbiAgICAgICAgICAgICAgbGlzdFN0eWxlOiAnbm9uZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3VsID4gbGk6aGFzKGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSkgdWwgbGknOiB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IDMwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHBsdWdpbnM6IFt0eXBvZ3JhcGh5LCBkYWlzeXVpXSxcclxuICBkYWlzeXVpOiB7IHRoZW1lczogdGhlbWUubWFwKCh7IG5hbWUgfSkgPT4gbmFtZSkgfVxyXG59IHNhdGlzZmllcyBDb25maWdcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxNSldcXFxcZnJlZXNub3dib2FyZGluZ1xcXFx1cmFyYVxcXFxzcmNcXFxcbGliXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTUpXXFxcXGZyZWVzbm93Ym9hcmRpbmdcXFxcdXJhcmFcXFxcc3JjXFxcXGxpYlxcXFxjb25maWdcXFxcZ2VuZXJhbC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvTUpXL2ZyZWVzbm93Ym9hcmRpbmcvdXJhcmEvc3JjL2xpYi9jb25maWcvZ2VuZXJhbC50c1wiO2ltcG9ydCB0eXBlIHsgVGhlbWVDb25maWcsIEhlYWRDb25maWcsIEhlYWRlckNvbmZpZywgRm9vdGVyQ29uZmlnLCBEYXRlQ29uZmlnLCBGZWVkQ29uZmlnIH0gZnJvbSAnJGxpYi90eXBlcy9nZW5lcmFsJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHRoZW1lOiBUaGVtZUNvbmZpZyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiAnY215aycsXHJcbiAgICB0ZXh0OiAnXHVEODNEXHVEREE4IExpZ2h0J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ2RyYWN1bGEnLFxyXG4gICAgdGV4dDogJ1x1RDgzRVx1REREQiBEYXJrJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ3ZhbGVudGluZScsXHJcbiAgICB0ZXh0OiAnXHVEODNDXHVERjM4IFZhbGVudGluZSdcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdhcXVhJyxcclxuICAgIHRleHQ6ICdcdUQ4M0RcdURDQTYgQXF1YSdcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdzeW50aHdhdmUnLFxyXG4gICAgdGV4dDogJ1x1RDgzQ1x1REYwMyBTeW50aHdhdmUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnbmlnaHQnLFxyXG4gICAgdGV4dDogJ1x1RDgzQ1x1REYwMyBOaWdodCdcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdsb2ZpJyxcclxuICAgIHRleHQ6ICdcdUQ4M0NcdURGQjYgTG8tRmknXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnbGVtb25hZGUnLFxyXG4gICAgdGV4dDogJ1x1RDgzQ1x1REY0QiBMZW1vbmFkZSdcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdjdXBjYWtlJyxcclxuICAgIHRleHQ6ICdcdUQ4M0VcdUREQzEgQ3VwY2FrZSdcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdnYXJkZW4nLFxyXG4gICAgdGV4dDogJ1x1RDgzQ1x1REZFMSBHYXJkZW4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAncmV0cm8nLFxyXG4gICAgdGV4dDogJ1x1RDgzQ1x1REYwNyBSZXRybydcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdibGFjaycsXHJcbiAgICB0ZXh0OiAnXHVEODNEXHVEREE0IEJsYWNrJ1xyXG4gIH1cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGhlYWQ6IEhlYWRDb25maWcgPSB7fVxyXG5cclxuZXhwb3J0IGNvbnN0IGhlYWRlcjogSGVhZGVyQ29uZmlnID0ge1xyXG4gIG5hdjogW1xyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnR2V0IFN0YXJ0ZWQnLFxyXG4gICAgICBsaW5rOiAnL2hlbGxvLXdvcmxkJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogJ0VsZW1lbnRzJyxcclxuICAgICAgbGluazogJy9oZWxsby13b3JsZC9lbGVtZW50cydcclxuICAgIH1cclxuICBdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmb290ZXI6IEZvb3RlckNvbmZpZyA9IHtcclxuICBuYXY6IFtcclxuICAgIHtcclxuICAgICAgdGV4dDogJ0ZlZWQnLFxyXG4gICAgICBsaW5rOiAnL2F0b20ueG1sJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogJ1NpdGVtYXAnLFxyXG4gICAgICBsaW5rOiAnL3NpdGVtYXAueG1sJ1xyXG4gICAgfVxyXG4gIF1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGU6IERhdGVDb25maWcgPSB7XHJcbiAgbG9jYWxlczogJ2VuLVVTJyxcclxuICBvcHRpb25zOiB7XHJcbiAgICB5ZWFyOiAnMi1kaWdpdCcsXHJcbiAgICB3ZWVrZGF5OiAnbG9uZycsXHJcbiAgICBtb250aDogJ3Nob3J0JyxcclxuICAgIGRheTogJ251bWVyaWMnXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmVlZDogRmVlZENvbmZpZyA9IHt9XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUU3QixPQUFPLFlBQVk7QUFDbkIsU0FBUyxjQUFjLG1CQUFtQjtBQUMxQyxPQUFPLHFCQUFxQjtBQUM1QixTQUFTLGtCQUFrQjtBQUMzQixTQUFTLGFBQWEsaUJBQWlCO0FBQ3ZDLFNBQVMsb0JBQW9CO0FBRTdCLE9BQU8saUJBQWlCOzs7QUNUeEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxhQUFhOzs7QUNBYixJQUFNLFFBQXFCO0FBQUEsRUFDaEM7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGOzs7QUQ3Q0EsSUFBTywwQkFBUTtBQUFBLEVBQ2IsU0FBUyxDQUFDLG1DQUFtQztBQUFBLEVBQzdDLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNOLFlBQVk7QUFBQSxRQUNWLFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxZQUNILDBDQUEwQztBQUFBLGNBQ3hDLFNBQVM7QUFBQSxZQUNYO0FBQUEsWUFDQSx1Q0FBdUM7QUFBQSxjQUNyQyxXQUFXO0FBQUEsWUFDYjtBQUFBLFlBQ0EsNkNBQTZDO0FBQUEsY0FDM0MsYUFBYTtBQUFBLFlBQ2Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxDQUFDLFlBQVksT0FBTztBQUFBLEVBQzdCLFNBQVMsRUFBRSxRQUFRLE1BQU0sSUFBSSxDQUFDLEVBQUUsS0FBSyxNQUFNLElBQUksRUFBRTtBQUNuRDs7O0FEaEJBLE9BQU8sa0JBQWtCO0FBRXpCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFdBQVc7QUFBQSxFQUNYLE9BQU87QUFBQSxJQUNMLFdBQVc7QUFBQSxJQUNYLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUyxDQUFDLFlBQVksdUJBQWMsR0FBRyxhQUFhLENBQUM7QUFBQSxJQUN2RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDLGFBQWEsVUFBVSxPQUFPLEVBQUUsRUFBRTtBQUFBLE1BQ25FLFlBQVksQ0FBQyxlQUFlO0FBQUEsTUFDNUIsU0FBUztBQUFBLFFBQ1AsYUFBYTtBQUFBLFVBQ1gsaUJBQWlCLENBQUMsWUFBcUIsUUFBUSxXQUFXLElBQUksSUFBSSxFQUFFLFNBQVMsZUFBZSxJQUFJLENBQUM7QUFBQSxRQUNuRyxDQUFDO0FBQUEsUUFDRCxZQUFZLEVBQUUsT0FBTyxJQUFJLENBQUM7QUFBQSxNQUM1QjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLElBQ1gsVUFBVTtBQUFBLElBQ1YsYUFBYTtBQUFBLE1BQ1gsY0FBYztBQUFBLE1BQ2QsVUFBVTtBQUFBLE1BQ1YsT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLFFBQ1AsY0FBYyxDQUFDLGNBQWMsMENBQTBDO0FBQUEsUUFDdkUsYUFBYSxDQUFDLFVBQVUsY0FBYztBQUFBLE1BQ3hDO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
