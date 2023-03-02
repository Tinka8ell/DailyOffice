import { apiConfig } from './apiConfig';

// temporarily use local data:
import { localTemplates } from '../components/template/LocalTemplates'
import type { templateT } from '../components/template/Template'

/**
 * For this simple use case, 'fetch' is good enough. For a more complex application consider
 * using a library for Rest calls such as https://github.com/sindresorhus/ky
 */
export class Api {
    static urlAWS = apiConfig.AWS_LAMBDA_URI;
    static urlGateway = apiConfig.AWS_URI;

    static async getBibleQuoteAsHtml(version: string, search: string) {
        const uri = apiConfig.BIBLE_URI
        const query = {search, version}
        const searchParams = new URLSearchParams(query)
        const biblePassage = `${apiConfig.BIBLE_PASSAGE}${searchParams.toString()}`

        const res = await fetch(biblePassage);
        const text = await res.text();
        return text;
    }

    static async fetchFromAWS({ queryKey }:{ queryKey: Array<string> }) {
        // console.log('fetchFromAWS with:', queryKey)
        const [ action, version, reference] = queryKey
        if (action !== 'BibleQuote') {
            throw new Error('Unexpected action for "fetchFromAWS": ' + action)
        }
        // const url = `${this.urlAWS}/quote/${version}/${reference}`;
        const url = `${apiConfig.AWS_LAMBDA_URI}/quote/${version}/${reference}`;
        // console.log('fetchFromAWS using:', url)
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const body = response.body
        // console.log('fetchFromAWS returns:', body)
        const json = await response.json()
        return json
    }

    static async getBibleQuoteFromAWSGateway(version: string, reference: string) {
        const url = `${this.urlGateway}/quote/${version}/${reference}`;
        const res = await fetch(url);
        const json = await res.json();
        return json
    }

    static async getBibleQuoteFromAWS(version: string, reference: string) {
        const url = `${this.urlAWS}/quote/${version}/${reference}`;
        const res = await fetch(url);
        const json = await res.json();
        return json
    }

    static getTemplate(name: string): templateT {
        return localTemplates[name]
    }

}
