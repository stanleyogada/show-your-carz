import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "ShowYourCarz",
  description:
    "Experience automotive perfection with our extensive collection of cars. From sleek sedans to powerful SUVs, discover the thrill of driving in style. Find your dream ride today and embark on an exhilarating journey on the road of automotive excellence.",
  author: "Stanley Ogada (RichCode)",
  keywords:
    "frontend, web, developer, engineer, next, nextjs, react, html, css, javascript, Es6, React.js, Next.js, Redux, Jest, React-Testing-Library, Cypress, Axios, React-Query, Chart.js, Material-UI, Chakra-UI, Bootstrap, TailwindCSS, Webpack, Story-book, Vite, Git, Github, BitBucket, Node.js, NPM, Express.js, MongoDB, PostgreSQL, Heroku, Vercel, Slack, Jira, Google Meets, Sentry, Trello, Travis-CI, Circle-CI, Split.IO, Backend, full-stack, remote, job, open, visa, sponsorship, lagos, nigeria, US, UnitedStates",
  ogImage: "/og-img.png",
  url: "https://show-your-carz.vercel.app/",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="image" property="og:image" content={metadata.ogImage} />
        <meta name="url" property="og:url" content={metadata.url} />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="/fonts/fonts.css" />
      </head>

      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
