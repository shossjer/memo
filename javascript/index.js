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
        {name: 'kya', hiragana: 'きゃ', katakana: 'キャ', x: 18, y: 0},
        {name: 'kyu', hiragana: 'きゅ', katakana: 'キュ', x: 18, y: 2},
        {name: 'kyo', hiragana: 'きょ', katakana: 'キョ', x: 18, y: 4},
        {name: 'sha', hiragana: 'しゃ', katakana: 'シャ', x: 17, y: 0},
        {name: 'shu', hiragana: 'しゅ', katakana: 'シュ', x: 17, y: 2},
        {name: 'she', katakana: 'シェ', x: 17, y: 3},
        {name: 'sho', hiragana: 'しょ', katakana: 'ショ', x: 17, y: 4},
        {name: 'cha', hiragana: 'ちゃ', katakana: 'チャ', x: 16, y: 0},
        {name: 'chu', hiragana: 'ちゅ', katakana: 'チュ', x: 16, y: 2},
        {name: 'che', katakana: 'チェ', x: 16, y: 3},
        {name: 'cho', hiragana: 'ちょ', katakana: 'チョ', x: 16, y: 4},
        {name: 'nya', hiragana: 'にゃ', katakana: 'ニャ', x: 15, y: 0},
        {name: 'nyu', hiragana: 'にゅ', katakana: 'ニュ', x: 15, y: 2},
        {name: 'nyo', hiragana: 'にょ', katakana: 'ニョ', x: 15, y: 4},
        {name: 'hya', hiragana: 'ひゃ', katakana: 'ヒャ', x: 14, y: 0},
        {name: 'hyu', hiragana: 'ひゅ', katakana: 'ヒュ', x: 14, y: 2},
        {name: 'hyo', hiragana: 'ひょ', katakana: 'ヒョ', x: 14, y: 4},
        {name: 'mya', hiragana: 'みゃ', katakana: 'ミャ', x: 13, y: 0},
        {name: 'myu', hiragana: 'みゅ', katakana: 'ミュ', x: 13, y: 2},
        {name: 'myo', hiragana: 'みょ', katakana: 'ミョ', x: 13, y: 4},
        {name: 'rya', hiragana: 'りゃ', katakana: 'リャ', x: 12, y: 0},
        {name: 'ryu', hiragana: 'りゅ', katakana: 'リュ', x: 12, y: 2},
        {name: 'ryo', hiragana: 'りょ', katakana: 'リョ', x: 12, y: 4},
        {name: 'gya', hiragana: 'ぎゃ', katakana: 'ギャ', x: 11, y: 0},
        {name: 'gyu', hiragana: 'ぎゅ', katakana: 'ギュ', x: 11, y: 2},
        {name: 'gyo', hiragana: 'ぎょ', katakana: 'ギョ', x: 11, y: 4},
        {name: 'ja', hiragana: 'じゃ', katakana: 'ジャ', x: 10, y: 0},
        {name: 'ju', hiragana: 'じゅ', katakana: 'ジュ', x: 10, y: 2},
        {name: 'je', katakana: 'ジェ', x: 10, y: 3},
        {name: 'jo', hiragana: 'じょ', katakana: 'ジョ', x: 10, y: 4},
        {name: 'bya', hiragana: 'びゃ', katakana: 'ビャ', x: 9, y: 0},
        {name: 'byu', hiragana: 'びゅ', katakana: 'ビュ', x: 9, y: 2},
        {name: 'byo', hiragana: 'びょ', katakana: 'ビョ', x: 9, y: 4},
        {name: 'pya', hiragana: 'ぴゃ', katakana: 'ピャ', x: 8, y: 0},
        {name: 'pyu', hiragana: 'ぴゅ', katakana: 'ピュ', x: 8, y: 2},
        {name: 'pyo', hiragana: 'ぴょ', katakana: 'ピョ', x: 8, y: 4},
        {name: 'wi', katakana: 'ウィ', x: 7, y: 1},
        {name: 'we', katakana: 'ウェ', x: 7, y: 3},
        {name: 'wo', katakana: 'ウォ', x: 7, y: 4},
        {name: 'kwa', katakana: 'クァ', x: 6, y: 0},
        {name: 'kwi', katakana: 'クィ', x: 6, y: 1},
        {name: 'kwe', katakana: 'クェ', x: 6, y: 3},
        {name: 'kwo', katakana: 'クォ', x: 6, y: 4},
        {name: 'tsa', katakana: 'ツァ', x: 5, y: 0},
        {name: 'tsi', katakana: 'ツィ', x: 5, y: 1},
        {name: 'tse', katakana: 'ツェ', x: 5, y: 3},
        {name: 'tso', katakana: 'ツォ', x: 5, y: 4},
        {name: 'ti', katakana: 'ティ', x: 4, y: 1},
        {name: 'tyu', katakana: 'テュ', x: 4, y: 2},
        {name: 'fa', katakana: 'ファ', x: 3, y: 0},
        {name: 'fi', katakana: 'フィ', x: 3, y: 1},
        {name: 'fyu', katakana: 'フュ', x: 3, y: 2},
        {name: 'fe', katakana: 'フェ', x: 3, y: 3},
        {name: 'fo', katakana: 'フォ', x: 3, y: 4},
        {name: 'di', katakana: 'ディ', x: 2, y: 1},
        {name: 'dyu', katakana: 'デュ', x: 2, y: 2},
        {name: 'va', katakana: 'ヴァ', x: 1, y: 0},
        {name: 'vi', katakana: 'ヴィ', x: 1, y: 1},
        {name: 'vu', katakana: 'ヴ', x: 1, y: 2},
        {name: 've', katakana: 'ヴェ', x: 1, y: 3},
        {name: 'vo', katakana: 'ヴォ', x: 1, y: 4},
        {name: 'ye', katakana: 'イェ', x: 0, y: 0},
        {name: 'gwa', katakana: 'グァ', x: 0, y: 1},
        {name: 'tu', katakana: 'トゥ', x: 0, y: 2},
        {name: 'du', katakana: 'ドゥ', x: 0, y: 3},
        {name: 'vyu', katakana: 'ヴュ', x: 0, y: 4}
    ]
};

