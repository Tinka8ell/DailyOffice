import { useEffect, useState } from 'react'
import { Api } from '../services/api'

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
                // You can now even select part of that html as you would in the regular DOM 
                // Example:
                // var docArticle = doc.querySelector('article').innerHTML;
                setDoc(doc);
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
