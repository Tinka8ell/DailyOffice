export function Heading({ template}) {
    if (template.type === "heading"){
        if (template.tag === 'h1'){
            return (
                <h1 key={template.key}>
                    { template.text}
                </h1>
            )
        } else if (template.tag === 'h2'){
            return (
                <h2 key={template.key}>
                    { template.text}
                </h2>
            )
        } else if (template.tag === 'h3'){
            return (
                <h3 key={template.key}>
                    { template.text}
                </h3>
            )
        } else {
            return (
                <h4 key={template.key}>
                    { template.text}
                </h4>
            )
        }
    }
}