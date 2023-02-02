import { ParagraphList } from './ParagraphList'

export function BibleQuote({ verse }) {
  if (verse == null){
    return (
      <h1> No verse to display </h1>
    )
  }
  return (
  <div className="BibleQuote">
    <ParagraphList className='BibleText' paragraphs={verse.paragraph} />
    <div className='BibleReference'>
      { verse.reference } 
      { verse.version != null && ' (' + verse.version + ') ' }
    </div>
  </div>
  )
}
