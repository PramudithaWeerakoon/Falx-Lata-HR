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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>      <body
        className={`${poppins.variable} ${poppins.className} antialiased`}
        style={{ backgroundColor: "#f7f7f5" }}
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
