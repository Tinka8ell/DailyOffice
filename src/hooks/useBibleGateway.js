import { useEffect, useState } from 'react'
import { Api } from '..'

export function useBibleGateway() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [doc, setDoc] = useState([]);

    function request(version, reference){
        useEffect(() => {
            Api.getBibleQuoteAsHtml(version, reference)
            .then(
            (result) => {
                setIsLoaded(true);
                const domParser = new DOMParser()
                const doc = domParser.parseFromString(result, "text/html")
                const main = doc.querySelector('div[role=main]').innerHTML
                setDoc(main);
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
