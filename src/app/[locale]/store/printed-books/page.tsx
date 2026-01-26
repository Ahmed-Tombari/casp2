import { fetchData } from '@/lib/api'
import Bookshelf from '@/app/components/Bookshelf/Bookshelf'

export default async function PrintedBooksPage() {
  const data = await fetchData()

  const books = data.CourseDetailData.filter(
    (item: any) => item.category === 'printed-books'
  )

  return (
    <main className="min-h-screen pt-24 container">
      <h1 className="text-3xl font-bold mb-8">
        📚 Printed Books
      </h1>
      <Bookshelf books={books} />
    </main>
  )
}
