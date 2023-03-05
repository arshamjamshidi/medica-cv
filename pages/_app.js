import "@/styles/globals.css";

// import { CacheProvider } from "@emotion/react";
// import createEmotionCache from "@/utility/createEmotionCache";

import { Container } from "@mui/material";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollButton from "@/components/modules/scrollButton";

// const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps }) {
  // const emotionCache = clientSideEmotionCache;

  return (
    // <CacheProvider value={emotionCache}>
    <Container maxWidth="lg">
      <Header />
      <ScrollButton />
      <Component {...pageProps} />
      <Footer />
    </Container>
    // </CacheProvider>
  );
}
