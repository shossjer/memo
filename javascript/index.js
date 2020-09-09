const nextButton = 'ArrowRight';

var characterFont = undefined;

function setCharacterFont(fontClass) {
    const characterfonts = document.getElementsByClassName('characterfont');
    for (var i = 0; i < characterfonts.length; i++) {
        characterfonts[i].classList.remove(characterFont);
        characterfonts[i].classList.add(fontClass);
    }
    characterFont = fontClass;
}

function removeCharacterClass(domelem) {
    domelem.classList.remove(characterFont);
    domelem.classList.remove('characterfont');
}

function addCharacterClass(domelem) {
    removeCharacterClass(domelem);
    domelem.classList.add('characterfont');
    domelem.classList.add(characterFont);
}

const datasets = {
    basics: [
        {name: 'a', hiragana: '\u3042', katakana: '\u30a2', x: 10, y: 0},
        {name: 'i', hiragana: '\u3044', katakana: '\u30a4', x: 10, y: 1},
        {name: 'u', hiragana: '\u3046', katakana: '\u30a6', x: 10, y: 2},
        {name: 'e', hiragana: '\u3048', katakana: '\u30a8', x: 10, y: 3},
        {name: 'o', hiragana: '\u304a', katakana: '\u30aa', x: 10, y: 4},
        {name: 'ka', hiragana: '\u304b', katakana: '\u30ab', x: 9, y: 0},
        {name: 'ki', hiragana: '\u304d', katakana: '\u30ad', x: 9, y: 1},
        {name: 'ku', hiragana: '\u304f', katakana: '\u30af', x: 9, y: 2},
        {name: 'ke', hiragana: '\u3051', katakana: '\u30b1', x: 9, y: 3},
        {name: 'ko', hiragana: '\u3053', katakana: '\u30b3', x: 9, y: 4},
        {name: 'sa', hiragana: '\u3055', katakana: '\u30b5', x: 8, y: 0},
        {name: 'shi (si)', hiragana: '\u3057', katakana: '\u30b7', x: 8, y: 1},
        {name: 'su', hiragana: '\u3059', katakana: '\u30b9', x: 8, y: 2},
        {name: 'se', hiragana: '\u305b', katakana: '\u30bb', x: 8, y: 3},
        {name: 'so', hiragana: '\u305d', katakana: '\u30bd', x: 8, y: 4},
        {name: 'ta', hiragana: '\u305f', katakana: '\u30bf', x: 7, y: 0},
        {name: 'chi (ti)', hiragana: '\u3061', katakana: '\u30c1', x: 7, y: 1},
        {name: 'tsu (tu)', hiragana: '\u3064', katakana: '\u30c4', x: 7, y: 2},
        {name: 'te', hiragana: '\u3066', katakana: '\u30c6', x: 7, y: 3},
        {name: 'to', hiragana: '\u3068', katakana: '\u30c8', x: 7, y: 4},
        {name: 'na', hiragana: '\u306a', katakana: '\u30ca', x: 6, y: 0},
        {name: 'ni', hiragana: '\u306b', katakana: '\u30cb', x: 6, y: 1},
        {name: 'nu', hiragana: '\u306c', katakana: '\u30cc', x: 6, y: 2},
        {name: 'ne', hiragana: '\u306d', katakana: '\u30cd', x: 6, y: 3},
        {name: 'no', hiragana: '\u306e', katakana: '\u30ce', x: 6, y: 4},
        {name: 'ha', hiragana: '\u306f', katakana: '\u30cf', x: 5, y: 0},
        {name: 'hi', hiragana: '\u3072', katakana: '\u30d2', x: 5, y: 1},
        {name: 'fu (hu)', hiragana: '\u3075', katakana: '\u30d5', x: 5, y: 2},
        {name: 'he', hiragana: '\u3078', katakana: '\u30d8', x: 5, y: 3},
        {name: 'ho', hiragana: '\u307b', katakana: '\u30db', x: 5, y: 4},
        {name: 'ma', hiragana: '\u307e', katakana: '\u30de', x: 4, y: 0},
        {name: 'mi', hiragana: '\u307f', katakana: '\u30df', x: 4, y: 1},
        {name: 'mu', hiragana: '\u3080', katakana: '\u30e0', x: 4, y: 2},
        {name: 'me', hiragana: '\u3081', katakana: '\u30e1', x: 4, y: 3},
        {name: 'mo', hiragana: '\u3082', katakana: '\u30e2', x: 4, y: 4},
        {name: 'ya', hiragana: '\u3084', katakana: '\u30e4', x: 3, y: 0},
        {name: 'yu', hiragana: '\u3086', katakana: '\u30e6', x: 3, y: 2},
        {name: 'yo', hiragana: '\u3088', katakana: '\u30e8', x: 3, y: 4},
        {name: 'ra', hiragana: '\u3089', katakana: '\u30e9', x: 2, y: 0},
        {name: 'ri', hiragana: '\u308a', katakana: '\u30ea', x: 2, y: 1},
        {name: 'ru', hiragana: '\u308b', katakana: '\u30eb', x: 2, y: 2},
        {name: 're', hiragana: '\u308c', katakana: '\u30ec', x: 2, y: 3},
        {name: 'ro', hiragana: '\u308d', katakana: '\u30ed', x: 2, y: 4},
        {name: 'wa', hiragana: '\u308f', katakana: '\u30ef', x: 1, y: 0},
        {name: 'o (wo)', hiragana: '\u3092', katakana: '\u30f2', x: 1, y: 4},
        {name: 'n', hiragana: '\u3093', katakana: '\u30f3', x: 0, y: 0}
    ],
    diacritics: [
        {name: 'ga', hiragana: '\u304c', katakana: '\u30ac', x: 4, y: 0},
        {name: 'gi', hiragana: '\u304e', katakana: '\u30ae', x: 4, y: 1},
        {name: 'gu', hiragana: '\u3050', katakana: '\u30b0', x: 4, y: 2},
        {name: 'ge', hiragana: '\u3052', katakana: '\u30b2', x: 4, y: 3},
        {name: 'go', hiragana: '\u3054', katakana: '\u30b4', x: 4, y: 4},
        {name: 'za', hiragana: '\u3056', katakana: '\u30b6', x: 3, y: 0},
        {name: 'ji (zi)', hiragana: '\u3058', katakana: '\u30b8', x: 3, y: 1},
        {name: 'zu', hiragana: '\u305a', katakana: '\u30ba', x: 3, y: 2},
        {name: 'ze', hiragana: '\u305c', katakana: '\u30bc', x: 3, y: 3},
        {name: 'zo', hiragana: '\u305e', katakana: '\u30be', x: 3, y: 4},
        {name: 'da', hiragana: '\u3060', katakana: '\u30c0', x: 2, y: 0},
        {name: 'ji (di)', hiragana: '\u3062', katakana: '\u30c2', x: 2, y: 1},
        {name: 'zu (du)', hiragana: '\u3065', katakana: '\u30c5', x: 2, y: 2},
        {name: 'de', hiragana: '\u3067', katakana: '\u30c7', x: 2, y: 3},
        {name: 'do', hiragana: '\u3069', katakana: '\u30c9', x: 2, y: 4},
        {name: 'ba', hiragana: '\u3070', katakana: '\u30d0', x: 1, y: 0},
        {name: 'bi', hiragana: '\u3073', katakana: '\u30d3', x: 1, y: 1},
        {name: 'bu', hiragana: '\u3076', katakana: '\u30d6', x: 1, y: 2},
        {name: 'be', hiragana: '\u3079', katakana: '\u30d9', x: 1, y: 3},
        {name: 'bo', hiragana: '\u307c', katakana: '\u30dc', x: 1, y: 4},
        {name: 'pa', hiragana: '\u3071', katakana: '\u30d1', x: 0, y: 0},
        {name: 'pi', hiragana: '\u3074', katakana: '\u30d4', x: 0, y: 1},
        {name: 'pu', hiragana: '\u3077', katakana: '\u30d7', x: 0, y: 2},
        {name: 'pe', hiragana: '\u307a', katakana: '\u30da', x: 0, y: 3},
        {name: 'po', hiragana: '\u307d', katakana: '\u30dd', x: 0, y: 4}
    ],
    contractions: [
        {name: 'kya', hiragana: '\u304d\u3083', katakana: '\u30ad\u30e3', x: 11, y: 0},
        {name: 'kyu', hiragana: '\u304d\u3085', katakana: '\u30ad\u30e5', x: 11, y: 1},
        {name: 'kyo', hiragana: '\u304d\u3087', katakana: '\u30ad\u30e7', x: 11, y: 2},
        {name: 'sha', hiragana: '\u3057\u3083', katakana: '\u30b7\u30e3', x: 10, y: 0},
        {name: 'shu', hiragana: '\u3057\u3085', katakana: '\u30b7\u30e5', x: 10, y: 1},
        {name: 'sho', hiragana: '\u3057\u3087', katakana: '\u30b7\u30e7', x: 10, y: 2},
        {name: 'cha', hiragana: '\u3061\u3083', katakana: '\u30c1\u30e3', x: 9, y: 0},
        {name: 'chu', hiragana: '\u3061\u3085', katakana: '\u30c1\u30e5', x: 9, y: 1},
        {name: 'cho', hiragana: '\u3061\u3087', katakana: '\u30c1\u30e7', x: 9, y: 2},
        {name: 'nya', hiragana: '\u306b\u3083', katakana: '\u30cb\u30e3', x: 8, y: 0},
        {name: 'nyu', hiragana: '\u306b\u3085', katakana: '\u30cb\u30e5', x: 8, y: 1},
        {name: 'nyo', hiragana: '\u306b\u3087', katakana: '\u30cb\u30e7', x: 8, y: 2},
        {name: 'hya', hiragana: '\u3072\u3083', katakana: '\u30d2\u30e3', x: 7, y: 0},
        {name: 'hyu', hiragana: '\u3072\u3085', katakana: '\u30d2\u30e5', x: 7, y: 1},
        {name: 'hyo', hiragana: '\u3072\u3087', katakana: '\u30d2\u30e7', x: 7, y: 2},
        {name: 'mya', hiragana: '\u307f\u3083', katakana: '\u30df\u30e3', x: 6, y: 0},
        {name: 'myu', hiragana: '\u307f\u3085', katakana: '\u30df\u30e5', x: 6, y: 1},
        {name: 'myo', hiragana: '\u307f\u3087', katakana: '\u30df\u30e7', x: 6, y: 2},
        {name: 'rya', hiragana: '\u308a\u3083', katakana: '\u30ea\u30e3', x: 5, y: 0},
        {name: 'ryu', hiragana: '\u308a\u3085', katakana: '\u30ea\u30e5', x: 5, y: 1},
        {name: 'ryo', hiragana: '\u308a\u3087', katakana: '\u30ea\u30e7', x: 5, y: 2},
        {name: 'gya', hiragana: '\u304e\u3083', katakana: '\u30ae\u30e3', x: 3, y: 0},
        {name: 'gyu', hiragana: '\u304e\u3085', katakana: '\u30ae\u30e5', x: 3, y: 1},
        {name: 'gyo', hiragana: '\u304e\u3087', katakana: '\u30ae\u30e7', x: 3, y: 2},
        {name: 'ja', hiragana: '\u3058\u3083', katakana: '\u30b8\u30e3', x: 2, y: 0},
        {name: 'ju', hiragana: '\u3058\u3085', katakana: '\u30b8\u30e5', x: 2, y: 1},
        {name: 'jo', hiragana: '\u3058\u3087', katakana: '\u30b8\u30e7', x: 2, y: 2},
        {name: 'bya', hiragana: '\u3073\u3083', katakana: '\u30d3\u30e3', x: 1, y: 0},
        {name: 'byu', hiragana: '\u3073\u3085', katakana: '\u30d3\u30e5', x: 1, y: 1},
        {name: 'byo', hiragana: '\u3073\u3087', katakana: '\u30d3\u30e7', x: 1, y: 2},
        {name: 'pya', hiragana: '\u3074\u3083', katakana: '\u30d4\u30e3', x: 0, y: 0},
        {name: 'pyu', hiragana: '\u3074\u3085', katakana: '\u30d4\u30e5', x: 0, y: 1},
        {name: 'pyo', hiragana: '\u3074\u3087', katakana: '\u30d4\u30e7', x: 0, y: 2},
    ]
};

