import { Heading } from './Heading'
import { BibleQuote, BibleReference } from './BibleQuote'
import { LineBreak } from './LineBreak'
import { Meditation } from '../meditation/Meditation'
import { newTemplates } from '../../services/DailyOfficeTemplates'

function content (template, office){
  console.log("content of:", template)
  if (template.text != null){
    return template.text
  } else if (template.items != null){
    console.log("a list:", [ ...template.items ])
    return template.items.map((item, index) =>
      <Template key={index} template={item} office={office} />
    )
  } else {
    return (
      <Heading tag="h3" >
        Template missing content
      </Heading>
    )
  }
}

export function Template({ template, office }) {
  if (template.name != null){
    // named component
    console.log("Template name:", template.name, ", parameters: ", template.parameters)
    if (template.name === 'Heading'){
      return ( <Heading template={ { ...template.parameters } } />)
    } else if (template.name === 'BibleQuote'){
      return ( <BibleQuote reference={template.parameters.reference} version={template.parameters.version} />)
    } else if (template.name === 'BibleReference'){
      return ( <BibleReference reference={template.parameters.reference} version={template.parameters.version} />)
    } else if (template.name === 'Meditation'){
      return ( <Meditation office={office} />)
    } else if (template.name === 'LineBreak'){
      return ( <LineBreak />)
    } else {
      // assume it is the name of another template
      const subtemplate = newTemplates[template.name]
      console.log("Processing subtemplate: ", template.name, ", as: ", subtemplate)
      return (
        <Template template={subtemplate} office={office} />
      )
    }
  } else {
    // assumed list of sub templates
    console.log("Template:", template)
    if (template.div){
      return (
        <div className={template.className} >
          {content(template, office)}
        </div>
      )
    } else if (template.span){
      return (
        <span className={template.className} >
          {content(template)}
        </span>
      )
    } else {
      return (
        <>
          {content(template)}
        </>
      )
    }
  }
}
