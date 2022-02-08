const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

const DOTDASH_TABLE = {
    '10': '.',
    '11': '-',
    '00': ''
}

function decode(expr) {
    let word = '';

    for (let i = 0; i < expr.length / 10; i++) {
        let letter;
        let decimalValue = expr.slice(i * 10, (i + 1) * 10);
        if (decimalValue === '**********') { letter = ' ' }
        else {
            let morseSymbol = '';
            for (let j = 0; j < decimalValue.length / 2; j++) {
                let binaryValue = decimalValue.slice(j * 2, (j + 1) * 2);
                let dotOrDash = DOTDASH_TABLE[binaryValue];
                morseSymbol = morseSymbol + dotOrDash;
                letter = MORSE_TABLE[morseSymbol];
            }
        }
        word = word + letter;
    }
    console.log(word);
    return word;
}

module.exports = {
    decode
}