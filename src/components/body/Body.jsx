import { useEffect, useState } from 'react'
import { Api } from '../../services/Api'
import { apiConfig } from '../../services/apiConfig'
/*
import { Sections } from '../sections/Sections'
*/
import { BibleQuote } from '../common/BibleQuote'

const AWS_URL = apiConfig.AWS_URI

function MyComponent({ version, reference }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [verse, setVerse] = useState([]);

  useEffect(() => {
    fetch(`${AWS_URL}/quote/${version}/${reference}`)
      .then(res => {
          return res.json()
        })
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

  if (error) {
    return <div>MyComponent - Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>MyComponent - Loading...</div>;
  } else {
    return (
      <BibleQuote verse={verse} />
    );
  }
}

export function Body({ office}) {
  /*
  const body = Api.getBody(office)
  let template = []
  if (body.type === 'template'){
    template = Api.getTemplate(body.template)
  }

  return (
    <div className="Body">
        <h2>
          Body template:
        </h2>
        <p>
          Name: {office.name}
        </p>
        <p>
          type: {body.type}
        </p>
        <p>
          Template: {body.template}
        </p>
        <Sections key={body.template} template={template} />
    </div>
  )
  */

  return (
    <div className="Body">
        <h2>
          Temporarily do a verse:
        </h2>
        <BibleQuote version="NLT" reference="John 3:16-17" />
        <h2>
          And another:
        </h2>
        <BibleQuote version="MLT" reference="John 3:16" />
    </div>
  )
}
