
import "./globals.css";

import NavBar from "./Componentes/NavBar";

export const metadata = {
  title: "Kiosko App",
  description: "gpvsystems Kiosko App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NavBar />
      <body>
        {children}
      </body>
    </html>
  );
}
