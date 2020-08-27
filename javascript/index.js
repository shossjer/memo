const hiragana = [
    {name: 'a', char: '\u3042'},
    {name: 'i', char: '\u3044'},
    {name: 'u', char: '\u3046'},
    {name: 'e', char: '\u3048'},
    {name: 'o', char: '\u304a'},
    {name: 'ka', char: '\u304b'},
    {name: 'ki', char: '\u304d'},
    {name: 'ku', char: '\u304f'},
    {name: 'ke', char: '\u3051'},
    {name: 'ko', char: '\u3053'},
    {name: 'sa', char: '\u3055'},
    {name: 'shi (si)', char: '\u3057'},
    {name: 'su', char: '\u3059'},
    {name: 'se', char: '\u305b'},
    {name: 'so', char: '\u305d'},
    {name: 'ta', char: '\u305f'},
    {name: 'chi (ti)', char: '\u3061'},
    {name: 'tsu (tu)', char: '\u3064'},
    {name: 'te', char: '\u3066'},
    {name: 'to', char: '\u3068'},
    {name: 'na', char: '\u306a'},
    {name: 'ni', char: '\u306b'},
    {name: 'nu', char: '\u306c'},
    {name: 'ne', char: '\u306d'},
    {name: 'no', char: '\u306e'},
    {name: 'ha', char: '\u306f'},
    {name: 'hi', char: '\u3072'},
    {name: 'fu (hu)', char: '\u3075'},
    {name: 'he', char: '\u3078'},
    {name: 'ho', char: '\u307b'},
    {name: 'ma', char: '\u307e'},
    {name: 'mi', char: '\u307f'},
    {name: 'mu', char: '\u3080'},
    {name: 'me', char: '\u3081'},
    {name: 'mo', char: '\u3082'},
    {name: 'ya', char: '\u3084'},
    {name: 'yu', char: '\u3086'},
    {name: 'yo', char: '\u3088'},
    {name: 'ra', char: '\u3089'},
    {name: 'ri', char: '\u308a'},
    {name: 'ru', char: '\u308b'},
    {name: 're', char: '\u308c'},
    {name: 'ro', char: '\u308d'},
    {name: 'wa', char: '\u308f'},
    {name: 'o (wo)', char: '\u3092'},
    {name: 'n', char: '\u3093'}
];

function getRandomElem(dictionary) {
    return dictionary[Math.floor(Math.random() * dictionary.length)];
}

function getElemFromChar(dictionary, char) {
    return dictionary.find((elem) => { return elem.char == char; });
}

function getElemFromName(dictionary, name) {
    return dictionary.find((elem) => { return elem.name == name; });
}

const games = {
    guess: {
        first: () => {
            document.getElementById('GuessedCharacter').innerHTML = '?';
            document.getElementById('GuessedName').innerHTML = '?';

            document.getElementById('GuessCharacter').innerHTML = getRandomElem(hiragana).char;
        },
        next: () => {
            const char = document.getElementById('GuessCharacter').innerHTML;
            document.getElementById('GuessedCharacter').innerHTML = char;
            document.getElementById('GuessedName').innerHTML = getElemFromChar(hiragana, char).name;

            document.getElementById('GuessCharacter').innerHTML = getRandomElem(hiragana.filter((elem) => { return elem.char != char;})).char;
        }
    },
    write: {
        first: () => {
            document.getElementById('WrittenCharacter').innerHTML = '?';
            document.getElementById('WrittenName').innerHTML = '?';

            document.getElementById('WriteCharacter').innerHTML = getRandomElem(hiragana).name;
        },
        next: () => {
            const name = document.getElementById('WriteCharacter').innerHTML;
            document.getElementById('WrittenCharacter').innerHTML = getElemFromName(hiragana, name).char;
            document.getElementById('WrittenName').innerHTML = name;

            document.getElementById('WriteCharacter').innerHTML = getRandomElem(hiragana.filter((elem) => { return elem.name != name;})).name;
        }
    }
};

var game = undefined;

document.onkeypress = function(event) {
    event = event || window.event;
    if (event.code == 'Space') {
        event.preventDefault();
        game.next();
    }
};

document.getElementById('DefaultTab').click();

function openGame(event, gameName) {
    game = games[gameName];

    const tabcontent = document.getElementsByClassName('tabcontent');
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    const tablinks = document.getElementsByClassName('tablinks');
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    document.getElementById(gameName).style.display = 'flex';
    event.currentTarget.className += ' active';

    game.first();
}