const units = [
    {japanese: ['ドル'], english: 'dollars', type: 0},
    {japanese: ['まい'], english: 'sheets', type: 0},
    {japanese: ['ど'], english: 'degrees', type: 0},
    {japanese: ['じゅう', '(じゅっ/じっ)'], english: 'ten', type: 0, value: 10},
    {japanese: ['まん'], english: 'ten thousand', type: 0, value: 10000},
    {japanese: ['がつ'], english: 'month', type: 1},
    {japanese: ['じ'], english: 'o\'clock', type: 2},
    {japanese: ['じかん'], english: 'hours', type: 2},
    {japanese: ['ねん'], english: 'year', type: 3},
    {japanese: ['ねんかん'], english: 'years', type: 3},
    {japanese: ['にん'], english: 'people', type: 3},
    {japanese: ['えん'], english: 'yen', type: 3},
    {japanese: ['ふん', undefined, 'ぷん'], english: 'minute', type: 4},
    {japanese: ['ふんかん', undefined, 'ぷんかん'], english: 'minutes', type: 4},
    {japanese: ['ほん', 'ぼん', 'ぽん'], english: 'sticks', type: 5},
    {japanese: ['はい', 'ばい', 'ぱい'], english: 'cups', type: 5},
    {japanese: ['ひき', 'びき', 'ぴき'], english: 'animals', type: 5},
    {japanese: ['ひゃく', 'びゃく', 'ぴゃく'], english: 'hundred', type: 5, value: 100},
    {japanese: ['ページ'], english: 'page', type: 6},
    {japanese: ['ポンド'], english: 'pounds', type: 6},
    {japanese: ['かげつ'], english: 'months', type: 7},
    {japanese: ['か'], english: 'lesson', type: 7},
    {japanese: ['かい'], english: 'times', type: 7},
    {japanese: ['こ'], english: 'small items', type: 7},
    {japanese: ['かい', 'がい'], english: 'floor', type: 8},
    {japanese: ['けん', 'げん'], english: 'houses', type: 8},
    {japanese: ['セント'], english: 'cents', type: 9},
    {japanese: ['しゅうかん'], english: 'weeks', type: 9},
    {japanese: ['さつ'], english: 'books', type: 9},
    {japanese: ['さい'], english: 'years of age', type: 9},
    {japanese: ['そく', 'ぞく'], english: 'shoes', type: 10},
    {japanese: ['せん', 'ぜん'], english: 'thousand', type: 10, value: 1000},
    {japanese: ['つう'], english: 'letters', type: 11},
    {japanese: ['ちょうの'], english: 'street address', type: 11}
];

