export function Part({ tag, children }: {tag?: string; children: React.ReactNode}) {
  return (
    <>
      { (tag === 'h1') && (
        <h1> { children } </h1>
        )}
      { (tag === 'h2') && (
        <h2> { children } </h2>
        )}
      { (tag === 'h3') && (
        <h3> { children } </h3>
        )}
      { (tag === 'h4') && (
        <h4> { children } </h4>
        )}
      { (tag === 'h5') && (
        <h5> { children } </h5>
        )}
      { (tag === 'em') && (
        <em> { children } </em>
        )}
      { (tag == null) && (
        <> { children } </>
        )}
    </>
  )
} 
