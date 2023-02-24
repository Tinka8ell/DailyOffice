import { part } from "../common/Line";

// new templates
export type parameters = {
    [index: string]: string
}
export type template = {
    div?: true | false;
    span?: true | false;
    className?: string;
    text?: string;
    name?: string;
    items?: Array<template>;
    parameters?: parameters | part
}
type templates = {
    [index: string]: template
}
export const templates: templates = {
    "DailyOffice": { 
        "div": true,
        "className": "dailyOffice",
        "items": [
            {
                "div": true,
                "className": "h1",
                "text": "A test daily office"
            },
            {
                "name": "Meditation"
            },
            {
                "name": "Psalm 3:1-4"
            }
        ]
    },
    "meditation": {
        "div": true, 
        "className": "Meditation",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h3",
                    "text": "A generic meditation"
                }
            },
            {
                "name": "BibleQuote",
                "parameters": {
                    "version": "NLT",
                    "reference": "John 3:16"
                }
            },
            {
                "div": true, 
                "className": "Prayers",
                "items": [
                    {
                        "name": "Heading",
                        "parameters": {
                            "tag": "h3",
                            "text": "Prayer One"
                        }
                    },
                    {
                        "div": true, 
                        "className": "Paragraphs",
                        "items": [
                            {
                                "div": true,
                                "className": "p",
                                "items": [
                                    {
                                        "div": true,
                                        "className": "Line",
                                        "items": [
                                            {
                                                "text": "A line with an"
                                            },
                                            {
                                                "span": true,
                                                "className": "em",
                                                "text": " important "
                                            },
                                            {
                                                "text": "part"
                                            }
                                        ]
                                    },
                                    {
                                        "name": "LineBreak",
                                    },
                                    {
                                        "div": true,
                                        "className": "Line",
                                        "items": [
                                            {
                                                "text": "A second line with an"
                                            },
                                            {
                                                "span": true,
                                                "className": "em",
                                                "text": " important "
                                            },
                                            {
                                                "text": "part"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "MorningPrayers": { 
        "name": "DailyOffice"
    },
    "MiddayPrayers": { 
        "name": "DailyOffice"
    },
    "EveningPrayers": { 
        "name": "DailyOffice"
    },
    "MondayCompline": { 
        "name": "DailyOffice"
    },
    "TuesdayCompline": { 
        "name": "DailyOffice"
    },
    "WednesdayCompline": { 
        "name": "DailyOffice"
    },
    "ThurdayCompline": { 
        "name": "DailyOffice"
    },
    "FridayCompline": { 
        "name": "DailyOffice"
    },
    "SaturdayCompline": { 
        "name": "DailyOffice"
    },
    "SundayCompline": { 
        "name": "DailyOffice"
    },
    "Meditation-1": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 1"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-2": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 2"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-3": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 3"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-4": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 4"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-5": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 5"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-6": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 6"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-7": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 7"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-8": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 8"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-9": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 9"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-10": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 10"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-11": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 11"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-12": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 12"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-13": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 13"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-14": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 14"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-15": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 15"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-16": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 16"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-17": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 17"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-18": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 18"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-19": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 19"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-20": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 20"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-21": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 21"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-22": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 22"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-23": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 23"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-24": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 24"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-25": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 25"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-26": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 26"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-27": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 27"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-28": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 28"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-29": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 29"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-30": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 30"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-31": { 
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "Meditation for day 31"
                }
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Psalm 3:1-4": {
        "div": true,
        "className": "bibleQuote",
        "items": [
            {
                "name": "Heading",
                "parameters": {
                    "tag": "h2",
                    "text": "A sample bible quote"
                }
            },
            {
                "div": true,
                "className": "poetry?",
                "items": [
                    {
                        "div": true,
                        "items": [
                            {
                                "div": true,
                                "className": "p",
                                "items": [
                                    {
                                    "span": true,
                                    "className": "line",
                                    "items": [
                                        {
                                            "span": true,
                                            "text": "O "
                                        },
                                        {
                                            "span": true,
                                            "className": "lord",
                                            "text": " Lord"
                                        },
                                        {
                                            "span": true,
                                            "text": ", I have so many enemies;"
                                        }
                                    ]
                                    },
                                    {
                                        "name": "LineBreak",
                                    },
                                    {
                                    "span": true,
                                    "className": "line",
                                    "items": [
                                        {
                                            "span": true,
                                            "text": "so many are against me."
                                        }
                                    ]
                                    },
                                    {
                                        "name": "LineBreak",
                                    },
                                    {
                                    "span": true,
                                    "className": "line",
                                    "items": [
                                        {
                                            "span": true,
                                            "text": "So many are saying,"
                                        }
                                    ]
                                    },
                                    {
                                        "name": "LineBreak",
                                    },
                                    {
                                    "span": true,
                                    "className": "line",
                                    "items": [
                                        {
                                            "span": true,
                                            "text": "\"God will never rescue him!\""
                                        },
                                        {
                                            "span": true,
                                            "className": "selah",
                                            "text": " Interlude"
                                        }
                                    ]
                                    }
                                ]
                            },
                            {
                                "div": true,
                                "className": "p",
                                "items": [
                                    {
                                        "span": true,
                                        "className": "line",
                                        "items": [
                                            {
                                                "span": true,
                                                "text": "But you, O"
                                            },
                                            {
                                                "span": true,
                                                "className": "lord",
                                                "text": " Lord"
                                            },
                                            {
                                                "span": true,
                                                "text": ", are a shield around me;"
                                            }
                                        ]
                                    },
                                    {
                                        "name": "LineBreak",
                                    },
                                    {
                                        "span": true,
                                        "className": "line",
                                        "items": [
                                            {
                                                "span": true,
                                                "text": "you are my glory, the one who holds my head high."
                                            }
                                        ]
                                    },
                                    {
                                        "name": "LineBreak",
                                    },
                                    {
                                        "span": true,
                                        "className": "line",
                                        "items": [
                                            {
                                                "span": true,
                                                "text": "I cried out to the"
                                            },
                                            {
                                                "span": true,
                                                "className": "lord",
                                                "text": "Lord"
                                            },
                                            {
                                                "span": true,
                                                "text": ","
                                            }
                                        ]
                                    },
                                    {
                                        "name": "LineBreak",
                                    },
                                    {
                                        "span": true,
                                        "className": "line",
                                        "items": [
                                            {
                                                "span": true,
                                                "text": "and he answered me from his holy mountain."
                                            },
                                            {
                                                "span": true,
                                                "className": "selah",
                                                "text": " Interlude"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "BibleReference",
                "parameters": {
                    "version": "NLT",
                    "reference": "Psalm 3:1-4"
                }
            }
        ]
    }
     
}
