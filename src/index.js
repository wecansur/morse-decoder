const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const binaryArray = [];

    for (let i = 0; i < expr.length; i = i + 10) {
        binaryArray.push(expr.slice(i, i + 10))
    };
    
    const dividedArray = [];

    binaryArray.forEach((item,) => {
        if (item === '**********') {
            dividedArray.push(item)
        } else {
            let result =[];
            for (let i = 0; i < item.length; i = i + 2) {
                result.push(item.slice(i, i + 2));
            }
            dividedArray.push(result)
        }
    })
    
    const morseArray = [];
    
    dividedArray.forEach((item) => {
        if (item === '**********') {
            morseArray.push(item);
        } else {
            let result = '';
            item.forEach((innerItem) => {
                if (innerItem === '10') {
                    result += '.'
                } else if (innerItem === '11') {
                    result += '-'
                }
            })
            morseArray.push(result);
        }
    })
    
    let result = '';

    morseArray.forEach((item) => {
        if (item === '**********') {
            result += ' '
        } else {
            result += MORSE_TABLE[item]
        }
    })    
    return result
}

module.exports = {
    decode
}