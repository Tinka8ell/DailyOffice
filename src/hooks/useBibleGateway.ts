import { useEffect, useState } from 'react'
import { Api } from '../services/Api'

export function useBibleGateway() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [doc, setDoc] = useState('');

    function request(version: string, reference: string){
        useEffect(() => {
            Api.getBibleQuoteAsHtml(version, reference)
            .then(
            (result) => {
                setIsLoaded(true);
                const domParser = new DOMParser()
                const doc = domParser.parseFromString(result, "text/html")
                const main = doc.querySelector('div[role=main]')
                if (main != null){
                    setDoc(main.innerHTML);
                }
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
                }
            )
        }, [])
    }
    return [ { error, isLoaded, doc }, request ]
}
