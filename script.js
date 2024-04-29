document.getElementById('myButton').addEventListener('click', function() {
    document.getElementById('message').textContent = 'You clicked the button!';
});

document.getElementById('changeColorButton').addEventListener('click', function() {
    document.body.style.backgroundColor = randomBgColor();
});

function randomBgColor() {
    // Generate random color in hex format
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}
