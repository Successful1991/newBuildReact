import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <main data-scroll-container className="container">
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp;
