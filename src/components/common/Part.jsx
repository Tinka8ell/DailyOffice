export function Part({ type, children }) {
  return (
    <>
      { (type === 'em') && (
        <em> { children } </em>
        )}
      { (type !== 'em') && (
        <> { children } </>
        )}
    </>
  )
} 
