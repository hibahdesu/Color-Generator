const container = document.querySelector('.container');

for (let i = 0; i < 20; i++) {
    const colorCon = document.createElement('div');
    colorCon.classList.add('color-container');
    container.appendChild(colorCon);
}

const colorCon = document.querySelectorAll('.color-container');

//console.log(colorCon);
generator();

function generator() {
    colorCon.forEach((colorCon) => {
        const newCol = ranCo();
        colorCon.style.backgroundColor = '#' + newCol;
        colorCon.innerText = '#' + newCol;
        console.log(newCol);
    })
}

function ranCo() {
    const hex = '0123456789ABCDEF';
    const colorLength = 6;

    let color = '';
    for (let i = 0; i < colorLength; i++) {
        const random = Math.floor((Math.random() * hex.length));
        //console.log(random);
        color += hex.substring(random, random + 1);
        //console.log(color)
    }
    return color;
}