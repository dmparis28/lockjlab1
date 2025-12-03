// Filename: app/layout.js
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Lock J Lab | Digital Products That Drive Results",
  description: "Lock J Lab transforms complex challenges into high-performance applications. Expert strategy, design, and development for startups and enterprises.",
  keywords: "product development, UI/UX design, software development, MVP, startup, mobile app, web app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
