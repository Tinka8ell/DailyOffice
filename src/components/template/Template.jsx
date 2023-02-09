import { Heading } from '../common/Heading'
import { BibleQuote, BibleReference } from '../common/BibleQuote'
import { LineBreak } from '../common/LineBreak'
import { Meditation } from '../meditation/Meditation'
import { Api } from '../../services/Api'

function content (template, office){
  if (template.text != null){
    return template.text
  } else if (template.items != null){
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
      const subtemplate = Api.getTemplate(template.name)
      return (
        <Template template={subtemplate} office={office} />
      )
    }
  } else {
    // assumed list of sub templates
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
