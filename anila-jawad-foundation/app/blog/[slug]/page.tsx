interface Params { params: { slug: string } }
export default function BlogPost({ params }: Params) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="text-xs opacity-70">16/07/2025</div>
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-archivo)' }}>Breaking News: …</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="h-64 bg-gray-200 rounded-xl" />
        <div className="rounded-xl bg-gray-100 p-6">
          <p>Insert full article body of text… (placeholder)</p>
        </div>
      </div>
    </div>
  )
}
