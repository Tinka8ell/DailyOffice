# DailyOffice
Responsive Daily Office Single Page App

## Day (app?)

Each day we have one of four offices:
* Morning (4 am - 11 am)
* Midday (11 am - 5 pm)
* Evening  (5 pm - 8 pm)
* {Day Name} Compline (8 pm - 4 am)

## Office

Each office is made up of:

1. Header
1. Body
1. Footer

## Header 

The header contains: 

* Title
* Navigator 

## Title

Is basically a Heading (level 1) consisting of:
1. Name (Of the Office)
1. Day (of the week from date)

## Navigator 

Is a section of buttons and fields:

1. Date Picker
1. Office Selection:
   1. Previous office button
      * decrements to Office (- 1)
      * If (Office < Morning (0))
        * decrements the Date (- 1)
        * set Office = Compline (Offices - 1)
   1. Current Office Name
   1. Next office button
      * increments Office (+ 1)
      * If (Office > Compline (Offices - 1))
         * increments Date (+ 1)
         * set Office = Morning (0)

## Body

Contains an array of sections.  Sections - one of:

* Heading (size 2+)
* Paragraph
* Bible reading 
* Meditation
* Extended Bible Reading 
* OMS Prayers 
* World Watch List

## Heading 

A simple <h{size}> wrapper of:

  * Text 

## Paragraph

Yet to be formalised, but something like and array of Lines seperated by <br/> separators.

## Lines

Made up of parts that are either:

* Text
* Emphasised text

## Bible reading (version, reference)

Made up of:

1. Paragraphs
1. VerseReference
   1. Reference field / text
   1. Version field / text
   1. Change / Update button

## Meditation

One or more Prayers:

1. Title (heading 3 optional)
1. Paragraphs (1 or more)
1. Author (emphasised right aligned)

## Extended Bible Reading (either Daily or Yearly) (based on date)

Consists of:

1. Link (to sub-page?)
   * Text
   * URL
1. Bible Readings (expandable list)
   * Reference
     1. Reference button (toggle on / off reading:)
     2. Bible reading (toggled on or off)

## OMS Prayers 

Based on date?  Basically just a Link.

## World Watch List 

Based on day of year converted to top 50 and contains:

* Link (country and number)
* Extracted Prayer (Paragraph)

## Footer

The footer contains: 

* Navigator (repeat of the header)
