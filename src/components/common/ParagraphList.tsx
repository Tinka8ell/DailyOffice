import { defaultOffice } from '../../hooks/useOffice'
import { Template, templateT, templateTagT } from '../template/Template'

export type part = { tag?: string; text: string}
export type line = { parts: Array<part> }
export type paragraph = { lines: Array<line> }

function partToTemplate (part: part): templateT{
  return (
    (part.tag == null) ?
    (part.text) :
    ({
      type: 'div',
      className: part.tag,
      content: part.text
    })
  )
}

function lineToTemplate (line: line){
  const parts = line.parts
  const content: Array<templateT> = parts.map((part) => partToTemplate(part))
  const template: templateT = {
    type: 'div',
    className: 'Line',
    content
  }
  return template
}

function paragraphToTemplate (paragraph: paragraph){
  const lines = paragraph.lines
  const content: templateT = lines.map((line) => lineToTemplate(line))
  const template: templateTagT = {
    type: 'div',
    className: 'Paragraph',
    content
  }
  return template
}

export function ParagraphList(
  { paragraphs, className }: { paragraphs: Array<paragraph>; className?: string }) {
  const classname = className ? className : 'ParagraphText'
  const content: templateT = paragraphs.map((paragraph) => paragraphToTemplate(paragraph))
  const paragraphList: templateTagT = {
    type: 'div',
    className: classname,
    content
  }
  return (<Template newTemplate={paragraphList} office={defaultOffice} />)
}
