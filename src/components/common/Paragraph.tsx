import { Line } from './Line'
import type { part } from './Line'
import { LineBreak } from './LineBreak'

export type line = { parts: Array<part> }

export function Paragraph({ lines }: { lines: Array<line>}) {
  return (
    <div className='Paragraph'>
      {
        lines.map((line, index) => (
          <>
            { index > 0 && <LineBreak /> }
            <Line key={index} parts={line.parts} />
          </>
        ))
      }
    </div>
  )
}
