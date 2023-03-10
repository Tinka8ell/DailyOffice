import type { office } from "../../hooks/useOffice";
import { Api } from "../../services/Api"
import { BibleQuote, BibleReference } from "../BibleQuote/BibleQuote"
import { Meditation } from "../meditation/Meditation"

type templateListT = {
  [index: string]: templateT 
}

type templateT = templateNameT | string | Array<templateT> | templateTagT
type templateTagT = {
    type: "div" | "span";
    className: string;
    content: templateT;
}
type templateNameT = {
    name: string;
    parameters?: parameters
}
type parameters = {
  [index: string]: string;
}

export { templateT, templateNameT, templateTagT, templateListT }

export function Template({ newTemplate, office }: { newTemplate: templateT; office: office }) {
  // console.log('Template:', newTemplate)
  if (newTemplate == null) {
    return <h1>Something is very wrong!</h1>
  } else if (Array.isArray(newTemplate)) {
    // console.log('is an array')
    return (
      <>
        {
          newTemplate.map( (template: templateT, index: number) => {
            return (<Template key={index} newTemplate={template} office={office} />) 
          })
        }
      </>
    )
  } else if (typeof newTemplate === 'string' ) {
    // console.log('is a string')
    return (
      <>
        {newTemplate}
      </>
    )
  } else {
    const keys = Object.keys(newTemplate)
    if (keys.includes('type')){
      // console.log('is a templateTagT')
      const taggedTemplate = newTemplate as templateTagT
      if (taggedTemplate.type === 'div'){
        return (
          <div className={taggedTemplate.className} >
            <Template newTemplate={taggedTemplate.content} office={office} />
          </div>
        )
      } else { // as taggedTemplate.type must be 'span'
        return (
          <span className={taggedTemplate.className} >
            <Template newTemplate={taggedTemplate.content} office={office} />
          </span>
        )
      } 
    } else {
      // console.log('is a templateNameT')
      // named component
      const namedTemplate = newTemplate as templateNameT
      const name = namedTemplate.name
      if (name === 'Meditation'){
        // console.log('Template:Meditation')
        return ( <Meditation office={office} />)
      } else if (name === 'BibleQuote'){
        // console.log('Template:BibleQuote')
        const templateParameters = namedTemplate.parameters as parameters
        return ( <BibleQuote reference={templateParameters.reference} version={templateParameters.version} />)
      } else if (name === 'BibleReference'){
        // console.log('Template:BibleReference')
        const templateParameters = namedTemplate.parameters as parameters
        return ( <BibleReference reference={templateParameters.reference} version={templateParameters.version} />)
      } else {
        // assume it is the name of another template
        // console.log('Template:subtemplate:', name)
        const subtemplate = Api.getTemplate(name)
        return (
          <Template newTemplate={subtemplate} office={office} />
        )
      }
    }
  }
}

