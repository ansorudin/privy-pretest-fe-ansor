This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and styling with Tailwind CSS (https://tailwindcss.com) .

## Getting Started

First, if the connection with the API gets a CORS error, then run this script:

npx lcp --proxyUrl "http://pretest-qa.dcidev.id" then a port will be created that is used to replace the url affected by the CORS issue.

this scripts will bypass the CORS issue, but if there is no CORS issue, no need to run this script.

Second, add the env file in the root directory, you can see an example in env.template

Third, run the development server:

npm run dev

# or

yarn dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
