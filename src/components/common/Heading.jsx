import { Part } from '../common/Part'

export function Heading({ template }) {
    return (
        <Part type={template.tag} >
            { template.text}
        </Part>
    )
}