import { Paragraph } from './Paragraph'
import type { line } from './Paragraph'

export type paragraph = { lines: Array<line> }

export function ParagraphList(
  { paragraphs, className }: { paragraphs: Array<paragraph>; className?: string }) {
  if (paragraphs == null){
    return (
      <h1> No paragraphs to display </h1>
    )
  }
  const classname = className ? className : 'ParagraphText'
  return (
  <div className={classname}>
    { 
      paragraphs.map((paragraph, index) => (
        <Paragraph key={index} lines={paragraph.lines} />
      ))
    }
  </div>
  )
}
