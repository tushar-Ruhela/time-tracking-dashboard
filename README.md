# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
- [Author](#author)



## Overview
In this project we made a time tracking dashboard which give the data of daily weekly monthly according to user.


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot
![alt text](design/active-states.jpg)
![alt text](design/desktop-preview.jpg)
![alt text](design/mobile-design.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- javascript



### What I learned
in this project we learn fetch data from json file and other thing like change the data of every div
when we click on particular button.

async function timechange(time) {
  const data = await fetch("./data.json");
  const res = await data.json();
  console.log(res);

  const currentTime = workCard.children[0]; 
  const previousTime = workCard.children[1];
  currentTime.innerHTML = res[0].timeframes[time].current + "hrs";
  previousTime.innerHTML = `${time === 'daily' ? 'yesterday'  : time === 'weekly' ? 'last week' : 'last month'} =` +res[0].timeframes[time].previous + "hrs";
}


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

