import { Paragraph } from './Paragraph'

export function ParagraphList({ paragraphs }) {
  if (paragraphs == null){
    return (
      <h1> No paragraphs to display </h1>
    )
  }
  return (
  <div className='BibleText'>
    { 
      paragraphs.map((paragraph, index) => (
        <Paragraph key={index} lines={paragraph} />
      ))
    }
  </div>
  )
}
