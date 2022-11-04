This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

&nbsp;
&nbsp;
&nbsp;

# Build times

Product pages under the route /products-ssg are statically generated upon build-time, after running the production build process 10 times for each of the three databases (db-100, db-1000 & db-10000) these are the respective average production build times

| N products | Avg. Build time |
| ---------- | --------------: |
| 100        |         7.5 _s_ |
| 1000       |        12.1 _s_ |
| 10000      |         1 _min_ |