function getRandom(count) {
    return Math.floor(Math.random() * count);
}

function getRandomIndex(array) {
    return getRandom(array.length);
}

function getRandomWeighted(weightfn, array) {
    const total = array.reduce((acc, elem, index) => { return acc + weightfn(elem, index); }, 0);
    const value = Math.random() * total;
    for (var i = 0, acc = 0;; i++) {
        acc += weightfn(array[i], i);
        if (value < acc)
            return i;
    }
}

// @deprecated
function getRandomElem(array) {
    return array[getRandomIndex(array)];
}

// @deprecated
function getElemFromChar(dictionary, char) {
    return dictionary.find((elem) => { return elem.char == char; });
}

// @deprecated
function getElemFromName(dictionary, name) {
    return dictionary.find((elem) => { return elem.name == name; });
}

function getGridSize(dataset) {
    return dataset.reduce((acc, elem) => {
        return {
            x: Math.max(acc.x, elem.x + 1),
            y: Math.max(acc.y, elem.y + 1)
        };
    }, {x: 0, y: 0});
}

function generateDatasetGrid(dataset, field) {
    const gridsize = getGridSize(dataset);
    // https://stackoverflow.com/a/57550587
    const grid = document.createElement('div');
    grid.className = 'gridcontainer characterfont';
    grid.style.setProperty('--grid-rows', gridsize.y);
    grid.style.setProperty('--grid-cols', gridsize.x);
    var gridcells = [];
    for (var c = 0; c < gridsize.y * gridsize.x; c++) {
        const cell = grid.appendChild(document.createElement('label'));
        cell.className = 'griditem';

        gridcells.push(cell);
    }
    dataset.forEach(elem => { gridcells[elem.y * gridsize.x + elem.x].textContent = elem[field]; });

    return grid;
}

