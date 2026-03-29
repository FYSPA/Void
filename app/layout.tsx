// app/layout.tsx
import { Space_Grotesk } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space", // Cambiamos el nombre a algo corto
  display: "swap",
});

const nicoMoji = localFont({
  src: './fonts/NicoMoji-Regular.ttf', // RUTA NUEVA
  variable: '--font-nico', // Cambiamos el nombre a algo corto
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className="h-full bg-black">
      {/* IMPORTANTE: Las dos variables deben estar aquí */}
      <body className={`${spaceGrotesk.variable} ${nicoMoji.variable} antialiased selection:bg-fuchsia-500/30 selection:text-fuchsia-200`}>
        {children}
      </body>
    </html>
  );
}