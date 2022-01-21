# Savage Bingo
Add some variety to your Savage World combat with a Bingo meta game.  If your combat encounters are routinely just Fighting and Spellcasting rolls, use Savage Bingo to suggest alternative game mechanics you may not have considered.  Each bingo card has 24 rules on it with 1 free square at the center.  When you have used a mechanic, or somehow been a part of such mechanic, click on the square to mark it.  If you are a GM and one of your players gets a bingo (filling a row, column, or diagonal), award them with an extra benny or two or something else.  Likely there will be some squares where the criterion for whether it can be marked or not needs some interpretation by player and GM.

## Operation
On first load, a random bingo card (set of 25 squares) will be generated from a longer list of possible squares.  On each subsequent reload of the page, the previous card will be reloaded (*though currently the marked status of squares is not kept*). 

Click **New** to generate a new set of 25 squares.

**Reset** will clear the marks on all cards.

Clicking a card will mark it, and reveal some flavor text.  Cards can be unmarked as well.

**Import JSON** allows you to upload your own JSON file with your own custom squares to use.  The information from the JSON will be saved in the browser localStorage until you either click the `x` next to the filename or you clear your browser storage (generally done if clearing cookies etc).  JSON files can of course be shared with others, too, so you and your party have a matching set (though every card will be different).

To import squares, your JSON should have the structure below.  The `rules` property is text that will appear in the body of the square before it is 'marked', and is omitted in the default squares.  The `desc` property contains text that appears only after a square is marked.  

```json
{
    "squares" : [
    {
        "name" : "Aim",
        "type" : "combat",
        "desc" : "\"I do not aim with my hand; he who aims with his hand has forgotten the face of his father.  I aim with my eye.\" <br> &mdash;Roland Deschain",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 97
    },
    {
        "name" : "Area of Effect",
        "type" : "combat",
        "desc" : "quote needed",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 97

    }
    ]
}
```

## Updates and Contributions
Please assume that each day this project can change, and there are no guarantees that it will behave the same as the day before.  Particularly if you create your JSON file that works one day, and doesn't the next -- though hopefully those types of changes don't occur often and aren't too hard to quickly fix.  

This is mostly a project to practice some javascript concepts, but I am happy to get suggestions for consideration via the Github issues.  Especially looking for quotes (either original or otherwise) or flavor text to add to the `desc` property (which appear after a square is marked).
