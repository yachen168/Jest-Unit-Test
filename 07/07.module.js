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
    stars.forEach(value => {
        result += `
      ${value}
    `
    })
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
    stars.forEach(value => {
        result += `
      ${value}
  `
    })
    return `順時針旋轉 90 度：${result}`;
}

module.exports = { printStars, printRotateStarts };