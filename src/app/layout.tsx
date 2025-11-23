import "./globals.css"
import type { Metadata } from "next"
import { AppThemeProvider } from "./design-system/providers/ThemeProvider"

export const metadata: Metadata = {
  title: "Maruan Maruan",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body>
      <AppThemeProvider>
          {children}
        </AppThemeProvider>
      </body>
    </html>
  )
}
