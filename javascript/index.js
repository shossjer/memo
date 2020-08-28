const nextButton = 'ArrowRight';

const dictionaries = {
    hiragana: [
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
    ],
    katakana: [
        {name: 'a', char: '\u30a2'},
        {name: 'i', char: '\u30a4'},
        {name: 'u', char: '\u30a6'},
        {name: 'e', char: '\u30a8'},
        {name: 'o', char: '\u30aa'},
        {name: 'ka', char: '\u30ab'},
        {name: 'ki', char: '\u30ad'},
        {name: 'ku', char: '\u30af'},
        {name: 'ke', char: '\u30b1'},
        {name: 'ko', char: '\u30b3'},
        {name: 'sa', char: '\u30b5'},
        {name: 'shi (si)', char: '\u30b7'},
        {name: 'su', char: '\u30b9'},
        {name: 'se', char: '\u30bb'},
        {name: 'so', char: '\u30bd'},
        {name: 'ta', char: '\u30bf'},
        {name: 'chi (ti)', char: '\u30c1'},
        {name: 'tsu (tu)', char: '\u30c4'},
        {name: 'te', char: '\u30c6'},
        {name: 'to', char: '\u30c8'},
        {name: 'na', char: '\u30ca'},
        {name: 'ni', char: '\u30cb'},
        {name: 'nu', char: '\u30cc'},
        {name: 'ne', char: '\u30cd'},
        {name: 'no', char: '\u30ce'},
        {name: 'ha', char: '\u30cf'},
        {name: 'hi', char: '\u30d2'},
        {name: 'fu (hu)', char: '\u30d5'},
        {name: 'he', char: '\u30d8'},
        {name: 'ho', char: '\u30db'},
        {name: 'ma', char: '\u30de'},
        {name: 'mi', char: '\u30df'},
        {name: 'mu', char: '\u30e0'},
        {name: 'me', char: '\u30e1'},
        {name: 'mo', char: '\u30e2'},
        {name: 'ya', char: '\u30e4'},
        {name: 'yu', char: '\u30e6'},
        {name: 'yo', char: '\u30e8'},
        {name: 'ra', char: '\u30e9'},
        {name: 'ri', char: '\u30ea'},
        {name: 'ru', char: '\u30eb'},
        {name: 're', char: '\u30ec'},
        {name: 'ro', char: '\u30ed'},
        {name: 'wa', char: '\u30ef'},
        {name: 'o (wo)', char: '\u30f2'},
        {name: 'n', char: '\u30f3'}
    ]
};

function getRandomElem(dictionary) {
    return dictionary[Math.floor(Math.random() * dictionary.length)];
}

function getElemFromChar(dictionary, char) {
    return dictionary.find((elem) => { return elem.char == char; });
}

function getElemFromName(dictionary, name) {
    return dictionary.find((elem) => { return elem.name == name; });
}

var dictionary = undefined;

function resetDictionary() {
    dictionary = [{name: '?', char:'?'}];
}

const games = {
    guess: {
        first: () => {
            dictionary = [];
            Object.keys(dictionaries).forEach(key => { if (document.getElementById('guess-' + key).checked) { dictionary = dictionary.concat(dictionaries[key]); } });
            if (dictionary.length == 0) {
                // the dictionary is empty, panic
                resetDictionary();
            }

            document.getElementById('GuessedCharacter').innerHTML = '?';
            document.getElementById('GuessedName').innerHTML = '?';

            document.getElementById('GuessCharacter').innerHTML = getRandomElem(dictionary).char;
        },
        next: () => {
            const char = document.getElementById('GuessCharacter').innerHTML;
            document.getElementById('GuessedCharacter').innerHTML = char;
            document.getElementById('GuessedName').innerHTML = getElemFromChar(dictionary, char).name;

            var filteredDictionary = dictionary.filter((elem) => { return elem.char != char; });
            if (filteredDictionary.length == 0) {
                // there is no possible next element, panic
                resetDictionary();
                filteredDictionary = dictionary;
            }
            document.getElementById('GuessCharacter').innerHTML = getRandomElem(filteredDictionary).char;
        }
    },
    write: {
        first: () => {
            dictionary = dictionaries.hiragana;

            document.getElementById('WrittenCharacter').innerHTML = '?';
            document.getElementById('WrittenName').innerHTML = '?';

            document.getElementById('WriteCharacter').innerHTML = getRandomElem(dictionary).name;
        },
        next: () => {
            const name = document.getElementById('WriteCharacter').innerHTML;
            document.getElementById('WrittenCharacter').innerHTML = getElemFromName(dictionary, name).char;
            document.getElementById('WrittenName').innerHTML = name;

            document.getElementById('WriteCharacter').innerHTML = getRandomElem(dictionary.filter((elem) => { return elem.name != name; })).name;
        }
    }
};

var game = undefined;

const nexts = document.getElementsByClassName('next');
for (var i = 0; i < nexts.length; i++) {
    nexts[i].innerHTML = nextButton;
}

document.onkeydown = function(event) {
    event = event || window.event;
    if (event.code === nextButton) {
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
