// new templates

import type { templateListT } from "./Template"

export const localTemplates: templateListT = {
    "daily-office": { 
        "type": "div",
        "className": "daily-office",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "A test daily office"
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
        "content": [
            {
                "type": "div",
                "className": "h3",
                "content": "A generic meditation"
            },
            {
                "name": "BibleQuote",
                "parameters": {
                    "version": "NLT",
                    "reference": "John 3:16"
                }
            },
            {
                "name": "BibleQuote",
                "parameters": {
                    "version": "NLT",
                    "reference": "John+3:16"
                }
            },
            {
                "name": "BibleQuote",
                "parameters": {
                    "version": "MLT",
                    "reference": "John 3:16"
                }
            },
            {
                "name": "BibleQuote",
                "parameters": {
                    "version": "NLT",
                    "reference": "Psalm 3:1-4"
                }
            },
            {
                "type": "div",
                "className": "Prayers",
                "content": [
                    {
                        "type": "div",
                        "className": "h3",
                        "content": "Prayer One"
                    },
                    {
                        "type": "div",
                        "className": "Paragraphs",
                        "content": [
                            {
                                "type": "div",
                                "className": "Paragraph",
                                "content": [
                                    {
                                        "type": "div",
                                        "className": "Line",
                                        "content": [
                                            "A line with an",
                                            {
                                                "type": "span",
                                                "className": "em",
                                                "content": " important "
                                            },
                                            "part"
                                        ]
                                    },
                                    {
                                        "type": "div",
                                        "className": "Line",
                                        "content": [
                                            "A second line with an",
                                            {
                                                "type": "span",
                                                "className": "em",
                                                "content": " important "
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
        "name": "daily-office"
    },
    "MiddayPrayers": { 
        "name": "daily-office"
    },
    "EveningPrayers": { 
        "name": "daily-office"
    },
    "MondayCompline": { 
        "name": "daily-office"
    },
    "TuesdayCompline": { 
        "name": "daily-office"
    },
    "WednesdayCompline": { 
        "name": "daily-office"
    },
    "ThursdayCompline": { 
        "name": "daily-office"
    },
    "FridayCompline": { 
        "name": "daily-office"
    },
    "SaturdayCompline": { 
        "name": "daily-office"
    },
    "SundayCompline": { 
        "name": "daily-office"
    },
    "Meditation-1": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 1"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-2": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 2"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-3": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 3"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-4": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 4"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-5": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 5"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-6": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 6"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-7": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 7"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-8": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 8"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-9": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 9"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-10": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 10"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-11": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 11"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-12": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 12"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-13": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 13"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-14": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 14"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-15": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 15"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-16": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 16"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-17": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 17"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-18": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 18"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-19": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 19"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-20": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 20"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-21": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 21"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-22": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 22"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-23": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 23"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-24": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 24"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-25": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 25"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-26": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 26"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-27": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 27"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-28": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 28"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-29": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 29"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-30": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 30"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Meditation-31": { 
        "type": "div",
        "className": "meditation",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "Meditation for day 31"
            },
            {
                "name": "meditation",
            }
        ]
    },
    "Psalm 3:1-4": {
        "type": "div",
        "className": "bibleQuote",
        "content": [
            {
                "type": "div",
                "className": "h2",
                "content": "A sample bible quote"
            },
            {
                "type": "div",
                "className": "paragraphs",
                "content": [
                  "\"For this is how God loved the world: He gave his one and only ",
                  {
                   "className": "em",
                   "content": "Son",
                   "type": "span"
                  },
                  ", so that everyone who believes in him will not perish but have eternal life.",
                  {
                    "name": "BibleReference",
                    "parameters": {
                        "reference": "John 3:16",
                        "version": "NLT"
                            }
                        }
                ],
               },
                {
                    "type": "div",
                    "className": "h2",
                    "content": "A longer bible quote"
                },
                {
                    "type": "div",
                "className": "Poetry",
                "content": [
                    {
                        "type": "div",
                        "className": "Paragraphs",
                        "content": [
                            {
                                "type": "div",
                                "className": "Paragraph",
                                "content": [
                                    {
                                        "type": "div",
                                        "className": "Line",
                                        "content": [
                                            "O ",
                                            {
                                                "type": "span",
                                                "className": "Lord",
                                                "content": " Lord"
                                            },
                                            ", I have so many enemies;"
                                        ]
                                    },
                                    {
                                        "type": "div",
                                        "className": "Line",
                                        "content": [
                                            "so many are against me.",
                                        ]
                                    },
                                    {
                                        "type": "div",
                                        "className": "Line",
                                        "content": "So many are saying,"
                                    },
                                    {
                                        "type": "div",
                                        "className": "Line",
                                        "content": [
                                            "\"God will never rescue him!\"",
                                            {
                                                "type": "span",
                                                "className": "Selah",
                                                "content": " Interlude"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "div",
                                "className": "Paragraph",
                                "content": [
                                    {
                                        "type": "div",
                                        "className": "Line",
                                        "content": [
                                            "But you, O",
                                            {
                                                "type": "span",
                                                "className": "Lord",
                                                "content": " Lord"
                                            },
                                            ", are a shield around me;"
                                        ]
                                    },
                                    {
                                        "type": "div",
                                        "className": "Line",
                                        "content": "you are my glory, the one who holds my head high."
                                    },
                                    {
                                        "type": "div",
                                        "className": "Line",
                                        "content": [
                                            "I cried out to the",
                                            {
                                                "type": "span",
                                                "className": "Lord",
                                                "content": " Lord"
                                            },
                                            ","
                                        ]
                                    },
                                    {
                                        "type": "div",
                                        "className": "Line",
                                        "content": [
                                            "and he answered me from his holy mountain.",
                                            {
                                                "type": "span",
                                                "className": "Selah",
                                                "content": " Interlude"
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
