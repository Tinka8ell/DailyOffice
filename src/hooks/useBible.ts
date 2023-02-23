import { useEffect, useState } from 'react'
import { Api } from '../services/Api'

export function useBible() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [verse, setVerse] = useState([]);

    function request(version: string, reference: string){
        useEffect(() => {
            Api.getBibleQuoteFromAWS(version, reference)
            .then(
            (result) => {
                setIsLoaded(true);
                setVerse(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            )
        }, [])
    }
    return [ { error, isLoaded, verse }, request ]
}
