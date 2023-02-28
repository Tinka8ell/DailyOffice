// new templates

import type { templateListT } from "./Template"

export const localTemplates: templateListT = {
    "DailyOffice": { 
        "type": "div",
        "className": "dailyOffice",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "A test daily office"
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
        "type": "div",
        "className": "Meditation",
        "children": [
            {
                "type": "div",
                "className": "h3",
                "children": "A generic meditation"
            },
            {
                "name": "BibleQuote",
                "parameters": {
                    "version": "NLT",
                    "reference": "John 3:16"
                }
            },
            {
                "type": "div",
                "className": "Prayers",
                "children": [
                    {
                        "type": "div",
                        "className": "h3",
                        "children": "Prayer One"
                    },
                    {
                        "type": "div",
                        "className": "Paragraphs",
                        "children": [
                            {
                                "type": "div",
                                "className": "Paragraph",
                                "children": [
                                    {
                                        "type": "div",
                                        "className": "Line",
                                        "children": [
                                            "A line with an",
                                            {
                                                "type": "span",
                                                "className": "em",
                                                "children": " important "
                                            },
                                            "part"
                                        ]
                                    },
                                    {
                                        "type": "div",
                                        "className": "Line",
                                        "children": [
                                            "A second line with an",
                                            {
                                                "type": "span",
                                                "className": "em",
                                                "children": " important "
                                            },
                                            "part"
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
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 1"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-2": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 2"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-3": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 3"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-4": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 4"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-5": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 5"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-6": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 6"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-7": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 7"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-8": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 8"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-9": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 9"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-10": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 10"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-11": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 11"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-12": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 12"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-13": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 13"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-14": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 14"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-15": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 15"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-16": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 16"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-17": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 17"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-18": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 18"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-19": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 19"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-20": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 20"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-21": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 21"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-22": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 22"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-23": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 23"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-24": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 24"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-25": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 25"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-26": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 26"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-27": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 27"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-28": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 28"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-29": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 29"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-30": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 30"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-31": { 
        "type": "div",
        "className": "meditation",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "Meditation for day 31"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Psalm 3:1-4": {
        "type": "div",
        "className": "bibleQuote",
        "children": [
            {
                "type": "div",
                "className": "h2",
                "children": "A sample bible quote"
            },
            {
                "type": "div",
                "className": "poetry?",
                "children": [
                    {
                        "type": "div",
                        "className": "Paragraphs",
                        "children": [
                            {
                                "type": "div",
                                "className": "Paragraph",
                                "children": [
                                    {
                                        "type": "div",
                                        "className": "Line",
                                        "children": [
                                            "O ",
                                            {
                                                "type": "span",
                                                "className": "lord",
                                                "children": " Lord"
                                            },
                                            ", I have so many enemies;"
                                        ]
                                    },
                                    {
                                        "type": "div",
                                        "className": "Line",
                                        "children": [
                                            "so many are against me.",
                                        ]
                                    },
                                    {
                                        "type": "div",
                                        "className": "Line",
                                        "children": "So many are saying,"
                                    },
                                    {
                                        "type": "div",
                                        "className": "Line",
                                        "children": "\"God will never rescue him!\""
                                    },
                                    {
                                        "type": "div",
                                        "className": "selah",
                                        "children": " Interlude"
                                    }
                                ]
                            },
                            {
                                "type": "div",
                                "className": "Paragraph",
                                "children": [
                                    {
                                        "type": "div",
                                        "className": "line",
                                        "children": [
                                            "But you, O",
                                            {
                                                "type": "span",
                                                "className": "lord",
                                                "children": " Lord"
                                            },
                                            ", are a shield around me;"
                                        ]
                                    },
                                    {
                                        "type": "div",
                                        "className": "line",
                                        "children": "you are my glory, the one who holds my head high."
                                    },
                                    {
                                        "type": "div",
                                        "className": "line",
                                        "children": [
                                            "I cried out to the",
                                            {
                                                "type": "span",
                                                "className": "lord",
                                                "children": " Lord"
                                            },
                                            ","
                                        ]
                                    },
                                    {
                                        "type": "div",
                                        "className": "Line",
                                        "children": "and he answered me from his holy mountain."
                                    },
                                    {
                                        "type": "div",
                                        "className": "selah",
                                        "children": " Interlude"
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
