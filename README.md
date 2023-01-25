# DailyOffice
Responsive Daily Office Single Page App

## Day

Each day we have four offices:
* Morning Prayer
* Midday Prayer
* Evening Prayer
* Compline

## Office

Each office is made up of:
* Header
  * Title
    * Heading (1) consisting of:
      * Name (Office)
      * Day 
  * Navigator 
    * Previous day button
      * Date - 1
    * Previous office button
      * Office - 1
      * If (office < Morning (0))
        * Date - 1
        * Office = Compline (Offices - 1)
    * Specific
      * Input field:
        * Date
        * Time
          * Morning (4 am - 11 am)
            * Midday (11 am - 5 pm)
            * Evening  (5 pm - 8 pm)
            * Compline (8 pm - 4 am)
        * Update button
      * Now button (if date / time not now)
    * Next office button
      * Office + 1
      * If (office > Compline (Offices - 1))
        * Date + 1
        * Office = Morning (0)
    * Next day button
      * Date + 1
* Body
  * Sections - one of:
    * Heading (size 2+)
      * Text 
    * Paragraph
      * Lines
        * Parts
          * Text
          * Emphasised text
    * Bible reading (version, reference)
      * Paragraphs
      * Verse 
        * Reference field
        * Version field
        * Update button
    * Meditation
      * Prayers
        * Title (heading 3)
        * Paragraphs
        * Author (emphasised right aligned)
    * Extended Bible Reading (either Daily or Yearly) (based on date)
      * Link
        * Text
        * URL
      * Bible Readings (expandable list)
        * Reference
          * Reference button (toggle)
          * Bible reading (toggled)
    * OMS Prayers (based on date?)
      * Link
    * World Watch List (based on day of year converted to top 50)
      * Link
      * Extracted Prayer
* Footer
  * Navigator 
