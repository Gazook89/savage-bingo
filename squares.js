const defaultSquares = [
    {
        "name" : "Aim",
        "type" : "combat",
        "desc" : "\"I do not aim with my hand; he who aims with his hand has forgotten the face of his father.  I aim with my eye.\" <br> &mdash;Roland Deschain",
        "book" : "SWADE Core",
        "page" : 97
    },
    {
        "name" : "Area of Effect",
        "type" : "combat",
        "desc" : "quote needed",
        "book" : "SWADE Core",
        "page" : 97

    },
    {
        "name" : "Bound",
        "type" : "combat",
        "desc" : "\"I am bound to you.  Just as you are bound to me.  The question is, which of us is hungrier?\" &mdash;Gnoll captive",
        "book" : "SWADE Core",
        "page" : 98

    },
    {
        "name" : "Entangled",
        "type" : "combat",
        "desc" : "\"God's damned it...I told that wretched elf to clean the webs out of the cellar.  <strong>GRINWILL, CUT ME OUT OF HERE!</strong>\" &mdash;Goblin tavernkeeper",
        "book" : "SWADE Core",
        "page" : 98
    },
    {
        "name" : "Break Things",
        "type" : "combat",
        "desc" : "\"If you’re angry and you know it, break things.\" &mdash;-. Fazzar, Omianna Trading Company",
        "book" : "SWADE Core",
        "page" : 98
    },
    {
        "name" : "Called Shot - Hand",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 99
    },
    {
        "name" : "Called Shot - Head",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 99
    },
    {
        "name" : "Called Shot - Vitals",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 99
    },
    {
        "name" : "Called Shot - Item",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 99
    },
    {
        "name" : "Called Shot - Limb",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 99
    },
    {
        "name" : "Called Shot - Exposed Area",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 99
    },
    {
        "name" : "Take Cover",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 99
    },
    {
        "name" : "Fire Through Obstacle",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 99
    },
    {
        "name" : "Defend",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 100
    },
    {
        "name" : "Disarm",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 100
    },
    {
        "name" : "Distracted",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 100
    },
    {
        "name" : "Vulnerable",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 100
    },
    {
        "name" : "The Drop",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 100
    },
    {
        "name" : "Knockout Blow",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 100
    },
    {
        "name" : "Evade",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 100
    },
    {
        "name" : "Fatigue",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 100
    },
    {
        "name" : "Finishing Move",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 101
    },
    {
        "name" : "Fire into Melee",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 101
    },
    {
        "name" : "Free Attack",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 101
    },
    {
        "name" : "Gang Up",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 101
    },
    {
        "name" : "Grapple",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 101
    },
    {
        "name" : "Grapple a Size Up",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 101
    },
    {
        "name" : "Crush",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 101
    },
    {
        "name" : "Go on Hold",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 102
    },
    {
        "name" : "Interrupt From Hold",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 102
    },
    {
        "name" : "Low Light",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 102
    },
    {
        "name" : "Improvised Weapon - Light",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 102
    },
    {
        "name" : "Improvised Weapon - Medium",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 102
    },
    {
        "name" : "Improvised Weapon - Heavy",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 102
    },
    {
        "name" : "Miss Innocent Bystanders",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 102
    },
    {
        "name" : "Mounted Attack",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 103
    },
    {
        "name" : "Mounted Charge",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 103
    },
    {
        "name" : "Set Pikes",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 103
    },
    {
        "name" : "Multi-Action",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 103
    },
    {
        "name" : "Natural Weapon - Bite",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 104
    },
    {
        "name" : "Natural Weapon - Claws",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 104
    },
    {
        "name" : "Natural Weapon - Horns",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 104
    },
    {
        "name" : "Nonlethal Attack",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 104
    },
    {
        "name" : "Off-Hand Attack",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 104
    },
    {
        "name" : "Go Prone",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 104
    },
    {
        "name" : "Push",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 104
    },
    {
        "name" : "Point Blank",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 104
    },
    {
        "name" : "Ready Weapon as an Action",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 105
    },
    {
        "name" : "Reload as an Action",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 105
    },
    {
        "name" : "Attack Size Up",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 106
    },
    {
        "name" : "Attack Size Down",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 106
    }, 
    {
        "name" : "Stun",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 106
    },
    {
        "name" : "Support",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 106
    },
    {
        "name" : "Suppressive Fire",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 107
    },
    {
        "name" : "Surprise",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 108
    },
    {
        "name" : "Test",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 108
    },
    {
        "name" : "Touch Attack",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 108
    },
    {
        "name" : "Two Weapons",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 108
    },
    {
        "name" : "Unarmed Defender",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 109
    },
    {
        "name" : "Unstable Platform",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 109
    },
    {
        "name" : "Wild Attack",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 109
    },
    {
        "name" : "Withdraw From Melee",
        "type" : "combat",
        "desc" : "",
        "book" : "SWADE Core",
        "page" : 109
    }
];

export default defaultSquares;