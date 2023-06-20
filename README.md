This is a WIP Readme, still very much subject changes, corrections and improvements

## Getting Started

First, run the locally hosted json-server (runs on port 4000 and watches db-100.json by default):

```bash
npm run server
```

Run the Next.js development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the results

To create a production build

```bash
npm run build
```

To start the production server

```bash
npm run start
```

#### To modify env variables used within the app, view the contents of `./next.config.js`

<br/>

# Build time

Product pages under the route /products-ssg are statically generated upon build-time and make up for most of the data in the build output. After running the production build process on my machine 10 times for each of the three databases (db-100, db-1000 & db-10000) these are the respective average production build times.

| N products | Avg. Build time |
| ---------- | --------------: |
| 100        |         7.5 _s_ |
| 1000       |        12.1 _s_ |
| 10000      |         1 _min_ |

# SSR, CSR, SSG, ISR,

Brief layman's explanations of terms:

- [SSR (Server side rendering)](https://nextjs.org/docs/basic-features/pages#server-side-rendering) - The server gets the data and renders the requested page upon each request.
- [CSR (Client side rendering)](https://nextjs.org/docs/basic-features/data-fetching/client-side) - The client downloads barebone HTML and the resources (e.g. JS bundles, other data) needed to build the page in their own browser
- [SSG (Static site generation)](https://nextjs.org/docs/basic-features/pages#static-generation) - Data is fetched once during build time and pages are built using it, served to the user as fully finished pages. Updating pages built with only with SSG requires a full rebuild of the site.
- [ISR (Incremental static regeneration)](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration) - A complement to SSG, allowing SSG pages to be somewhat "dynamic" by providing revalidation intervals for them or by revalidating them on-demand.

Each of these approaches provides benefits as well as cons therefore there is no way to pick a clear winner. Rather, we could use some metrics to help us decide which approach is best for each use case.

- SEO
- Data freshness
- Initial Load time

## SEO

SSR, SSG and ISR are better for SEO compared to CSR because in all 3 cases, the content is pre-rendered and served to web crawlers which makes it easier for them to index the pages, while in most cases, CSR pages are usually viewed as blank pages during the first wave of indexing.

## Data freshness

In some cases, we want our data to be as up-to-date as possible (e.g. a product page including prices, stock availability, etc.).

CSR and SSR approaches work best here because they allow the page data to be fetched and updated upon each request, serving the user with the latest information.

ISR is capable of somewhat "mocking" what CSR and SSR provide regarding data freshness without rebuilding the whole website in two ways.

1. Setting a revalidation parameter to a statically generated page which tells Next.js to check if the data the page uses has been modified, and if so, it re-generates the page and serves the latest version of the page upon the next request to it. The con with this approach is that the page with stale data must first be visited for the data to be revalidated and the page regenerated.
2. On demand revalidation: Next.js allows us to create an API endpoint to imperatively revalidate pages. The possibility of linking an update of data in the CMS to the revalidation of the page related to the data could prove very efficient and useful.

Pure SSG (SSG without ISR) is obviously a bad choice for pages which require the data to be up-to-date, as the pages built using the pure SSG approach serve the data given to them at build time. It is required to do a full rebuild of the site for these pages to be updated.

## Initial load time

SSG and ISR pages provide the best initial load time as the server has the whole page ready and it is just a matter of the time it takes for it to be sent to the user. Caching and CDN optimization can be crucial.

CSR and SSR both depend on some work being done before the user can expect a functional page. CSR relies on the client downloading JS and data to create the page on their side. Large JS bundles will affect the load times, especially for users with network issues. SSR relies on the server building the page on its end each time the page is requested and sending it to the client. Distance between the client and server can cause latency.

# Conclusion

Sometimes, the decision can be easy.

**About page**: Almost never changes, isn't that crucial to be up-to-date -> **SSG**

But sometimes, a mix of different approaches can be the best fit.

**Product page**: Has elements that are repetitive and static (e.g. page layout components) which could be pre-rendered, but has data (the product) that has to be up-to-date. **SSG** combined with **CSR** for fetching the crucial product data could be the ideal solution.

## Additional content

### SWR - React hooks for data fetching

_TBD_
