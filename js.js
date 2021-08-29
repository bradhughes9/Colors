//This function will generate a random number for our RGB to change the background color
const changeToFunkyColor = () => {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

//Now make the element you want to color
//and put it through the function with an onclick function
const buttonElement = document.getElementById('button');
const changeColor = document.getElementById('changeMe'); 

buttonElement.addEventListener('click', () => {
    console.log('Button clicked')
    changeToFunkyColor();
});