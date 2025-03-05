function getTextValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const convertedIntoNumber = parseInt(textValue);
    return convertedIntoNumber;
}

function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}