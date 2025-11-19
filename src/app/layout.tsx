import "./globals.css"
import type { Metadata } from "next"
import { AppThemeProvider } from "./design-system/providers/ThemeProvider"
import { Header } from "@/components/Header"

export const metadata: Metadata = {
  title: "Portfólio do Maruan",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body>
      <AppThemeProvider>
        <Header />
          {children}
        </AppThemeProvider>
      </body>
    </html>
  )
}
