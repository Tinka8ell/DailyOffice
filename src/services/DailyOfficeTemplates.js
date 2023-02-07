// for now we will use a common set so we always have the same one!
/*
        <Part type="h2">
          Temporarily do a verse:
        </Part>
        <BibleQuote version="NLT" reference="John 3:16-17" />
        <Part type="h2">
        And another:
        </Part>
        <BibleQuote version="NLT" reference="John 3:16" />

*/
const basic = [
    { 
        "key": "1", 
        "type": "Heading",
        "tag": "h2",
        "text": "Temporarily do a verse:"
    },
    { 
        "key": "2", 
        "type": "BibleQuote",
        "version": "NLT", 
        "reference": "John 3:16-17"
    },
    { 
        "key": "3", 
        "type": "Heading",
        "tag": "h2",
        "text": "And another:"
    },
    { 
        "key": "4", 
        "type": "BibleQuote",
        "version": "NLT", 
        "reference": "John 3:16"
    },
    { 
        "key": "5", 
        "type": "Heading",
        "tag": "h3",
        "text": "This is a level 3 heading"
    },
    { 
        "key": "6", 
        "type": "Heading",
        "tag": "h4",
        "text": "This is a level 4 heading"
    },
    { 
        "key": "7", 
        "type": "Heading",
        "tag": "h5",
        "text": "This is a level 5 heading"
    }
]

const embedded = [
    {
        "key": 1,
        "type": "Heading",
        "tag": "h3",
        "text": "An embeded template"
    },
    {
        "key": 2,
        "type": "Part",
        "text": "An embeded part, an"
    },
    {
        "key": 2,
        "type": "Part",
        "tag": "em",
        "text": "important"
    },
    {
        "key": 2,
        "type": "Part",
        "text": "part"
    }
]

export const templates = {
    "Embedded": {
        "key": "0", 
        "type": "template",
        "name": "Embedded",
        "template": embedded,
    },
    "MorningPrayers": { 
        "key": "1", 
        "type": "template",
        "name": "MorningPrayers",
        "template": "Embedded",
    },
    "MiddayPrayers": { 
        "key": "2", 
        "type": "template",
        "name": "MiddayPrayers",
        "template": "Embedded",
    },
    "EveningPrayers": { 
        "key": "3", 
        "type": "template",
        "name": "EveningPrayers",
        "template": basic,
    },
    "MondayCompline": { 
        "key": "4", 
        "type": "template",
        "name": "MondayCompline",
        "template": basic,
    },
    "TuesdayCompline": { 
        "key": "5", 
        "type": "template",
        "name": "TuesdayCompline",
        "template": basic,
    },
    "WednesdayCompline": { 
        "key": "6", 
        "type": "template",
        "name": "WednesdayCompline",
        "template": basic,
    },
    "ThurdayCompline": { 
        "key": "7", 
        "type": "template",
        "name": "ThurdayCompline",
        "template": basic,
    },
    "FridayCompline": { 
        "key": "8", 
        "type": "template",
        "name": "FridayCompline",
        "template": basic,
    },
    "SaturdayCompline": { 
        "key": "9", 
        "type": "template",
        "name": "SaturdayCompline",
        "template": basic,
    },
    "SundayCompline": { 
        "key": "10", 
        "type": "template",
        "name": "SundayCompline",
        "template": basic,
    }
}
