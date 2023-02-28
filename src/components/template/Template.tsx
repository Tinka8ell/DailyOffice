import type { office } from "../../hooks/useOffice";
import { Api } from "../../services/Api"
import { BibleQuote, BibleReference } from "../common/BibleQuote"
import { Meditation } from "../meditation/Meditation"

type templateListT = {
  [index: string]: templateT 
}

type templateT = templateNameT | string | Array<templateT> | templateTagT
type templateTagT = {
    type: "div" | "span";
    className: string;
    children: templateT;
}
type templateNameT = {
    name: string;
    parameters?: parameters
}
type parameters = {
  [index: string]: string;
}

export { templateT, templateNameT, templateTagT, templateListT }

export function OfficeTemplate({ newTemplate, office }: { newTemplate: templateT; office: office }) {
  const namedTemplate = newTemplate as templateNameT
  const name = namedTemplate.name
  if (name === 'Meditation'){
    return ( <Meditation office={office} />)
  } else {
    return ( <NewTemplate newTemplate={newTemplate} />)
  }
}

export function NewTemplate({ newTemplate}: { newTemplate: templateT }) {
  const namedTemplate = newTemplate as templateNameT
  const name = namedTemplate.name
  // console.log('Template.template: ', newTemplate, ', name: "', name, '"')
  if (name != null){
    // named component
    if (name === 'BibleQuote'){
      const templateParameters = namedTemplate.parameters as parameters
      return ( <BibleQuote reference={templateParameters.reference} version={templateParameters.version} />)
    } else if (name === 'BibleReference'){
      const templateParameters = namedTemplate.parameters as parameters
      return ( <BibleReference reference={templateParameters.reference} version={templateParameters.version} />)
    } else {
      // assume it is the name of another template
      const subtemplate = Api.getTemplate(name)
      return (
        <NewTemplate newTemplate={subtemplate} />
      )
    }
  } else {
    // assumed list of sub templates
    const taggedTemplate = newTemplate as templateTagT
    if (taggedTemplate.type === 'div'){
      return (
        <div className={taggedTemplate.className} >
          <NewTemplate newTemplate={taggedTemplate.children} />
        </div>
      )
    } else if (taggedTemplate.type === 'span'){
      return (
        <span className={taggedTemplate.className} >
          <NewTemplate newTemplate={taggedTemplate.children} />
        </span>
      )
    } else {
      const child = newTemplate as string
      return (
        <>
          {child}
        </>
      )
    }
  }
}

