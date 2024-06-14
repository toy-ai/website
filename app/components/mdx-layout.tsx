export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose

                    max-w-none

                    prose-headings:mt-8
                    prose-headings:font-semibold
                    prose-headings:text-center
                    prose-headings:w-screen
                    prose-headings:text-pink-500

                    prose-h1:text-5xl
                    prose-h2:text-4xl
                    prose-h3:text-3xl
                    prose-h4:text-2xl
                    prose-h5:text-xl
                    prose-h6:text-lg

                    prose-p:text-left
                    prose-p:ml-72
                    prose-p:mr-72
                    prose-p:font-body
				            prose-p:text-gray-600
                    prose-p:mt-4
                    prose-p:mb-4

                    prose-ul:self-left
                    prose-ul:text-left
                    prose-ul:ml-72
                    prose-ul:mr-72

                    prose-pre:ml-72
                    prose-pre:mr-72

                    {/*prose-code:text-pink-500*/}
                    prose-code:rounded-md
                    ">
      {children}
    </div>
  )
}
