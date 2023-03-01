import { defaultOffice, office } from '../../hooks/useOffice';
import { Template, templateT } from '../template/Template';
export type part = { tag?: string; text: string}

export function Line({ parts }: {parts: Array<part>}) {
  const content: templateT = parts.map(
    (part, index) => 
    (part.tag == null) ?
    (part.text) :
    ({
      type: 'div',
      className: part.tag,
      content: part.text
    })
  )
  const line: templateT = {
    type: 'div',
    className: 'Line',
    content
  }
  return (<Template newTemplate={line} office={defaultOffice} />)      
}
