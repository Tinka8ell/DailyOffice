import { defaultOffice } from '../../hooks/useOffice'
import { Template, templateT, templateTagT } from '../template/Template'

export type part = { tag?: string; text: string}
export type line = { parts: Array<part> }

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

export function Paragraph({ lines }: { lines: Array<line>}) {
  const content: templateT = lines.map((line) => lineToTemplate(line))
  const paragraph: templateTagT = {
    type: 'div',
    className: 'Paragraph',
    content
  }
  return (<Template newTemplate={paragraph} office={defaultOffice} />)
}
