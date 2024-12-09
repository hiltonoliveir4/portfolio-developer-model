import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "./components/header";
import "./globals.scss";
import ThemeContextParent from "./providers/themeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Hilton Oliveira",
  description: "Portfolio pessoal de projetos e experiências profissionais",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContextParent>
      <html lang="pt-BR">
        <body className={`${poppins.className}`}>
          <Header />
          {children}
        </body>
      </html>
    </ThemeContextParent>
  );
}
