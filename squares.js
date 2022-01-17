const squares = [
    {
        "name" : "Aim",
        "type" : "combat",
        "desc" : "\"I do not aim with my hand; he who aims with his hand has forgotten the face of his father.  I aim with my eye.\" <br> &mdash;Roland Deschain",
        "rule" : "Sacrifice 1 turn of movement to reduce Range, Cover, Called Shot, Scale, or Speed penalties by up to 4 points; or add +2 to Shooting.  Only applies to first shot of following turn, must be first action.",
        "book" : "SWADE Core",
        "page" : 97
    },
    {
        "name" : "Area of Effect",
        "type" : "combat",
        "desc" : "quote needed",
        "rule" : "Anyone caught within a small, medium, or large blast template or cone template takes the damage rolled unless <strong>Evaded</strong> or block by <strong>Cover</strong>.",
        "book" : "SWADE Core",
        "page" : 97

    },
    {
        "name" : "Bound",
        "type" : "combat",
        "desc" : "\"I am bound to you.  Just as you are bound to me.  The question is, which of us is hungrier?\" &mdash;Gnoll captive",
        "rule" : "Bound target cannot move or make physical actions beyond attempting to break free,  and is also <strong>Distracted</strong> & <strong>Vulnerable</strong>.  Breaking free takes an action (opposed Athletcs, or Strength - 2) to move to <strong>Entangled</strong> status.",
        "book" : "SWADE Core",
        "page" : 98

    },
    {
        "name" : "Entangled",
        "type" : "combat",
        "desc" : "\"God's damned it...I told that wretched elf to clean the webs out of the cellar.  <strong>GRINWILL, CUT ME OUT OF HERE!</strong>\" &mdash;Goblin tavernkeeper",
        "rule" : "Entangled target cannot move and is <strong>Distracted</strong>.  Breaking free takes an action (Athletics, or Strength - 2).  Victims can be freed by destroying the bonds; Hardness 4 for webs, ropes, nets, etc.",
        "book" : "SWADE Core",
        "page" : 98
    },
    {
        "name" : "Break Things",
        "type" : "combat",
        "desc" : "\"If you’re angry and you know it, break things.\" &mdash;-. Fazzar, Omianna Trading Company",
        "rule" : "If target object is held, an attack roll must succeed against wielders Parry; otherwise, use 2 as target number.  Damage roll must exceed the object's <strong>Hardness</strong>.  Raises and die Aces do not apply.<br>Rope: 4, Lock: 8, Heavy Door, Sword, Shield: 10",
        "book" : "SWADE Core",
        "page" : 98
    },
    {
        "name" : "Called Shot - Hand",
        "type" : "combat",
        "desc" : "",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 99
    },
    {
        "name" : "Called Shot - Head",
        "type" : "combat",
        "desc" : "",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 99
    },
    {
        "name" : "Called Shot - Vitals",
        "type" : "combat",
        "desc" : "",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 99
    },
    {
        "name" : "Called Shot - Item",
        "type" : "combat",
        "desc" : "",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 99
    },
    {
        "name" : "Called Shot - Limb",
        "type" : "combat",
        "desc" : "",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 99
    },
    {
        "name" : "Called Shot - Exposed Area",
        "type" : "combat",
        "desc" : "",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 99
    },
    {
        "name" : "Take Cover",
        "type" : "combat",
        "desc" : "",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 99
    },
    {
        "name" : "Fire Through Obstacle",
        "type" : "combat",
        "desc" : "",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 99
    },
    {
        "name" : "Defend",
        "type" : "combat",
        "desc" : "",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 100
    },
    {
        "name" : "Disarm",
        "type" : "combat",
        "desc" : "",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 100
    },
    {
        "name" : "Distracted",
        "type" : "combat",
        "desc" : "",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 100
    },
    {
        "name" : "Vulnerable",
        "type" : "combat",
        "desc" : "",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 100
    },
    {
        "name" : "The Drop",
        "type" : "combat",
        "desc" : "",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 100
    },
    {
        "name" : "Knockout Blow",
        "type" : "combat",
        "desc" : "",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 100
    },
    {
        "name" : "Evade",
        "type" : "combat",
        "desc" : "",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 100
    },
    {
        "name" : "Fatigue",
        "type" : "combat",
        "desc" : "",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 100
    },
    {
        "name" : "Finishing Move",
        "type" : "combat",
        "desc" : "",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 101
    },
    {
        "name" : "Fire into Melee",
        "type" : "combat",
        "desc" : "",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 101
    },
    {
        "name" : "Free Attack",
        "type" : "combat",
        "desc" : "",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 101
    },
    {
        "name" : "Gang Up",
        "type" : "combat",
        "desc" : "",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 101
    },
    {
        "name" : "Grapple",
        "type" : "combat",
        "desc" : "",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 101
    },
    {
        "name" : "Grapple a Size Up",
        "type" : "combat",
        "desc" : "",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 101
    },
    {
        "name" : "Crush",
        "type" : "combat",
        "desc" : "",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 101
    },
    {
        "name" : "Go on Hold",
        "type" : "combat",
        "desc" : "",
        "rule" : "",
        "book" : "SWADE Core",
        "page" : 102
    }
];

export default squares;