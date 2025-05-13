import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Main/Footer";
import ConditionalWhatsAppButton from "./components/Main/ConditionalWhatsAppButton";
import { AuthProvider } from "./context/AuthContext";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-poppins",
});

export const metadata = {
  title: "Falx Lata HR Solutions",
  description: "Professional HR services and recruitment solutions",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        
        {/* Fix for mobile viewport issues causing horizontal scroll */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              // Fix viewport issues on mobile
              function updateViewportWidth() {
                const viewport = document.querySelector('meta[name="viewport"]');
                if (viewport) {
                  viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0';
                }
                
                // Fix for iOS devices
                document.documentElement.style.setProperty('overflow-x', 'hidden');
                document.body.style.setProperty('overflow-x', 'hidden');
                document.body.style.setProperty('width', '100%');
                document.body.style.setProperty('max-width', '100%');
                document.body.style.setProperty('position', 'relative');
              }
              
              // Run on page load
              updateViewportWidth();
              
              // Run on resize
              window.addEventListener('resize', updateViewportWidth);
            })();
          `
        }} />
      </head><body
        className={`${poppins.variable} ${poppins.className} antialiased overflow-x-hidden`}
        style={{ backgroundColor: "#f7f7f5", width: "100vw", maxWidth: "100%" }}
      >
        <AuthProvider>
          {children}
          <Footer />
          <ConditionalWhatsAppButton phoneNumber="+94777937691" />
        </AuthProvider>
      </body>
    </html>
  );
}
