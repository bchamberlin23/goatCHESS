import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta
          name="description"
          content="Chesskit — Free, open-source chess analysis and training. Review games with Stockfish, play puzzles, and improve your chess."
        />

        {/* OG (Social networks) */}
        <meta
          property="og:title"
          content="Chesskit — Free Chess Analysis & Training"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="chesskit.org" />
        <meta property="og:url" content="https://chesskit.org/" />
        <meta
          property="og:image"
          content="https://chesskit.org/social-networks-1200x630.png"
        />
        <meta
          property="og:description"
          content="Free, open-source chess analysis and training powered by Stockfish. Review your games, train tactics, play against the engine, and track your progress."
        />

        {/* Twitter */}
        <meta
          name="twitter:title"
          content="Chesskit — Free Chess Analysis & Training"
        />
        <meta name="twitter:domain" content="chesskit.org" />
        <meta name="twitter:url" content="https://chesskit.org/" />
        <meta
          name="twitter:description"
          content="Free, open-source chess analysis and training powered by Stockfish. Review your games, train tactics, and play against the engine."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://chesskit.org/social-networks-1200x630.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
