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

const hiragana = {
    basics: [
        {name: 'a', character: 'あ', x: 10, y: 0},
        {name: 'i', character: 'い', x: 10, y: 1},
        {name: 'u', character: 'う', x: 10, y: 2},
        {name: 'e', character: 'え', x: 10, y: 3},
        {name: 'o', character: 'お', x: 10, y: 4},
        {name: 'ka', character: 'か', x: 9, y: 0},
        {name: 'ki', character: 'き', x: 9, y: 1},
        {name: 'ku', character: 'く', x: 9, y: 2},
        {name: 'ke', character: 'け', x: 9, y: 3},
        {name: 'ko', character: 'こ', x: 9, y: 4},
        {name: 'sa', character: 'さ', x: 8, y: 0},
        {name: 'shi (si)', character: 'し', x: 8, y: 1},
        {name: 'su', character: 'す', x: 8, y: 2},
        {name: 'se', character: 'せ', x: 8, y: 3},
        {name: 'so', character: 'そ', x: 8, y: 4},
        {name: 'ta', character: 'た', x: 7, y: 0},
        {name: 'chi (ti)', character: 'ち', x: 7, y: 1},
        {name: 'tsu (tu)', character: 'つ', x: 7, y: 2},
        {name: 'te', character: 'て', x: 7, y: 3},
        {name: 'to', character: 'と', x: 7, y: 4},
        {name: 'na', character: 'な', x: 6, y: 0},
        {name: 'ni', character: 'に', x: 6, y: 1},
        {name: 'nu', character: 'ぬ', x: 6, y: 2},
        {name: 'ne', character: 'ね', x: 6, y: 3},
        {name: 'no', character: 'の', x: 6, y: 4},
        {name: 'ha', character: 'は', x: 5, y: 0},
        {name: 'hi', character: 'ひ', x: 5, y: 1},
        {name: 'fu (hu)', character: 'ふ', x: 5, y: 2},
        {name: 'he', character: 'へ', x: 5, y: 3},
        {name: 'ho', character: 'ほ', x: 5, y: 4},
        {name: 'ma', character: 'ま', x: 4, y: 0},
        {name: 'mi', character: 'み', x: 4, y: 1},
        {name: 'mu', character: 'む', x: 4, y: 2},
        {name: 'me', character: 'め', x: 4, y: 3},
        {name: 'mo', character: 'も', x: 4, y: 4},
        {name: 'ya', character: 'や', x: 3, y: 0},
        {name: 'yu', character: 'ゆ', x: 3, y: 2},
        {name: 'yo', character: 'よ', x: 3, y: 4},
        {name: 'ra', character: 'ら', x: 2, y: 0},
        {name: 'ri', character: 'り', x: 2, y: 1},
        {name: 'ru', character: 'る', x: 2, y: 2},
        {name: 're', character: 'れ', x: 2, y: 3},
        {name: 'ro', character: 'ろ', x: 2, y: 4},
        {name: 'wa', character: 'わ', x: 1, y: 0},
        {name: 'o (wo)', character: 'を', x: 1, y: 4},
        {name: 'n', character: 'ん', x: 0, y: 0}
    ],
    diacritics: [
        {name: 'ga', character: 'が', x: 4, y: 0},
        {name: 'gi', character: 'ぎ', x: 4, y: 1},
        {name: 'gu', character: 'ぐ', x: 4, y: 2},
        {name: 'ge', character: 'げ', x: 4, y: 3},
        {name: 'go', character: 'ご', x: 4, y: 4},
        {name: 'za', character: 'ざ', x: 3, y: 0},
        {name: 'ji (zi)', character: 'じ', x: 3, y: 1},
        {name: 'zu', character: 'ず', x: 3, y: 2},
        {name: 'ze', character: 'ぜ', x: 3, y: 3},
        {name: 'zo', character: 'ぞ', x: 3, y: 4},
        {name: 'da', character: 'だ', x: 2, y: 0},
        {name: 'ji (di)', character: 'ぢ', x: 2, y: 1},
        {name: 'zu (du)', character: 'づ', x: 2, y: 2},
        {name: 'de', character: 'で', x: 2, y: 3},
        {name: 'do', character: 'ど', x: 2, y: 4},
        {name: 'ba', character: 'ば', x: 1, y: 0},
        {name: 'bi', character: 'び', x: 1, y: 1},
        {name: 'bu', character: 'ぶ', x: 1, y: 2},
        {name: 'be', character: 'べ', x: 1, y: 3},
        {name: 'bo', character: 'ぼ', x: 1, y: 4},
        {name: 'pa', character: 'ぱ', x: 0, y: 0},
        {name: 'pi', character: 'ぴ', x: 0, y: 1},
        {name: 'pu', character: 'ぷ', x: 0, y: 2},
        {name: 'pe', character: 'ぺ', x: 0, y: 3},
        {name: 'po', character: 'ぽ', x: 0, y: 4}
    ],
    contractions: [
        {name: 'kya', character: 'きゃ', x: 10, y: 0},
        {name: 'kyu', character: 'きゅ',  x: 10, y: 2},
        {name: 'kyo', character: 'きょ', x: 10, y: 4},
        {name: 'sha', character: 'しゃ', x: 9, y: 0},
        {name: 'shu', character: 'しゅ', x: 9, y: 2},
        {name: 'sho', character: 'しょ', x: 9, y: 4},
        {name: 'cha', character: 'ちゃ', x: 8, y: 0},
        {name: 'chu', character: 'ちゅ', x: 8, y: 2},
        {name: 'cho', character: 'ちょ', x: 8, y: 4},
        {name: 'nya', character: 'にゃ', x: 7, y: 0},
        {name: 'nyu', character: 'にゅ', x: 7, y: 2},
        {name: 'nyo', character: 'にょ', x: 7, y: 4},
        {name: 'hya', character: 'ひゃ', x: 6, y: 0},
        {name: 'hyu', character: 'ひゅ', x: 6, y: 2},
        {name: 'hyo', character: 'ひょ', x: 6, y: 4},
        {name: 'mya', character: 'みゃ', x: 5, y: 0},
        {name: 'myu', character: 'みゅ', x: 5, y: 2},
        {name: 'myo', character: 'みょ', x: 5, y: 4},
        {name: 'rya', character: 'りゃ', x: 4, y: 0},
        {name: 'ryu', character: 'りゅ', x: 4, y: 2},
        {name: 'ryo', character: 'りょ', x: 4, y: 4},
        {name: 'gya', character: 'ぎゃ', x: 3, y: 0},
        {name: 'gyu', character: 'ぎゅ', x: 3, y: 2},
        {name: 'gyo', character: 'ぎょ', x: 3, y: 4},
        {name: 'ja', character: 'じゃ', x: 2, y: 0},
        {name: 'ju', character: 'じゅ', x: 2, y: 2},
        {name: 'jo', character: 'じょ', x: 2, y: 4},
        {name: 'bya', character: 'びゃ', x: 1, y: 0},
        {name: 'byu', character: 'びゅ', x: 1, y: 2},
        {name: 'byo', character: 'びょ', x: 1, y: 4},
        {name: 'pya', character: 'ぴゃ', x: 0, y: 0},
        {name: 'pyu', character: 'ぴゅ', x: 0, y: 2},
        {name: 'pyo', character: 'ぴょ', x: 0, y: 4}
    ]
};