const digits = [
    undefined,
    {japanese: ['いち', 'いっ', '(いち/いっ)'], value: 1},
    {japanese: ['に'], value: 2},
    {japanese: ['さん'], value: 3},
    {japanese: ['よん', 'し', 'よ'], value: 4},
    {japanese: ['ご'], value: 5},
    {japanese: ['ろく', 'ろっ', '(ろく/ろっ)'], value: 6},
    {japanese: ['なな', 'しち'], value: 7},
    {japanese: ['はち', 'はっ', '(はち/はっ)'], value: 8},
    {japanese: ['きゅう', 'く'], value: 9}
];

function accumulateNumberSyntaxList(number, unit, list) {
    if (10000 <= number) {
        const tenthousands = Math.floor(number / 10000);
        number = number - tenthousands * 10000;
        accumulateNumberSyntaxList(tenthousands, units[4], list);
    }
    if (1000 <= number) {
        const thousands = Math.floor(number / 1000);
        number = number - thousands * 1000;
        accumulateNumberSyntaxList(thousands, units[31], list);
    }
    if (100 <= number) {
        const hundreds = Math.floor(number / 100);
        number = number - hundreds * 100;
        accumulateNumberSyntaxList(hundreds, units[17], list);
    }
    if (10 <= number) {
        const tens = Math.floor(number / 10);
        number = number - tens * 10;
        accumulateNumberSyntaxList(tens, units[3], list);
    }
    if (0 < number) {
        list.push(digits[number]);
    }
    list.push(unit);
}

function fromNumberToString(number, unit) {
    var list = [];
    accumulateNumberSyntaxList(number, unit, list);

    var string = '';
    var alternative = 0;
    var i = 0;
    for (; i + 1 < list.length; i++) {
        var suffix = 0;
        switch (list[i].value) {
        case 1:
            if (i + 1 < list.length - 1 && (list[i + 1].value == 10 || list[i + 1].value == 100 || list[i + 1].value == 1000)) {
                alternative = -1;
                suffix = 0;
            }
            else if (4 <= list[i + 1].type && list[i + 1].type < 6) {
                alternative = 1;
                suffix = 2;
            }
            else if (list[i + 1].type == 6) {
                alternative = 2;
                suffix = 0;
            }
            else if (7 <= list[i + 1].type && list[i + 1].type < 12) {
                alternative = 1;
                suffix = 0;
            }
            else {
                alternative = 0;
                suffix = 0;
            }
            break;
        case 2:
        case 5:
            alternative = 0;
            suffix = 0;
            break;
        case 3:
            if (list[i + 1].type == 4) {
                alternative = 0;
                suffix = 2;
            }
            else if (list[i + 1].type == 5 || list[i + 1].type == 8 || list[i + 1].type == 10) {
                alternative = 0;
                suffix = 1;
            }
            else {
                alternative = 0;
                suffix = 0;
            }
            break;
        case 4:
            if (list[i + 1].type == 1) {
                alternative = 1;
                suffix = 0;
            }
            else if (2 <= list[i + 1].type && list[i + 1].type < 4) {
                alternative = 2;
                suffix = 0;
            }
            else if (list[i + 1].type == 4) {
                alternative = 0;
                suffix = 2;
            }
            else {
                alternative = 0;
                suffix = 0;
            }
            break;
        case 6:
            if (4 <= list[i + 1].type && list[i + 1].type < 6) {
                alternative = 1;
                suffix = 2;
            }
            else if (list[i + 1].type == 6) {
                alternative = 2;
                suffix = 0;
            }
            else if (7 <= list[i + 1].type && list[i + 1].type < 9) {
                alternative = 1;
                suffix = 0;
            }
            else {
                alternative = 0;
                suffix = 0;
            }
            break;
        case 7:
        case 9:
            if (1 <= list[i + 1].type && list[i + 1].type < 3) {
                alternative = 1;
                suffix = 0;
            }
            else {
                alternative = 0;
                suffix = 0;
            }
            break;
        case 8:
            if (list[i + 1].type == 4) {
                alternative = 2;
                suffix = 2;
            }
            else if (list[i + 1].type == 5) {
                alternative = 1;
                suffix = 2;
            }
            else if (list[i + 1].type == 6) {
                alternative = 2;
                suffix = 0;
            }
            else if (7 <= list[i + 1].type && list[i + 1].type < 12) {
                alternative = 1;
                suffix = 0;
            }
            else {
                alternative = 0;
                suffix = 0;
            }
            break;
        case 10:
            if (4 <= list[i + 1].type && list[i + 1].type < 6) {
                alternative = 1;
                suffix = 2;
            }
            else if (6 <= list[i + 1].type && list[i + 1].type < 12) {
                alternative = 1;
                suffix = 0;
            }
            else {
                alternative = 0;
                suffix = 0;
            }
            break;
        }
        if (0 <= alternative) {
            string += list[i].japanese[alternative];
        }
        alternative = suffix;
    }
    string += list[i].japanese[alternative];
    return string;
}

