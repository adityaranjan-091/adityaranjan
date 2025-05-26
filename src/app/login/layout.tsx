import "../globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "Login",
  description: "Login Page for admin dashboard",
  icons: "/login.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
