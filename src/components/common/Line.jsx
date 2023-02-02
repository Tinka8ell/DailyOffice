import { Part } from './Part'

export function Line({ parts }) {
  return (
    <>
    {
      parts.map((part, index) => (
        <Part key={index} type={part.type} >
          {part.text}
        </Part> 
      ))
    }
    </>
  )      
}
