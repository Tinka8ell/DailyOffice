import { apiConfig } from './apiConfig';

/**
 * For this simple use case, 'fetch' is good enough. For a more complex application consider
 * using a library for Rest calls such as https://github.com/sindresorhus/ky
 */
export class Api {
    static url = apiConfig.AWS_URI;

    static getBibleQuoteAsHtml(version, search) {
        const uri = apiConfig.BIBLE_URI
        const query = {search, version}
        const searchParams = new URLSearchParams(query)
        const biblegateway = `${apiConfig.BIBLE_URI}?${searchParams.toString()}`

        return fetch(biblegateway, { 
            headers: {
                'Content-Type': 'text/plain',
            },
        })
            .then(res => res.text())
    }

    static getBibleQuoteFromAWS(version, reference) {
        return fetch(`${this.url}/quote/${version}/${reference}`)
            .then(res => res.json())
    }

}
