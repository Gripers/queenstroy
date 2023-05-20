import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <title>QUEENSTROY</title>
        <meta name='description' content='online shop' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/static/images/logo.svg' />
        <script
          src='https://code.jquery.com/jquery-3.6.4.min.js'
          integrity='sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8='
          crossOrigin='anonymous'
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
