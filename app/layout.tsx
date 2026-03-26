import { Space_Grotesk } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  // Eliminamos variable por ahora para no confundirnos
  display: "swap",
});

// Configuración de la fuente local
const nicoMojiLocal = localFont({
  src: '../public/fonts/NicoMoji-Regular.ttf',
  variable: '--font-nico-moji',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className="h-full bg-black">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}