function generateDatasetTooltip(dataset) {
    const content = document.createElement('span');
    content.className = 'content';

    content.appendChild(document.createElement('label')).textContent = 'Hiragana';
    content.appendChild(generateDatasetGrid(dataset, 'hiragana'));
    content.appendChild(document.createElement('label')).textContent = 'Katakana';
    content.appendChild(generateDatasetGrid(dataset, 'katakana'));

    return content;
}

function generateDatasetTooltips() {
    Object.keys(datasets).forEach(datasetkey => {
        const tooltips = document.getElementsByClassName('tooltip ' + datasetkey);
        if (0 < tooltips.length) {
            const tooltip = tooltips[0].appendChild(generateDatasetTooltip(datasets[datasetkey]));
            for (var i = 1; i < tooltips.length; i++) {
                tooltips[i].appendChild(tooltip.cloneNode(true));
            }
        }
    });
}

var dictionary = undefined;
var comprehensionNow = undefined;
var comprehensionDictionary = undefined;
var comprehensionIndex = undefined;
var comprehensionAlternative = undefined;

function resetDictionary() {
    dictionary = [{name: '?', char:'?'}];
}

var tabcontent = undefined;

function getOption(className) {
    const elements = tabcontent.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            return elements[i].value;
        }
    }
    return undefined;
}

