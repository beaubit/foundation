export default function Footer() {
  return (
    <footer className="relative mt-16 bg-[#6f7277] text-white">
      <div className="footer-pattern absolute inset-x-0 top-0 h-6"></div>
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm flex items-center justify-between">
        <p>© {new Date().getFullYear()} Anila &amp; Jawad Iqbal Foundation</p>
        <div className="opacity-75">• • • •</div>
      </div>
    </footer>
  )
}
