import { useBible } from '../../hooks/useBible'
// import { useBibleGateway } from '../../hooks/useBibleGateway'
import { Template, templateT, templateTagT } from '../template/Template'
import { defaultOffice } from '../../hooks/useOffice'
import './common.css'

export type part = { tag?: string; text: string}
export type line = { parts: Array<part> }
export type paragraph = { lines: Array<line> }
export type paragraphList = Array<paragraph>
export type verse = { 
    reference: string; 
    version: string;
    paragraph: Array<paragraph>; 
}

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

function lineToTemplate (line: line): templateT{
  const parts = line.parts
  const content: Array<templateT> = parts.map((part) => partToTemplate(part))
  const template: templateT = {
    type: 'div',
    className: 'Line',
    content
  }
  return template
}

function paragraphToTemplate (paragraph: paragraph): templateT{
  const lines = paragraph.lines
  const content: templateT = lines.map((line) => lineToTemplate(line))
  const template: templateTagT = {
    type: 'div',
    className: 'Paragraph',
    content
  }
  return template
}

function paragraphListToTemplate (paragraphs: paragraphList, className?: string): templateT{
  const classname = className ? className : 'ParagraphText'
  const content: templateT = paragraphs.map((paragraph) => paragraphToTemplate(paragraph))
  const tempate: templateTagT = {
    type: 'div',
    className: classname,
    content
  }
  return (tempate)
}

export function BibleQuote({ version, reference }: { version: string, reference: string }) {
    const [ response, request ] = useBible()
    const { error, isLoaded, verse } = response
    request(version, reference)
    if (error) {
        return (
            <div>
                BibleQuote({version}, {reference}) - Error: {error.message}
            </div>
        )
    } else if (!isLoaded) {
        return (
            <div>
                Getting from AWS ...
            </div>
        )
    } else {
        if (verse.paragraph == null) {
        // return (
        //     <NotFoundOnAWS version={version} reference={reference} />
        // )
            return (
                <NotFound version={version} reference={reference} />
            )
        } else {
            return (
            <Quote verse={verse} />
            )
        }
    }
}

export function BibleReference({ version, reference }: 
    { version: string, reference: string }) {
    const content = [ reference ]
    if (version != null) {
        content[1] = ' (' + version + ') '
    }
    return (
        <Template 
        newTemplate={{
            type: 'div',
            className: 'BibleReference',
            content
        }}
        office={defaultOffice}
        />
    )
}
/*
function NotFoundOnAWS({ version, reference }: { version: string, reference: string }) {
  const [ response, request ] = useBibleGateway()
  const { error, isLoaded, doc } = response
  request(version, reference)
  if (error) {
      return (
          <div>
              NotFoundOnAWS({version}, {reference}) - Error: {error.message}
          </div>
      )
  } else if (!isLoaded) {
      return (
          <div>
              Getting from Bible Gateway ...
          </div>
      )
  } else if (verse.paragraph == null) {
      return (
        <NotFound version={version} reference={reference} />
      )
  } else {
      return (
        <>
            {doc}
        </>
      )
  }
}
*/
function NotFound({ version, reference }: { version: string, reference: string }) {
    return (
        <h1> Not found the quote: {reference} [ {version} ] </h1>
    )
}

function Quote({ verse }: { verse: verse }) {
    const template: templateT = paragraphListToTemplate (verse.paragraph, 'BibleText')
    const reference = [
        verse.reference
    ]
    if (verse.version) reference[1] = ' (' + verse.version + ') '
    const content: templateT = [
        template,
        {
            type: 'div',
            className: 'BibleReference',
            content: reference
        }
    ]
    const quote: templateTagT = {
        type: 'div',
        className: 'BibleQuote',
        content
    }
    return (<Template newTemplate={quote} office={defaultOffice} />)
}
