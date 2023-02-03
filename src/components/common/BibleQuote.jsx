import { useBible } from '../../hooks/useBible'
import { ParagraphList } from './ParagraphList'

export function BibleQuote({ version, reference }) {
    const [ response, request ] = useBible()
    const { error, isLoaded, verse } = response
    request(version, reference)
    if (error) {
        return (
            <div>
                useBible({version}, {reference}) - Error: {error.message}
            </div>
        )
    } else if (!isLoaded) {
        return (
            <div>
                MyComponent - Loading...
            </div>
        )
    } else if (verse.paragraph == null) {
        return (
          <NotFound version={version} reference={reference} />
        )
    } else {
        return (
          <Quote verse={verse} />
        )
    }
}

function NotFound({ version, reference }) {
    return (
        <h1> Not found the quote: {reference} [ {version} ] </h1>
    )
}

function Quote({ verse }) {
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
