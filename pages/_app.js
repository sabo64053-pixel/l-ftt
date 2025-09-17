import "@/styles/globals.css";
import { CartProvider } from "../context/CartContext";
import { LanguageProvider } from "../context/LanguageContext";

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </LanguageProvider>
  );
}
