import { useEffect, useState } from 'react'
import { verse } from '../components/common/BibleQuote';
import { Api } from '../services/Api'

type message = null | { message: string }

const noVerse: verse = {
    reference: '',
    version: '',
    paragraph: []
}

export function useBible(): 
[ 
    { 
        error: message;
        isLoaded: boolean;
        verse: verse 
    }, 
    (version: string, reference: string) => void 
]{
    const [error, setError] = useState<message>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [verse, setVerse] = useState<verse>(noVerse);

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
