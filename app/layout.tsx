import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AU Registration",
  description: "African Union Registration Portal",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        {children}
        <div id="google_translate_element" style={{ position: 'absolute', top: '-1000px', left: '-1000px', opacity: 0 }}></div>
        <Script id="google-translate-fix" strategy="beforeInteractive">
          {`
            if (typeof Node === 'function' && Node.prototype) {
              const originalRemoveChild = Node.prototype.removeChild;
              Node.prototype.removeChild = function(child) {
                if (child.parentNode !== this) {
                  if (console) {
                    console.warn('Cannot remove a child from a different parent', child, this);
                  }
                  return child;
                }
                return originalRemoveChild.apply(this, arguments);
              }

              const originalInsertBefore = Node.prototype.insertBefore;
              Node.prototype.insertBefore = function(newNode, referenceNode) {
                if (referenceNode && referenceNode.parentNode !== this) {
                  if (console) {
                    console.warn('Cannot insert before a reference node from a different parent', referenceNode, this);
                  }
                  return newNode;
                }
                return originalInsertBefore.apply(this, arguments);
              }
            }
          `}
        </Script>
        <Script id="google-translate-script" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,fr,es,it,sw,ar,pt',
                autoDisplay: false
              }, 'google_translate_element');
            }
          `}
        </Script>
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
