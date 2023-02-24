import { Part } from './Part'
export type part = { tag?: string; text: string}

export function Line({ parts }: {parts: Array<part>}) {
  return (
    <>
    {
      parts.map(
        (part, index) => (part.tag == null) ?
          <Part key={index} >
            {part.text}
          </Part> 
        :
          <Part key={index} tag={part.tag} >
            {part.text}
          </Part> 
        )
    }
    </>
  )      
}
