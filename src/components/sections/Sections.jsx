import { Heading } from '../common/Heading'

export function Sections({ template}) {
    function expandTemplate(template){
        return template.map(element => {
            if (element.type === "heading"){
                return <Heading key={element.key} template={element} />
            } else {
                return (
                    <div key={element.key}>
                        Element name: {element.name}
                        <br />
                        </div>
                )
            }
        })
    }

  return (
    <div className="Sections">
        Template contains: 
        { expandTemplate(template)}
    </div>
  )
}