function getOptions(className) {
    var options = {};

    const elements = tabcontent.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        options[elements[i].value] = elements[i].checked;
    }
    return options;
}

const games = {
    guess: {
        first: () => {
            const fieldoptions = getOptions('field');
            const datasetoptions = getOptions('dataset');

            dictionary = [];
            Object.keys(datasets).forEach(datasetkey => {
                if (datasetoptions[datasetkey]) {
                    datasets[datasetkey].forEach(elem => {
                        Object.keys(elem).forEach(field => {
                            if (fieldoptions[field]) {
                                dictionary.push({name: elem.name, char: elem[field]});
                            }
                        });
                    });
                }
            });
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

            var filteredDictionary = dictionary.filter(elem => { return elem.char != char; });
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
            const datasetoptions = getOptions('dataset');

            dictionary = [];
            Object.keys(datasets).forEach(datasetkey => {
                if (datasetoptions[datasetkey]) {
                    datasets[datasetkey].forEach(elem => {
                        dictionary.push({name: elem.name, hiragana: elem.hiragana, katakana: elem.katakana});
                    });
                }
            });
            if (dictionary.length == 0) {
                // the dictionary is empty, panic
                resetDictionary();
            }

            document.getElementById('WrittenHiragana').innerHTML = '?';
            document.getElementById('WrittenKatakana').innerHTML = '?';
            document.getElementById('WrittenName').innerHTML = '?';

            document.getElementById('WriteCharacter').innerHTML = getRandomElem(dictionary).name;
        },
        next: () => {
            const name = document.getElementById('WriteCharacter').innerHTML;
            document.getElementById('WrittenHiragana').innerHTML = getElemFromName(dictionary, name).hiragana;
            document.getElementById('WrittenKatakana').innerHTML = getElemFromName(dictionary, name).katakana;
            document.getElementById('WrittenName').innerHTML = name;

            var filteredDictionary = dictionary.filter(elem => { return elem.name != name; });
            if (filteredDictionary.length == 0) {
                // there is no possible next element, panic
                resetDictionary();
                filteredDictionary = dictionary;
            }
            document.getElementById('WriteCharacter').innerHTML = getRandomElem(filteredDictionary).name;
        }
    },
    comprehension: {
        first: () => {
            const playarea = tabcontent.getElementsByClassName('playarea')[0];
            const previousarea = tabcontent.getElementsByClassName('sidetext')[0];
            const answerarea = tabcontent.getElementsByClassName('sidetext')[1];
            playarea.innerHTML = '?';
            previousarea.innerHTML = '?';
            answerarea.innerHTML = '?';

            const directionoption = getOption('direction');
            const chapteroptions = getOptions('chapter');

            const direction = directionoption.split('2');

            if (direction[0] == 'japanese') {
                addCharacterClass(playarea);
                addCharacterClass(previousarea);
                removeCharacterClass(answerarea);
            }
            if (direction[1] == 'japanese') {
                removeCharacterClass(playarea);
                removeCharacterClass(previousarea);
                addCharacterClass(answerarea);
            }

            comprehensionNow = 0;
            comprehensionDictionary = [{last: 0, variants: [{from: '?', to: '?'}]}, {last: 0, variants: [{from: '?', to: '?'}]}];
            comprehensionIndex = 0;
            comprehensionAlternative = 0;
            playarea.innerHTML = comprehensionDictionary[comprehensionIndex].variants[comprehensionAlternative].from;

            Object.keys(chapteroptions).forEach(chapterkey => {
                if (chapteroptions[chapterkey]) {
                    fetch('data/comprehension-chapter-' + chapterkey + '.json')
                    .then(response => response.json())
                    .then(data => {
                        comprehensionDictionary = [];
                        data.forEach(elem => {
                            var alternatives = [{from: elem[direction[0]], to: elem[direction[1]]}];
                            if ('alternatives' in elem) {
                                elem.alternatives.forEach(alternative => {
                                    alternatives.push({from: alternative[direction[0]], to: alternative[direction[1]]});
                                });
                            }
                            comprehensionDictionary.push({last: 0, variants: alternatives});
                        });
                        if (comprehensionDictionary.length < 2) {
                            if (comprehensionDictionary.length == 0) {
                                comprehensionDictionary = [{last: 0, variants: [{from: '?', to: '?'}]}, {last: 0, variants: [{from: '?', to: '?'}]}];
                            }
                            else {
                                comprehensionDictionary.push(comprehensionDictionary[0]);
                            }
                        }

                        comprehensionNow = 1;
                        comprehensionIndex = getRandomWeighted(elem => comprehensionNow - elem.last, comprehensionDictionary);
                        comprehensionAlternative = getRandomIndex(comprehensionDictionary[comprehensionIndex].variants);
                        comprehensionDictionary[comprehensionIndex].last = comprehensionNow;
                        playarea.innerHTML = comprehensionDictionary[comprehensionIndex].variants[comprehensionAlternative].from;
                    });
                }
            });
        },
        next: () => {
            const playarea = tabcontent.getElementsByClassName('playarea')[0];
            const previousarea = tabcontent.getElementsByClassName('sidetext')[0];
            const answerarea = tabcontent.getElementsByClassName('sidetext')[1];

            previousarea.innerHTML = comprehensionDictionary[comprehensionIndex].variants[comprehensionAlternative].from;
            answerarea.innerHTML = comprehensionDictionary[comprehensionIndex].variants[comprehensionAlternative].to;

            comprehensionNow++;
            comprehensionIndex = getRandomWeighted((elem, index) => index == comprehensionIndex ? 0 : comprehensionNow - elem.last, comprehensionDictionary);
            comprehensionAlternative = getRandomIndex(comprehensionDictionary[comprehensionIndex].variants);
            comprehensionDictionary[comprehensionIndex].last = comprehensionNow;
            playarea.innerHTML = comprehensionDictionary[comprehensionIndex].variants[comprehensionAlternative].from;
        }
    }
};

var game = undefined;

const nexts = document.getElementsByClassName('next');
for (var i = 0; i < nexts.length; i++) {
    nexts[i].innerHTML = nextButton;
}

generateDatasetTooltips();

document.onkeydown = function(event) {
    event = event || window.event;
    if (event.code === nextButton) {
        game.next();
    }
};

document.getElementById('DefaultFont').click();
document.getElementById('DefaultTab').click();

function openGame(event, gameName) {
    tabcontent = document.getElementById(gameName);
    game = games[gameName];

    const tabcontents = document.getElementsByClassName('tabcontent');
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = 'none';
    }

    const tablinks = document.getElementsByClassName('tablinks');
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    tabcontent.style.display = 'flex';
    event.currentTarget.className += ' active';

    game.first();
}
