const nextButton = 'ArrowRight';

const dictionaries = {
    hiragana: [
        {name: 'a', char: '\u3042', x: 10, y: 0},
        {name: 'i', char: '\u3044', x: 10, y: 1},
        {name: 'u', char: '\u3046', x: 10, y: 2},
        {name: 'e', char: '\u3048', x: 10, y: 3},
        {name: 'o', char: '\u304a', x: 10, y: 4},
        {name: 'ka', char: '\u304b', x: 9, y: 0},
        {name: 'ki', char: '\u304d', x: 9, y: 1},
        {name: 'ku', char: '\u304f', x: 9, y: 2},
        {name: 'ke', char: '\u3051', x: 9, y: 3},
        {name: 'ko', char: '\u3053', x: 9, y: 4},
        {name: 'sa', char: '\u3055', x: 8, y: 0},
        {name: 'shi (si)', char: '\u3057', x: 8, y: 1},
        {name: 'su', char: '\u3059', x: 8, y: 2},
        {name: 'se', char: '\u305b', x: 8, y: 3},
        {name: 'so', char: '\u305d', x: 8, y: 4},
        {name: 'ta', char: '\u305f', x: 7, y: 0},
        {name: 'chi (ti)', char: '\u3061', x: 7, y: 1},
        {name: 'tsu (tu)', char: '\u3064', x: 7, y: 2},
        {name: 'te', char: '\u3066', x: 7, y: 3},
        {name: 'to', char: '\u3068', x: 7, y: 4},
        {name: 'na', char: '\u306a', x: 6, y: 0},
        {name: 'ni', char: '\u306b', x: 6, y: 1},
        {name: 'nu', char: '\u306c', x: 6, y: 2},
        {name: 'ne', char: '\u306d', x: 6, y: 3},
        {name: 'no', char: '\u306e', x: 6, y: 4},
        {name: 'ha', char: '\u306f', x: 5, y: 0},
        {name: 'hi', char: '\u3072', x: 5, y: 1},
        {name: 'fu (hu)', char: '\u3075', x: 5, y: 2},
        {name: 'he', char: '\u3078', x: 5, y: 3},
        {name: 'ho', char: '\u307b', x: 5, y: 4},
        {name: 'ma', char: '\u307e', x: 4, y: 0},
        {name: 'mi', char: '\u307f', x: 4, y: 1},
        {name: 'mu', char: '\u3080', x: 4, y: 2},
        {name: 'me', char: '\u3081', x: 4, y: 3},
        {name: 'mo', char: '\u3082', x: 4, y: 4},
        {name: 'ya', char: '\u3084', x: 3, y: 0},
        {name: 'yu', char: '\u3086', x: 3, y: 2},
        {name: 'yo', char: '\u3088', x: 3, y: 4},
        {name: 'ra', char: '\u3089', x: 2, y: 0},
        {name: 'ri', char: '\u308a', x: 2, y: 1},
        {name: 'ru', char: '\u308b', x: 2, y: 2},
        {name: 're', char: '\u308c', x: 2, y: 3},
        {name: 'ro', char: '\u308d', x: 2, y: 4},
        {name: 'wa', char: '\u308f', x: 1, y: 0},
        {name: 'o (wo)', char: '\u3092', x: 1, y: 4},
        {name: 'n', char: '\u3093', x: 0, y: 0}
    ],
    katakana: [
        {name: 'a', char: '\u30a2', x: 10, y: 0},
        {name: 'i', char: '\u30a4', x: 10, y: 1},
        {name: 'u', char: '\u30a6', x: 10, y: 2},
        {name: 'e', char: '\u30a8', x: 10, y: 3},
        {name: 'o', char: '\u30aa', x: 10, y: 4},
        {name: 'ka', char: '\u30ab', x: 9, y: 0},
        {name: 'ki', char: '\u30ad', x: 9, y: 1},
        {name: 'ku', char: '\u30af', x: 9, y: 2},
        {name: 'ke', char: '\u30b1', x: 9, y: 3},
        {name: 'ko', char: '\u30b3', x: 9, y: 4},
        {name: 'sa', char: '\u30b5', x: 8, y: 0},
        {name: 'shi (si)', char: '\u30b7', x: 8, y: 1},
        {name: 'su', char: '\u30b9', x: 8, y: 2},
        {name: 'se', char: '\u30bb', x: 8, y: 3},
        {name: 'so', char: '\u30bd', x: 8, y: 4},
        {name: 'ta', char: '\u30bf', x: 7, y: 0},
        {name: 'chi (ti)', char: '\u30c1', x: 7, y: 1},
        {name: 'tsu (tu)', char: '\u30c4', x: 7, y: 2},
        {name: 'te', char: '\u30c6', x: 7, y: 3},
        {name: 'to', char: '\u30c8', x: 7, y: 4},
        {name: 'na', char: '\u30ca', x: 6, y: 0},
        {name: 'ni', char: '\u30cb', x: 6, y: 1},
        {name: 'nu', char: '\u30cc', x: 6, y: 2},
        {name: 'ne', char: '\u30cd', x: 6, y: 3},
        {name: 'no', char: '\u30ce', x: 6, y: 4},
        {name: 'ha', char: '\u30cf', x: 5, y: 0},
        {name: 'hi', char: '\u30d2', x: 5, y: 1},
        {name: 'fu (hu)', char: '\u30d5', x: 5, y: 2},
        {name: 'he', char: '\u30d8', x: 5, y: 3},
        {name: 'ho', char: '\u30db', x: 5, y: 4},
        {name: 'ma', char: '\u30de', x: 4, y: 0},
        {name: 'mi', char: '\u30df', x: 4, y: 1},
        {name: 'mu', char: '\u30e0', x: 4, y: 2},
        {name: 'me', char: '\u30e1', x: 4, y: 3},
        {name: 'mo', char: '\u30e2', x: 4, y: 4},
        {name: 'ya', char: '\u30e4', x: 3, y: 0},
        {name: 'yu', char: '\u30e6', x: 3, y: 2},
        {name: 'yo', char: '\u30e8', x: 3, y: 4},
        {name: 'ra', char: '\u30e9', x: 2, y: 0},
        {name: 'ri', char: '\u30ea', x: 2, y: 1},
        {name: 'ru', char: '\u30eb', x: 2, y: 2},
        {name: 're', char: '\u30ec', x: 2, y: 3},
        {name: 'ro', char: '\u30ed', x: 2, y: 4},
        {name: 'wa', char: '\u30ef', x: 1, y: 0},
        {name: 'o (wo)', char: '\u30f2', x: 1, y: 4},
        {name: 'n', char: '\u30f3', x: 0, y: 0}
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

function getGridSize(dictionary) {
    return dictionary.reduce((acc, elem) => {
        return {
            x: Math.max(acc.x, elem.x + 1),
            y: Math.max(acc.y, elem.y + 1)
        };
    }, {x: 0, y: 0});
}

function generateTooltip(dictionary) {
    const content = document.createElement('span');
    content.className = 'content';

    const gridsize = getGridSize(dictionary);
    // https://stackoverflow.com/a/57550587
    const grid = content.appendChild(document.createElement('div'));
    grid.className = 'gridcontainer';
    grid.style.setProperty('--grid-rows', gridsize.y);
    grid.style.setProperty('--grid-cols', gridsize.x);
    var gridcells = [];
    for (var c = 0; c < gridsize.y * gridsize.x; c++) {
        const cell = grid.appendChild(document.createElement('div'));
        cell.className = 'griditem';

        gridcells.push(cell);
    }
    dictionary.forEach(elem => { gridcells[elem.y * gridsize.x + elem.x].innerText = elem.char; });

    return content;
}

function generateTooltips(dictionaryName) {
    const tooltips = document.getElementsByClassName(dictionaryName + ' tooltip');
    if (0 < tooltips.length) {
        tooltips[0].appendChild(generateTooltip(dictionaries[dictionaryName]));
        for (var i = 1; i < tooltips.length; i++) {
            tooltips[i].appendChild(tooltips[0].cloneNode(true));
        }
    }
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

generateTooltips('hiragana');
generateTooltips('katakana');

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
