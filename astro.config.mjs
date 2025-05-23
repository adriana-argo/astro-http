<<<<<<< HEAD
=======
// @ts-check
>>>>>>> ba94768611a2cf2a7f4a3c16d72c726a9b51bf61
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

<<<<<<< HEAD
// import node from "@astrojs/node";
import cloudflare from "@astrojs/cloudflare";

import db from "@astrojs/db";


import vue from "@astrojs/vue";
=======
import cloudflare from '@astrojs/cloudflare';

import db from '@astrojs/db';

// import node from '@astrojs/node';


>>>>>>> ba94768611a2cf2a7f4a3c16d72c726a9b51bf61

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
<<<<<<< HEAD
  integrations: [mdx(), sitemap(), db(), vue()],
  output: "server",
  adapter: cloudflare()
=======

  output: "server",
  // adapter: node({
  //   mode: 'standalone',
  // }),
  integrations: [mdx(), sitemap(), db()],

  adapter: cloudflare(),
>>>>>>> ba94768611a2cf2a7f4a3c16d72c726a9b51bf61
});