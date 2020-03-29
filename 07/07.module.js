function printStars() {
    let result = '';
    const stars = ['  ** **',
        ' *******',
        '*********',
        '*********',
        ' *******',
        '  *****',
        '   ***',
        '    *'
    ];
    for (let star of stars) {
        result += `
        ${star}
        `
    }
    return `正常版：${result}`;
}

function printRotateStarts() {
    let result = '';
    const stars = ['        * *',
        '      * * * *',
        '    * * * * * *',
        '  * * * * * * *',
        '* * * * * * *',
        '  * * * * * * *',
        '    * * * * * *',
        '      * * * *',
        '        * *'
    ];
    for (let star of stars) {
        result += `
      ${star}
      `
    }
    return `順直針旋轉 90 度：${result}`;
}

module.exports = { printStars, printRotateStarts };