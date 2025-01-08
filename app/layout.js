import { Inter} from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Header from "@/components/header";
 const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Wleath",
  description: "one stop shop for all your financial needs",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
      <Header/>
        <main className="min-h-screen">
        {children}
        </main>
     
        <footer className="bg-blue-50 py-12">
          <div  className= "container mx-auto px-4 text-center">
            <p>© 2025 Wealth. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
