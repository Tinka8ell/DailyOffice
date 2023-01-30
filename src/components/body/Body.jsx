import { Api } from '../../services/Api'

export function Body({ office, updateOffice}) {
  console.log('Body, office: ')
  console.log({ ... office })
  const body = Api.getBody(office)
  console.log('Body, body: ')
  console.log({ ... body })
  let template = []
  if (body.type === 'template'){
    console.log('getting tempolate')
    template = Api.getTemplate(body.template)
  }
  console.log('template size: ' + template.length)
  template.forEach(element => {
    console.log('Element name: ' + element.name)
  })

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
        <p>
          Template contains: 
            { template.map(element => (
              <div>
                Element name: {element.name}
                <br />
              </div>
            ))}
        </p>
    </div>
  )
}
