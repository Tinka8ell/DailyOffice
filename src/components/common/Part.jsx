export function Part({ type, children }) {
  return (
    <>
      { (type === 'h1') && (
        <h1> { children } </h1>
        )}
      { (type === 'h2') && (
        <h2> { children } </h2>
        )}
      { (type === 'h3') && (
        <h3> { children } </h3>
        )}
      { (type === 'h4') && (
        <h4> { children } </h4>
        )}
      { (type === 'h5') && (
        <h5> { children } </h5>
        )}
      { (type === 'em') && (
        <em> { children } </em>
        )}
      { (type == null) && (
        <> { children } </>
        )}
    </>
  )
} 
