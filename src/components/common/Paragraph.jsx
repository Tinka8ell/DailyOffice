import { Line } from './Line'

export function Paragraph({ lines }) {
  return (
    <>
      {
        lines.map((line, index) => (
          <Line key={index} parts={line.parts} />
        ))
      }
    </>
  )
}
