export default function Page() {
  const faq = [
    {
      q: 'Which Shopify plans are supported?',
      a: 'All Shopify plans are supported. You connect via OAuth and we read your orders and product data — no extra apps needed.'
    },
    {
      q: 'What metrics does the heatmap show?',
      a: 'Revenue, units sold, profit margin, and inventory turnover — all color-coded per variant so dead stock jumps out instantly.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Cancel from your billing portal at any time. No contracts, no questions asked.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Shopify Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          See exactly which variants{' '}
          <span className="text-[#58a6ff]">make you money</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Color-coded heatmaps of every product variant — by sales, profit margin, and inventory turnover. Stop guessing which SKUs to cut.
        </p>
        {/* Mock heatmap visual */}
        <div className="mx-auto mb-10 max-w-lg rounded-xl border border-[#30363d] bg-[#161b22] p-4">
          <p className="text-xs text-[#8b949e] mb-3 text-left">Sample: T-Shirt variants by revenue</p>
          <div className="grid grid-cols-5 gap-1">
            {[
              '#1a4a1a','#2d7a2d','#3da63d','#56c456','#6ee86e',
              '#4a3a00','#7a6200','#a68500','#c9a800','#e8c800',
              '#4a1a1a','#7a2d2d','#a63d3d','#c45656','#e86e6e',
              '#1a2a4a','#2d4a7a','#3d6aa6','#5688c4','#6ea8e8',
              '#2a1a4a','#4a2d7a','#6a3da6','#8856c4','#a86ee8'
            ].map((color, i) => (
              <div
                key={i}
                className="h-10 rounded"
                style={{ backgroundColor: color }}
                title={`Variant ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-[#8b949e]">
            <span>Low</span><span>Revenue</span><span>High</span>
          </div>
        </div>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Free Trial
        </a>
        <p className="mt-3 text-xs text-[#8b949e]">7-day free trial · No credit card required to start</p>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-sm text-[#8b949e] mb-6">/month · cancel anytime</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              'Unlimited product variants',
              'Sales, margin & turnover heatmaps',
              'Date range filtering',
              'CSV export',
              'Shopify OAuth — 1-click connect'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950]">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faq.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Variant Heatmap. All rights reserved.
      </footer>
    </main>
  )
}
