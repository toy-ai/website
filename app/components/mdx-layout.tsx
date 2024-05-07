export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose
                    max-w-none
                    prose-headings:mt-8
                    prose-headings:font-semibold
                    prose-headings:text-black
                    prose-headings:text-center
                    prose-headings:w-screen
                    prose-headings:text-pink-500

                    prose-h1:text-5xl
                    prose-h2:text-4xl
                    prose-h3:text-3xl
                    prose-h4:text-2xl
                    prose-h5:text-xl
                    prose-h6:text-lg

                    prose-p:text-center
                    prose-p:font-body
				            prose-p:text-gray-600
                    prose-p:w-screen
                    prose-p:text-custom
                    prose-p:mt-1

                    prose-list:list-disc
                    prose-list:list-inside
                    prose-list-marker:text-blue-500

                    ">
      {children}
    </div>
  )
}
