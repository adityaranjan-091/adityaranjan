import "../globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "Admin",
  description: "Admin Dashboard Layout",
  icons: "/admin.png",
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
