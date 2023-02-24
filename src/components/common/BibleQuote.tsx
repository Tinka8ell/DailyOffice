import { useBible, verse } from '../../hooks/useBible'
// import { useBibleGateway } from '../../hooks/useBibleGateway'
import { ParagraphList } from './ParagraphList'
import type { paragraph } from './ParagraphList'

export type paragraphList = Array<paragraph>

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

export function BibleReference({ version, reference }: { version: string, reference: string }) {
    return (
        <div className='BibleReference'>
            { reference } 
            { version != null && ' (' + version + ') ' }
        </div>
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
    return (
        <div className="BibleQuote">
            <ParagraphList className='BibleText' paragraphs={verse.paragraph} />
            <div className='BibleReference'>
                { verse.reference } 
                { verse.version != null && ' (' + verse.version + ') ' }
            </div>
          </div>
    )
}
