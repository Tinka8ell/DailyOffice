import { Part } from './Part'
import type { part } from './Line'

export function Heading({ template }: { template: part}) {
    return (
        <Part tag={template.tag} >
            { template.text}
        </Part>
    )
}