function getRandom(count) {
    return Math.floor(Math.random() * count);
}

function getRandomIndex(array) {
    return array.length == 0 ? undefined : getRandom(array.length);
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

function getRandomNumber(from, to, except) {
    if (to <= from) {
        return undefined;
    }
    else if (typeof except == 'undefined') {
        const range = Math.log(to + 1) - Math.log(from + 1);
        const value = Math.random() * range;
        return Math.floor(Math.exp(Math.log(from + 1) + value) - 1);
    }
    else {
        const split1 = Math.log(except + 1) - Math.log(from + 1);
        const split2 = Math.log(to + 1) - Math.log(except + 1 + 1);
        const range = split1 + split2;
        const value = Math.random() * range;
        if (value < split1) {
            return Math.floor(Math.exp(Math.log(from + 1) + value) - 1);
        }
        else {
            return Math.floor(Math.exp(Math.log(except + 1 + 1) + (value - split1)) - 1);
        }
    }
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

function getValues(className) {
    var values = {};

    const elements = tabcontent.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        values[elements[i].name] = elements[i].value;
    }
    return values;
}

const games = {
    guess: {
        dictionary: undefined,
        now: undefined,
        current: {index: undefined},
        previous: {index: undefined},
        refresh: function() {
            const playarea = tabcontent.getElementsByClassName('playarea')[0];
            const previousarea = tabcontent.getElementsByClassName('sidecharacter')[0];
            const answerarea = tabcontent.getElementsByClassName('sidecharacter')[1];

            if (this.previous.index !== undefined) {
                previousarea.innerHTML = this.dictionary[this.previous.index].char;
                answerarea.innerHTML = this.dictionary[this.previous.index].name;
            }
            else {
                previousarea.innerHTML = '?';
                answerarea.innerHTML = '?';
            }

            if (this.current.index !== undefined) {
                playarea.innerHTML = this.dictionary[this.current.index].char;
            }
            else {
                playarea.innerHTML = '?';
            }
        },
        first: function() {
            const fieldoptions = getOptions('field');
            const datasetoptions = getOptions('dataset');

            this.dictionary = [];
            Object.keys(datasets).forEach(datasetkey => {
                if (datasetoptions[datasetkey]) {
                    datasets[datasetkey].forEach(elem => {
                        Object.keys(elem).forEach(field => {
                            if (fieldoptions[field]) {
                                this.dictionary.push({last: 0, name: elem.name, char: elem[field]});
                            }
                        });
                    });
                }
            });
            if (this.dictionary.length < 2) {
                if (this.dictionary.length == 0) {
                    this.dictionary = [{last: 0, name: '?', char: '?'}, {last: 0, name: '?', char: '?'}];
                }
                else {
                    this.dictionary.push(this.dictionary[0]);
                }
            }
            else {
                this.dictionary.forEach(elem => { elem.last = -(getRandom(this.dictionary.length) + 1); });
            }

            this.previous.index = undefined;

            this.now = 1;
            this.current.index = getRandomWeighted(elem => this.now - elem.last, this.dictionary);
            this.dictionary[this.current.index].last = this.now;

            this.refresh();
        },
        next: function() {
            this.previous.index = this.current.index;

            this.current.index = getRandomWeighted(elem => this.now - elem.last, this.dictionary);
            this.now++;
            this.dictionary[this.current.index].last = this.now;

            this.refresh();
        }
    },
    write: {
        dictionary: undefined,
        now: undefined,
        current: {index: undefined},
        previous: {index: undefined},
        refresh: function() {
            const playarea = tabcontent.getElementsByClassName('playarea')[0];
            const hiraganaarea = tabcontent.getElementsByClassName('sidecharacter')[0];
            const katakanaarea = tabcontent.getElementsByClassName('sidecharacter')[1];
            const answerarea = tabcontent.getElementsByClassName('sidecharacter')[2];

            if (this.current.index !== undefined) {
                playarea.innerHTML = this.dictionary[this.current.index].name;
            }
            else {
                playarea.innerHTML = '?';
            }

            if (this.previous.index !== undefined && this.dictionary[this.previous.index].hiragana !== undefined) {
                hiraganaarea.innerHTML = this.dictionary[this.previous.index].hiragana;
            }
            else {
                hiraganaarea.innerHTML = '?';
            }

            if (this.previous.index !== undefined && this.dictionary[this.previous.index].katakana !== undefined) {
                katakanaarea.innerHTML = this.dictionary[this.previous.index].katakana;
            }
            else {
                katakanaarea.innerHTML = '?';
            }

            if (this.previous.index !== undefined && this.dictionary[this.previous.index].name !== undefined) {
                answerarea.innerHTML = this.dictionary[this.previous.index].name;
            }
            else {
                answerarea.innerHTML = '?';
            }
        },
        first: function() {
            const datasetoptions = getOptions('dataset');

            this.dictionary = [];
            Object.keys(datasets).forEach(datasetkey => {
                if (datasetoptions[datasetkey]) {
                    datasets[datasetkey].forEach(elem => {
                        this.dictionary.push({last: 0, name: elem.name, hiragana: elem.hiragana, katakana: elem.katakana});
                    });
                }
            });
            if (this.dictionary.length < 2) {
                if (this.dictionary.length == 0) {
                    this.dictionary = [{last: 0, name: '?', hiragana: undefined, katakana: undefined}, {last: 0, name: '?', hiragana: undefined, katakana: undefined}];
                }
                else {
                    this.dictionary.push(this.dictionary[0]);
                }
            }
            else {
                this.dictionary.forEach(elem => { elem.last = -(getRandom(this.dictionary.length) + 1); });
            }

            this.previous.index = undefined;

            this.now = 1;
            this.current.index = getRandomWeighted(elem => this.now - elem.last, this.dictionary);
            this.dictionary[this.current.index].last = this.now;

            this.refresh();
        },
        next: function() {
            this.previous.index = this.current.index;

            this.current.index = getRandomWeighted(elem => this.now - elem.last, this.dictionary);
            this.now++;
            this.dictionary[this.current.index].last = this.now;

            this.refresh();
        }
    },
    comprehension: {
        dictionary: undefined,
        now: undefined,
        current: {index: undefined, alternative: undefined},
        previous: {index: undefined, alternative: undefined},
        refresh: function() {
            const playarea = tabcontent.getElementsByClassName('playarea')[0];
            const previousarea = tabcontent.getElementsByClassName('sidetext')[0];
            const answerarea = tabcontent.getElementsByClassName('sidetext')[1];

            const directionoption = getOption('direction');
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

            if (direction[0] in this.dictionary[this.current.index].variants[this.current.alternative]) {
                playarea.innerHTML = this.dictionary[this.current.index].variants[this.current.alternative][direction[0]];
            }
            else {
                playarea.innerHTML = '?';
            }
            if (0 <= this.previous.index && direction[0] in this.dictionary[this.previous.index].variants[this.previous.alternative]) {
                previousarea.innerHTML = this.dictionary[this.previous.index].variants[this.previous.alternative][direction[0]];
            }
            else {
                previousarea.innerHTML = '?';
            }
            if (0 <= this.previous.index && direction[1] in this.dictionary[this.previous.index].variants[this.previous.alternative]) {
                answerarea.innerHTML = this.dictionary[this.previous.index].variants[this.previous.alternative][direction[1]];
            }
            else {
                answerarea.innerHTML = '?';
            }
        },
        first: function() {
            const chapteroptions = getOptions('chapter');
            const additionaloptions = getOptions('additional');

            this.dictionary = [{last: 0, variants: [{}], tags: []}, {last: 0, variants: [{}], tags: []}];
            this.now = 0;
            this.previous.index = -1;
            this.previous.alternative = -1;
            this.current.index = 0;
            this.current.alternative = 0;

            this.refresh();

            var responses = [];
            Object.keys(chapteroptions).forEach(chapterkey => {
                if (chapteroptions[chapterkey]) {
                    responses.push(fetch('data/comprehension-chapter-' + chapterkey + '.json').then(response => response.json()));
                }
            });
            Object.keys(additionaloptions).forEach(additionalkey => {
                if (additionaloptions[additionalkey]) {
                    responses.push(fetch('data/comprehension-additional-' + additionalkey + '.json').then(response => response.json()));
                }
            });
            Promise.all(responses).then(data => {
                this.dictionary = [];
                data.forEach(array => {
                    array.forEach(elem => {
                        const keys = Object.keys(elem).filter(key => key !== 'tags' && key !== 'alternatives');
                        var original = {};
                        keys.forEach(key => { original[key] = elem[key]; });
                        var variants = [original];
                        if ('alternatives' in elem) {
                            elem.alternatives.forEach(alternative => {
                                var variant = {};
                                keys.forEach(key => { variant[key] = alternative[key]; });
                                variants.push(variant);
                            });
                        }
                        this.dictionary.push({last: 0, variants: variants, tags: elem.tags});
                    });
                });
                if (this.dictionary.length < 2) {
                    if (this.dictionary.length == 0) {
                        this.dictionary = [{last: 0, variants: [{}], tags: []}, {last: 0, variants: [{}], tags: []}];
                    }
                    else {
                        this.dictionary.push(this.dictionary[0]);
                    }
                }
                else {
                    this.dictionary.forEach(elem => { elem.last = -(getRandom(this.dictionary.length) + 1); });
                }

                this.now = 1;
                this.current.index = getRandomWeighted(elem => this.now - elem.last, this.dictionary);
                this.current.alternative = getRandomIndex(this.dictionary[this.current.index].variants);
                this.dictionary[this.current.index].last = this.now;

                this.refresh();
            });
        },
        next: function() {
            this.previous.index = this.current.index;
            this.previous.alternative = this.current.alternative;

            this.current.index = getRandomWeighted(elem => this.now - elem.last, this.dictionary);
            this.current.alternative = getRandomIndex(this.dictionary[this.current.index].variants);
            this.now++;
            this.dictionary[this.current.index].last = this.now;

            this.refresh();
        }
    },
    count: {
        current: {number: undefined, unit: undefined},
        previous: {number: undefined, unit: undefined},
        refresh: function() {
            const playarea = tabcontent.getElementsByClassName('playarea')[0];
            const previousarea = tabcontent.getElementsByClassName('sidetext')[0];
            const answerarea = tabcontent.getElementsByClassName('sidetext')[1];

            const directionoption = getOption('direction');
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

            if (this.current.number !== undefined && this.current.unit !== undefined) {
                if (direction[0] == 'japanese') {
                    playarea.innerHTML = fromNumberToString(this.current.number, this.current.unit);
                }
                else {
                    playarea.innerHTML = this.current.number + ' ' + this.current.unit.english;
                }
            }
            else {
                playarea.innerHTML = '?';
            }
            if (this.previous.number !== undefined && this.previous.unit !== undefined) {
                if (direction[0] == 'japanese') {
                    previousarea.innerHTML = fromNumberToString(this.previous.number, this.previous.unit);
                }
                else {
                    previousarea.innerHTML = this.previous.number + ' ' + this.previous.unit.english;
                }
            }
            else {
                previousarea.innerHTML = '?';
            }
            if (this.previous.number !== undefined && this.previous.unit !== undefined) {
                if (direction[1] == 'japanese') {
                    answerarea.innerHTML = fromNumberToString(this.previous.number, this.previous.unit);
                }
                else {
                    answerarea.innerHTML = this.previous.number + ' ' + this.previous.unit.english;
                }
            }
            else {
                answerarea.innerHTML = '?';
            }
        },
        first: function() {
            const rangevalues = getValues('range');
            const unitoptions = getOptions('unit');

            const selectedunits = units.filter((unit, index) => unitoptions[index]);

            this.previous.number = undefined;
            this.previous.unit = undefined;
            this.current.number = getRandomNumber(parseInt(rangevalues.min), parseInt(rangevalues.max) + 1);
            this.current.unit = selectedunits[getRandomIndex(selectedunits)];

            this.refresh();
        },
        next: function() {
            const rangevalues = getValues('range');
            const unitoptions = getOptions('unit');

            const selectedunits = units.filter((unit, index) => unitoptions[index]);

            this.previous.number = this.current.number;
            this.previous.unit = this.current.unit;
            this.current.number = getRandomNumber(parseInt(rangevalues.min), parseInt(rangevalues.max) + 1, this.current.number);
            this.current.unit = selectedunits[getRandomIndex(selectedunits)];

            this.refresh();
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
