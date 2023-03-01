import { defaultOffice, office } from '../../hooks/useOffice';
import { Template, templateT, templateTagT } from '../template/Template';
import './common.css'

export function Part({ tag, children }: {tag?: string; children: React.ReactNode}) {
if (tag == null){
    return (<> { children } </>)
  } else {
    const template: templateTagT = {
      type: 'span',
      className: tag,
      content: children as templateT
    }
    if (tag[0] === 'h'){
      template.type = 'div'
    }
    return (<Template newTemplate={template} office={defaultOffice} />)
  }
} 
