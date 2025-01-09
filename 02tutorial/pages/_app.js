import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
   <>
      <header>Header</header>
      <Component {...pageProps} />
      <footer>Footer</footer>
  </>
  );
}
