import { apiConfig } from './apiConfig';

// temporarily use local data:
import { templates} from '../components/template/LocalTemplates'
import type { template} from '../components/template/LocalTemplates'



/**
 * For this simple use case, 'fetch' is good enough. For a more complex application consider
 * using a library for Rest calls such as https://github.com/sindresorhus/ky
 */
export class Api {
    static url = apiConfig.AWS_URI;

    static async getBibleQuoteAsHtml(version: string, search: string) {
        const uri = apiConfig.BIBLE_URI
        const query = {search, version}
        const searchParams = new URLSearchParams(query)
        const biblePassage = `${apiConfig.BIBLE_PASSAGE}${searchParams.toString()}`

        const res = await fetch(biblePassage);
        const text = await res.text();
        return text;
    }

    static async getBibleQuoteFromAWS(version: string, reference: string) {
        const url = `${this.url}/quote/${version}/${reference}`;
        const res = await fetch(url);
        const json = await res.json();
        return json
    }

    static getTemplate(name: string): template {
        return templates[name]
    }

}
