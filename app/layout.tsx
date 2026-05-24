import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Variant Heatmap — See Which SKUs Actually Sell',
  description: 'Visual heatmaps of your Shopify product variants by sales, profit margin, and inventory turnover. Optimize your SKU mix in minutes.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d3e954e9-48d8-4ab7-b5ad-c3d0eecc85a3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
