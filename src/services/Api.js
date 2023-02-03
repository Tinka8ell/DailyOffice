import { apiConfig } from './apiConfig';

/**
 * For this simple use case, 'fetch' is good enough. For a more complex application consider
 * using a library for Rest calls such as https://github.com/sindresorhus/ky
 */
export class Api {
  static url = apiConfig.AWS_URI;

  static getBibleQuoteFromAWS(version, reference) {
    return fetch(`${this.url}/quote/${version}/${reference}`)
        .then(res => res.json())
  }

}
