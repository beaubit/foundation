export default function AdminBlog() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Blog Management</h1>
      <div className="grid grid-cols-4 gap-3">
        {['Live Posts', 'Drafts', 'Deleted', 'Archived'].map(tab => (
          <div key={tab} className="rounded-md bg-gray-100 p-3 font-medium">{tab}</div>
        ))}
      </div>
      <div className="mt-6 space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="rounded-md bg-gray-100 p-4">[Blog Post Title...]</div>
        ))}
      </div>
    </div>
  )
}
