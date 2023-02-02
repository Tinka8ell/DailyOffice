import { apiConfig } from './apiConfig';

/**
 * For this simple use case, 'fetch' is good enough. For a more complex application consider
 * using a library for Rest calls such as https://github.com/sindresorhus/ky
 */
export class Api {
  static url = apiConfig.AWS_URI;

  static async getBibleQuote(version, reference) {
    console.log(`API.getBibleQuote(${version}, ${reference})`)
    const response = await fetch(`${this.url}/quote/${version}/${reference}`)
    console.log('API.getBibleQuote returned with:')
    console.log({ ... response })
    const json = await response.json();
    console.log('API.getBibleQuote after processing JSON:')
    console.log({ ... response })
    return json;
  }

}
