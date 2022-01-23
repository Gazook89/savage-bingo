<img width="1233" alt="image" src="https://user-images.githubusercontent.com/58999374/150661710-79f0324f-89e9-4f9e-8d8f-92077a63e2e8.png">


# Savage Bingo
Add some variety to your Savage World combat with a Bingo meta game.  If your combat encounters are routinely just Fighting and Spellcasting rolls, use Savage Bingo to suggest alternative game mechanics you may not have considered.  Each bingo card has 24 rules on it with 1 free square at the center.  When you have used a mechanic, or somehow been a part of such mechanic, click on the square to mark it.  If you are a GM and one of your players gets a bingo (filling a row, column, or diagonal), award them with an extra benny or two or something else.  Likely there will be some squares where the criterion for whether it can be marked or not needs some interpretation by player and GM.

## Operation
On first load, a random bingo card (set of 25 squares) will be generated from a longer list of possible squares.  On each subsequent reload of the page, the previous card will be reloaded. 

Click **New** to generate a new set of 25 squares.

**Reset** will clear the marks on all cards.

Clicking a card will mark it, and reveal some flavor text.  Cards can be unmarked as well.

**Import JSON** allows you to upload your own JSON file with your own custom squares to use.  The information from the JSON will be saved in the browser localStorage until you either click the `x` next to the filename or you clear your browser storage (generally done if clearing cookies etc).  The squares from each JSON are *appended* to any other JSON files currently imported.  JSON files can of course be shared with others, too, so you and your party have a matching set (though every card will be different).

To import squares, your JSON should have the structure below.  The `subheading` property is text that will appear in the body of the square before it is 'marked'. The `back` property contains text that appears only after a square is marked.  `tooltip` text is revealed via the "i" icon in the lower right of each square, and is omitted in the default squares. `url` could link directly to an online resource (but is not yet implemented).

```json
{
    "author"        : "Gazook89",
    "website"       : "https://github.com/Gazook89",
    "funding"       : "https://ko-fi.com/johnj",
    "description"   : "A set of SWADE mechanics for combat.  Does not include tooltip text.",
    "version"       : "2",
    "dateCreated"   : "2022/01/19",
    "license"       : null,
    "squares" : [
    {
        "heading" : "Aim",
        "subheading" : "Use a turn to take Aim at a foe.",
        "type" : "combat",
        "back" : "\"I do not aim with my hand; he who aims with his hand has forgotten the face of his father.  I aim with my eye.\" <br> &mdash;Roland Deschain",
        "tooltip" : "",
        "book" : "SWADE Core",
        "page" : 97,
        "url"  : ""
    },
    {
        "heading" : "Area of Effect",
        "subheading" : "Use a power or item that has an area of effect.",
        "back" : "combat",
        "desc" : "quote needed",
        "tooltip" : "",
        "book" : "SWADE Core",
        "page" : 97,
        "url"  : ""
    }
    ]
}
```

## Updates and Contributions
Please assume that each day this project can change, and there are no guarantees that it will behave the same as the day before.  Particularly if you create your JSON file that works one day, and doesn't the next -- though hopefully those types of changes don't occur often and aren't too hard to quickly fix.  

This is mostly a project to practice some javascript concepts, but I am happy to get suggestions for consideration via the Github issues.  Especially looking for quotes (either original or otherwise) or flavor text to add to the `desc` property (which appear after a square is marked).