const katakana = {
    basics: [
        {name: 'a', character: '\u30a2', x: 10, y: 0},
        {name: 'i', character: '\u30a4', x: 10, y: 1},
        {name: 'u', character: '\u30a6', x: 10, y: 2},
        {name: 'e', character: '\u30a8', x: 10, y: 3},
        {name: 'o', character: '\u30aa', x: 10, y: 4},
        {name: 'ka', character: '\u30ab', x: 9, y: 0},
        {name: 'ki', character: '\u30ad', x: 9, y: 1},
        {name: 'ku', character: '\u30af', x: 9, y: 2},
        {name: 'ke', character: '\u30b1', x: 9, y: 3},
        {name: 'ko', character: '\u30b3', x: 9, y: 4},
        {name: 'sa', character: '\u30b5', x: 8, y: 0},
        {name: 'shi (si)', character: '\u30b7', x: 8, y: 1},
        {name: 'su', character: '\u30b9', x: 8, y: 2},
        {name: 'se', character: '\u30bb', x: 8, y: 3},
        {name: 'so', character: '\u30bd', x: 8, y: 4},
        {name: 'ta', character: '\u30bf', x: 7, y: 0},
        {name: 'chi (ti)', character: '\u30c1', x: 7, y: 1},
        {name: 'tsu (tu)', character: '\u30c4', x: 7, y: 2},
        {name: 'te', character: '\u30c6', x: 7, y: 3},
        {name: 'to', character: '\u30c8', x: 7, y: 4},
        {name: 'na', character: '\u30ca', x: 6, y: 0},
        {name: 'ni', character: '\u30cb', x: 6, y: 1},
        {name: 'nu', character: '\u30cc', x: 6, y: 2},
        {name: 'ne', character: '\u30cd', x: 6, y: 3},
        {name: 'no', character: '\u30ce', x: 6, y: 4},
        {name: 'ha', character: '\u30cf', x: 5, y: 0},
        {name: 'hi', character: '\u30d2', x: 5, y: 1},
        {name: 'fu (hu)', character: '\u30d5', x: 5, y: 2},
        {name: 'he', character: '\u30d8', x: 5, y: 3},
        {name: 'ho', character: '\u30db', x: 5, y: 4},
        {name: 'ma', character: '\u30de', x: 4, y: 0},
        {name: 'mi', character: '\u30df', x: 4, y: 1},
        {name: 'mu', character: '\u30e0', x: 4, y: 2},
        {name: 'me', character: '\u30e1', x: 4, y: 3},
        {name: 'mo', character: '\u30e2', x: 4, y: 4},
        {name: 'ya', character: '\u30e4', x: 3, y: 0},
        {name: 'yu', character: '\u30e6', x: 3, y: 2},
        {name: 'yo', character: '\u30e8', x: 3, y: 4},
        {name: 'ra', character: '\u30e9', x: 2, y: 0},
        {name: 'ri', character: '\u30ea', x: 2, y: 1},
        {name: 'ru', character: '\u30eb', x: 2, y: 2},
        {name: 're', character: '\u30ec', x: 2, y: 3},
        {name: 'ro', character: '\u30ed', x: 2, y: 4},
        {name: 'wa', character: '\u30ef', x: 1, y: 0},
        {name: 'o (wo)', character: '\u30f2', x: 1, y: 4},
        {name: 'n', character: '\u30f3', x: 0, y: 0}
    ],
    diacritics: [
        {name: 'ga', character: '\u30ac', x: 4, y: 0},
        {name: 'gi', character: '\u30ae', x: 4, y: 1},
        {name: 'gu', character: '\u30b0', x: 4, y: 2},
        {name: 'ge', character: '\u30b2', x: 4, y: 3},
        {name: 'go', character: '\u30b4', x: 4, y: 4},
        {name: 'za', character: '\u30b6', x: 3, y: 0},
        {name: 'ji (zi)', character: '\u30b8', x: 3, y: 1},
        {name: 'zu', character: '\u30ba', x: 3, y: 2},
        {name: 'ze', character: '\u30bc', x: 3, y: 3},
        {name: 'zo', character: '\u30be', x: 3, y: 4},
        {name: 'da', character: '\u30c0', x: 2, y: 0},
        {name: 'ji (di)', character: '\u30c2', x: 2, y: 1},
        {name: 'zu (du)', character: '\u30c5', x: 2, y: 2},
        {name: 'de', character: '\u30c7', x: 2, y: 3},
        {name: 'do', character: '\u30c9', x: 2, y: 4},
        {name: 'ba', character: '\u30d0', x: 1, y: 0},
        {name: 'bi', character: '\u30d3', x: 1, y: 1},
        {name: 'bu', character: '\u30d6', x: 1, y: 2},
        {name: 'be', character: '\u30d9', x: 1, y: 3},
        {name: 'bo', character: '\u30dc', x: 1, y: 4},
        {name: 'pa', character: '\u30d1', x: 0, y: 0},
        {name: 'pi', character: '\u30d4', x: 0, y: 1},
        {name: 'pu', character: '\u30d7', x: 0, y: 2},
        {name: 'pe', character: '\u30da', x: 0, y: 3},
        {name: 'po', character: '\u30dd', x: 0, y: 4}
    ],
    contractions: [
        {name: 'kya', character: 'キャ', x: 18, y: 0},
        {name: 'kyu', character: 'キュ', x: 18, y: 2},
        {name: 'kyo', character: 'キョ', x: 18, y: 4},
        {name: 'sha', character: 'シャ', x: 17, y: 0},
        {name: 'shu', character: 'シュ', x: 17, y: 2},
        {name: 'she', character: 'シェ', x: 17, y: 3},
        {name: 'sho', character: 'ショ', x: 17, y: 4},
        {name: 'cha', character: 'チャ', x: 16, y: 0},
        {name: 'chu', character: 'チュ', x: 16, y: 2},
        {name: 'che', character: 'チェ', x: 16, y: 3},
        {name: 'cho', character: 'チョ', x: 16, y: 4},
        {name: 'nya', character: 'ニャ', x: 15, y: 0},
        {name: 'nyu', character: 'ニュ', x: 15, y: 2},
        {name: 'nyo', character: 'ニョ', x: 15, y: 4},
        {name: 'hya', character: 'ヒャ', x: 14, y: 0},
        {name: 'hyu', character: 'ヒュ', x: 14, y: 2},
        {name: 'hyo', character: 'ヒョ', x: 14, y: 4},
        {name: 'mya', character: 'ミャ', x: 13, y: 0},
        {name: 'myu', character: 'ミュ', x: 13, y: 2},
        {name: 'myo', character: 'ミョ', x: 13, y: 4},
        {name: 'rya', character: 'リャ', x: 12, y: 0},
        {name: 'ryu', character: 'リュ', x: 12, y: 2},
        {name: 'ryo', character: 'リョ', x: 12, y: 4},
        {name: 'gya', character: 'ギャ', x: 11, y: 0},
        {name: 'gyu', character: 'ギュ', x: 11, y: 2},
        {name: 'gyo', character: 'ギョ', x: 11, y: 4},
        {name: 'ja', character: 'ジャ', x: 10, y: 0},
        {name: 'ju', character: 'ジュ', x: 10, y: 2},
        {name: 'je', character: 'ジェ', x: 10, y: 3},
        {name: 'jo', character: 'ジョ', x: 10, y: 4},
        {name: 'bya', character: 'ビャ', x: 9, y: 0},
        {name: 'byu', character: 'ビュ', x: 9, y: 2},
        {name: 'byo', character: 'ビョ', x: 9, y: 4},
        {name: 'pya', character: 'ピャ', x: 8, y: 0},
        {name: 'pyu', character: 'ピュ', x: 8, y: 2},
        {name: 'pyo', character: 'ピョ', x: 8, y: 4},
        {name: 'wi', character: 'ウィ', x: 7, y: 1},
        {name: 'we', character: 'ウェ', x: 7, y: 3},
        {name: 'wo', character: 'ウォ', x: 7, y: 4},
        {name: 'kwa', character: 'クァ', x: 6, y: 0},
        {name: 'kwi', character: 'クィ', x: 6, y: 1},
        {name: 'kwe', character: 'クェ', x: 6, y: 3},
        {name: 'kwo', character: 'クォ', x: 6, y: 4},
        {name: 'tsa', character: 'ツァ', x: 5, y: 0},
        {name: 'tsi', character: 'ツィ', x: 5, y: 1},
        {name: 'tse', character: 'ツェ', x: 5, y: 3},
        {name: 'tso', character: 'ツォ', x: 5, y: 4},
        {name: 'ti', character: 'ティ', x: 4, y: 1},
        {name: 'tyu', character: 'テュ', x: 4, y: 2},
        {name: 'fa', character: 'ファ', x: 3, y: 0},
        {name: 'fi', character: 'フィ', x: 3, y: 1},
        {name: 'fyu', character: 'フュ', x: 3, y: 2},
        {name: 'fe', character: 'フェ', x: 3, y: 3},
        {name: 'fo', character: 'フォ', x: 3, y: 4},
        {name: 'di', character: 'ディ', x: 2, y: 1},
        {name: 'dyu', character: 'デュ', x: 2, y: 2},
        {name: 'va', character: 'ヴァ', x: 1, y: 0},
        {name: 'vi', character: 'ヴィ', x: 1, y: 1},
        {name: 'vu', character: 'ヴ', x: 1, y: 2},
        {name: 've', character: 'ヴェ', x: 1, y: 3},
        {name: 'vo', character: 'ヴォ', x: 1, y: 4},
        {name: 'ye', character: 'イェ', x: 0, y: 0},
        {name: 'gwa', character: 'グァ', x: 0, y: 1},
        {name: 'tu', character: 'トゥ', x: 0, y: 2},
        {name: 'du', character: 'ドゥ', x: 0, y: 3},
        {name: 'vyu', character: 'ヴュ', x: 0, y: 4}
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

function generateDatasetGrid(dataset) {
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
    dataset.forEach(elem => { gridcells[elem.y * gridsize.x + elem.x].textContent = elem.character; });

    return grid;
}

function generateDatasetTooltip(dataset) {
    const content = document.createElement('span');
    content.className = 'content';

    content.appendChild(generateDatasetGrid(dataset));

    return content;
}

function generateDatasetTooltips(datasets, name) {
    Object.keys(datasets).forEach(datasetkey => {
        const tooltips = document.getElementsByClassName('tooltip ' + name + ' ' + datasetkey);
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

function setDefaultTextHTML(element, text) {
    if (typeof text === 'string') {
        element.textContent = text;
    }
    else {
        var str = '';
        text.forEach(char => {
            if (typeof char === 'string') {
                str += char;
            }
            else {
                const values = Object.values(char);
                str += values[0];
            }
        });
        element.textContent = str;
    }
}

function setDescriptiveTextHTML(element, text) {
    if (typeof text === 'string') {
        element.textContent = text;
    }
    else {
        var str = '<ruby xml:lang="ja">';
        text.forEach(char => {
            if (typeof char === 'string') {
                str += char + '<rt></rt>';
            }
            else {
                const values = Object.values(char);
                str += values[0] + '<rt>' + values[1] + '</rt>';
            }
        });
        str += '</ruby>';
        element.innerHTML = str;
    }
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
            const hiraganaoptions = getOptions('hiragana');
            const katakanaoptions = getOptions('katakana');
            const kanjioptions = getOptions('kanji');

            this.dictionary = [{last: 0, name: '?', char: '?'}, {last: 0, name: '?', char: '?'}];
            this.now = 0;
            this.previous.index = undefined;
            this.current.index = undefined;

            this.refresh();

            var responses = [];
            if (Object.values(kanjioptions).some(option => option)) {
                responses.push(fetch('data/kanji.json').then(response => response.json()));
            }
            Promise.all(responses).then(data => {
                this.dictionary = [];
                data.forEach(array => {
                    array.forEach(elem => {
                        if (elem.tags.some(tag => kanjioptions[tag])) {
                            this.dictionary.push({last: 0, name: elem.meaning, char: elem.kanji});
                        }
                    });
                });
                Object.keys(hiragana).forEach(datasetkey => {
                    if (hiraganaoptions[datasetkey]) {
                        hiragana[datasetkey].forEach(elem => {
                            this.dictionary.push({last: 0, name: elem.name, char: elem.character});
                        });
                    }
                });
                Object.keys(katakana).forEach(datasetkey => {
                    if (katakanaoptions[datasetkey]) {
                        katakana[datasetkey].forEach(elem => {
                            this.dictionary.push({last: 0, name: elem.name, char: elem.character});
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
            });
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
            const sidearea = tabcontent.getElementsByClassName('sidearea')[0];

            while (sidearea.firstChild) {
                sidearea.removeChild(sidearea.lastChild);
            }

            if (this.current.index !== undefined) {
                playarea.innerHTML = this.dictionary[this.current.index].name;
            }
            else {
                playarea.innerHTML = '?';
            }

            if (this.previous.index !== undefined && this.dictionary[this.previous.index].hiragana !== undefined) {
                const area = sidearea.appendChild(document.createElement('span'));
                area.className = 'sidecharacter';
                addCharacterClass(area);
                area.textContent = this.dictionary[this.previous.index].hiragana;
            }

            if (this.previous.index !== undefined && this.dictionary[this.previous.index].katakana !== undefined) {
                const area = sidearea.appendChild(document.createElement('span'));
                area.className = 'sidecharacter';
                addCharacterClass(area);
                area.textContent = this.dictionary[this.previous.index].katakana;
            }

            if (this.previous.index !== undefined && this.dictionary[this.previous.index].kanji !== undefined) {
                const area = sidearea.appendChild(document.createElement('span'));
                area.className = 'sidecharacter';
                addCharacterClass(area);
                area.textContent = this.dictionary[this.previous.index].kanji;
            }

            if (this.previous.index !== undefined && this.dictionary[this.previous.index].name !== undefined) {
                const area = sidearea.appendChild(document.createElement('span'));
                area.className = 'sidetext';
                area.textContent = this.dictionary[this.previous.index].name;
            }
        },
        first: function() {
            const hiraganaoptions = getOptions('hiragana');
            const katakanaoptions = getOptions('katakana');
            const kanjioptions = getOptions('kanji');

            this.dictionary = [{last: 0, name: '?', hiragana: undefined, katakana: undefined}, {last: 0, name: '?', hiragana: undefined, katakana: undefined}];
            this.now = 0;
            this.previous.index = undefined;
            this.current.index = undefined;

            this.refresh();

            var responses = [];
            if (Object.values(kanjioptions).some(option => option)) {
                responses.push(fetch('data/kanji.json').then(response => response.json()));
            }
            Promise.all(responses).then(data => {
                this.dictionary = [];
                data.forEach(array => {
                    array.forEach(elem => {
                        if (elem.tags.some(tag => kanjioptions[tag])) {
                            var item = this.dictionary.find(item => item.name == elem.meaning);
                            if (item === undefined) {
                                item = {last: 0, name: elem.meaning};
                                this.dictionary.push(item);
                            }
                            item['kanji'] = elem.kanji;
                        }
                    });
                });
                Object.keys(hiragana).forEach(datasetkey => {
                    if (hiraganaoptions[datasetkey]) {
                        hiragana[datasetkey].forEach(elem => {
                            var item = this.dictionary.find(item => item.name == elem.name);
                            if (item === undefined) {
                                item = {last: 0, name: elem.name};
                                this.dictionary.push(item);
                            }
                            item['hiragana'] = elem.character;
                        });
                    }
                });
                Object.keys(katakana).forEach(datasetkey => {
                    if (katakanaoptions[datasetkey]) {
                        katakana[datasetkey].forEach(elem => {
                            var item = this.dictionary.find(item => item.name == elem.name);
                            if (item === undefined) {
                                item = {last: 0, name: elem.name};
                                this.dictionary.push(item);
                            }
                            item['katakana'] = elem.character;
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
            });
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
            const sidearea = tabcontent.getElementsByClassName('sidearea')[0];

            const directionoption = getOption('direction');
            const direction = directionoption.split('2');

            while (sidearea.firstChild) {
                sidearea.removeChild(sidearea.lastChild);
            }

            if (direction[1] == 'japanese') {
                removeCharacterClass(playarea);
            }
            if (direction[0] == 'japanese') {
                addCharacterClass(playarea);
            }

            if (this.current.index !== undefined && direction[0] in this.dictionary[this.current.index].variants[this.current.alternative]) {
                setDefaultTextHTML(playarea, this.dictionary[this.current.index].variants[this.current.alternative][direction[0]]);
            }
            else {
                playarea.textContent = '?';
            }

            if (this.previous.index !== undefined && direction[0] in this.dictionary[this.previous.index].variants[this.previous.alternative]) {
                const area = sidearea.appendChild(document.createElement('span'));
                area.className = 'sidetext';
                if (direction[0] == 'japanese') {
                    addCharacterClass(area);
                }
                setDescriptiveTextHTML(area, this.dictionary[this.previous.index].variants[this.previous.alternative][direction[0]]);
            }
            if (this.previous.index !== undefined && direction[1] in this.dictionary[this.previous.index].variants[this.previous.alternative]) {
                const area = sidearea.appendChild(document.createElement('span'));
                area.className = 'sidetext';
                if (direction[1] == 'japanese') {
                    addCharacterClass(area);
                }
                setDescriptiveTextHTML(area, this.dictionary[this.previous.index].variants[this.previous.alternative][direction[1]]);
            }
        },
        first: function() {
            const chapteroptions = getOptions('chapter');
            const additionaloptions = getOptions('additional');
            const exampleoptions = getOptions('example');

            this.dictionary = [{last: 0, variants: [{}], tags: []}, {last: 0, variants: [{}], tags: []}];
            this.now = 0;
            this.previous.index = undefined;
            this.previous.alternative = undefined;
            this.current.index = undefined;
            this.current.alternative = undefined;

            this.refresh();

            var responses = [];
            var datatypes = [];
            Object.keys(chapteroptions).forEach(chapterkey => {
                if (chapteroptions[chapterkey]) {
                    responses.push(fetch('data/comprehension-chapter-' + chapterkey + '.json').then(response => response.json()));
                    datatypes.push('array');
                }
            });
            Object.keys(additionaloptions).forEach(additionalkey => {
                if (additionaloptions[additionalkey]) {
                    responses.push(fetch('data/comprehension-additional-' + additionalkey + '.json').then(response => response.json()));
                    datatypes.push('array');
                }
            });
            if (Object.values(exampleoptions).some(option => option)) {
                responses.push(fetch('data/examples.json').then(response => response.json()));
                datatypes.push('examples');
                responses.push(fetch('data/kanji.json').then(response => response.json()));
                datatypes.push('kanji');
            }
            Promise.all(responses).then(data => {
                var exampleset = undefined;
                var kanjiset = undefined;

                this.dictionary = [];
                data.forEach((array, index) => {
                    if (datatypes[index] == 'array') {
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
                    }
                    else if (datatypes[index] == 'examples') {
                        exampleset = array;
                    }
                    else if (datatypes[index] == 'kanji') {
                        kanjiset = array;
                    }
                });
                if (exampleset && kanjiset) {
                    const validtags = [];
                    Object.keys(exampleoptions).forEach(examplenumber => {
                        if (exampleoptions[examplenumber]) {
                            validtags.push('genki:chapter:' + examplenumber);
                            validtags.push('compendium:chapter:' + examplenumber);
                        }
                    });
                    const kanji = kanjiset.filter(elem => elem.tags.some(tag => validtags.includes(tag)));

                    const examples = exampleset.filter(elem => elem.japanese.some(char => {
                        var str = undefined;
                        if (typeof char === 'string') {
                            str = char;
                        }
                        else {
                            const values = Object.values(char);
                            str = values[0];
                        }
                        return kanji.some(k => str.includes(k.kanji));
                    }));
                    examples.forEach(example => {
                        this.dictionary.push({last: 0, variants: [example]});
                    });
                }
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

generateDatasetTooltips(hiragana, 'hiragana');
generateDatasetTooltips(katakana, 'katakana');

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
