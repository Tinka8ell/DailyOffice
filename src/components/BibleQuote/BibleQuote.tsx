// import { useBibleGateway } from '../../hooks/useBibleGateway'
import type { templateT, templateTagT } from '../template/Template'
import { Template } from '../template/Template'
import { defaultOffice } from '../../hooks/useOffice'
import './BibleQuote.css'
import { useQuery } from 'react-query'
import { Api } from '../../services/Api'

export type part = { tag?: string; text: string}
export type line = { parts: Array<part> }
export type paragraph = { lines: Array<line> }
export type paragraphList = Array<paragraph>
export type verse = verseNew | verseOld
export type verseOld = { 
    reference: string; 
    version: string;
    paragraph: Array<paragraph>; 
}
export type verseNew = { 
    reference: string; 
    version: string;
    paragraphs: templateT; 
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
    const result = useQuery([ 'BibleQuote', version, reference ], Api.fetchFromAWS)
    if (result.isError) {
        return (
            <div>
                {`BibleQuote(${version}, ${reference}) - Error: ${result.error}`}
            </div>
        )
    } else if (result.isLoading) {
        return (
            <div>
                Getting from AWS ...
            </div>
        )
    } else {
        const verse = result.data as verse 
        // console.log('verse:', verse)
        if (verse.reference == null || verse.version == null) {
        // return (
        //     <NotFoundOnAWS version={version} reference={reference} />
        // )
            return (
                <NotFound version={version} reference={reference} />
            )
        } else {
            // console.log('verse.reference:', verse.reference)
            // console.log('verse.version:', verse.version)
            return (<Quote verse={verse} />)
        }
    }
}

export function BibleReference({ version, reference }: 
    { version: string, reference: string }) {
    // console.log('BibleReference: version:', version, ", reference:", reference)
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
    // console.log('Quote: verse:', verse)
    const isOld = Object.keys(verse).includes('paragraph')
    const template: templateT = isOld? 
        paragraphListToTemplate ((verse as verseOld).paragraph, 'BibleText'):
        (verse as verseNew).paragraphs
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
