
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClientProvider } from "@/components/providers/query-client"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider>
          <TooltipProvider>
            {children}
          </TooltipProvider>
          <Toaster />
          <Sonner />
        </QueryClientProvider>
      </body>
    </html>
  )
}
