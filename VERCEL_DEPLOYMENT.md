# Vercel deployment and public assets

The site references image, logo, and favicon assets through public absolute URLs. This prevents Vercel from treating `/manus-storage/...` as a route inside the Vercel deployment.

The repository includes `vercel.json` with an explicit `pnpm run build` command, `dist/public` output directory, Vite framework declaration, and SPA fallback. This prevents Vercel from serving the bundled `server/index.ts` file as a plain source page. After the repository redeploys, the root URL should serve the compiled BrightSmile frontend.

The current default public asset origin is:

`https://brightsmile-4jarhlb3.manus.space`

When deploying to Vercel, the application will use this origin automatically unless the Vercel project defines the optional environment variable `VITE_ASSET_BASE_URL`. If a separate public CDN or object-storage bucket is used later, set that variable to its origin without a trailing slash, for example:

`VITE_ASSET_BASE_URL=https://cdn.example.com`

All referenced image and logo URLs currently respond successfully from the default public origin. Vercel hosting remains separate from the asset host; therefore, keep the asset origin publicly reachable and do not restrict it to a private session or localhost.
