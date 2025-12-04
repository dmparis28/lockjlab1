// Filename: app/layout.js
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import Providers from "./components/Providers";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "Lock J Lab | Digital Products That Drive Results",
  description: "Lock J Lab transforms complex challenges into high-performance applications. Expert strategy, design, and development for startups and enterprises.",
  keywords: "product development, UI/UX design, software development, MVP, startup, mobile app, web app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          <NextTopLoader color="var(--accent)" showSpinner={false} height={3} />
          <SmoothScroll>
            <Header />
            {children}
            <Footer />
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
