import type { MDXComponents } from 'mdx/types'


export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => (
    //   <h1 style={{ color: 'black', fontSize: '30px', textAlign: 'center'}}>{children}</h1>
    // ),
    // h2: ({ children }) => <h2 className="text-3xl font-bold text-center">{children}</h2>,

    ...components,
  }
}