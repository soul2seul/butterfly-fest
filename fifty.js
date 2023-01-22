const title= 'Butterfly Effect Music Festival — November 10—12, CDMX'
/* Here we make an empty array and we fill it with the title text*/
/* Then we fill it with the text of our title (50 items)*/
/* We then join them all together as one text string using -*/
const marqueeText = new Array(50).fill(title).join(' - ');

console.log(marqueeText);

const marquee = document.querySelector('.marquee span');
marquee.innerHTML = marqueeText;

//this function randomizes a number between a min and a max that we'll be used for the squiggles
function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Here we grab all of the circles from our HTML
const circles = document.querySelectorAll('.circle')

//Circles returns an array so we loop on each of them
circles.forEach(function(circle, index) {

//In here we get access to each one as 'circle'
circle.animate([

    //Keyframes
  { transform: 'scale(1)'},
  { transform: 'scale(1.2)'},
  { trasform: 'scale(1)'}

], {
    //timing options
    //Here we use the index to create an animation delay
    delay: 300 * index,
    duration: 3000,
    iterations: Infinity
});
})

const squiggles = document.querySelectorAll('.squiggle')

squiggles.forEach(function(squiggle, index) {

    //Gets the random number from the fuction previously declared
    const randomNumber = random(0, 45)


    squiggle.animate([

        //Keyframes
      { transform: 'rotate(0deg)'},
      { transform: `rotate(${randomNumber}deg)`},
      { trasform: 'rotate(0deg)'}
    
    ], {
        //timing options
        //Here we use the index to create an animation delay
        delay: 300 * index,
        duration: 3000,
        iterations: Infinity
    });
}
)

//This detects when our section is on the 
//When it detects we want to add a class of in-viewport
//When it exits the viewport we want to remove it again


inView('.section')
    .on('enter', section => {
        section.classList.add('in-viewport')
    })
    .on('exit', section => {
        section.classList.remove('in-viewport')
    });

inView.threshold(0.5)

//We want to select all our sections and loop through them and from each section we want to grab artists and shapes to add delay
const sections = document.querySelectorAll('.section')

sections.forEach((section, index) => {
    const artists = section.querySelectorAll('.lineup li')
    const shapes = section.querySelectorAll('.shape')

    artists.forEach((artist, index) =>{
        const delay = index * 100
        artist.style.transitionDelay = index * delay + 'ms'
    })

    shapes.forEach((shape, index) =>{
        //We are setting to only start once all the artists have faded in using the length property
        const delay = (artists.length + index) * 100
        shape.style.transitionDelay = delay * 'ms'
    })
});

const scrollLinks = document.querySelectorAll('.js-scroll')

scrollLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        const href =link.getAttribute('href')
        console.log(href)
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        })
    })
})
