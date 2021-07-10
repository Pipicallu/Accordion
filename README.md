# Accordion
Welcome one and all to my accordion. With this exercise I took it upon myself to create something as thorough and as close to the original presented as I possibly could, in both form and function. A process that I found both a little frustrating (which is a great motivator for me) and thoroughly enjoyable. I have also put together this little write up where I will talk about my methodology aswell as the technologies and my thought process whilst navigating the obstacles in this fun challenge.

# UX

## User goals
- As a user I want to look at and insantly recognise that the accordion is an interactive object
- I want my curser to change to pointer as I hover over each tab.
- I want to recognise the plus signs as an indication that interacting with the tab will reveal the answer.
- I want each tab to open correctly upon click
- I want previous tabs to close in the accordion when a new one is pressed. 
- I expect the information found within the accordion to be relevant to me and common place enough to be part of an F.A.Q

## Site owner goals
- As a Site owner I want my accordion to be legible.
- I want the stylings to be clear and elements to be defined.
- I want the design to be intuitive and my use of colour and padding/margin to define each individual element
- I want my accordion to work on both mobile and desktop devices and for the design to suit accordingly
- I want the transitions and animations between tabs to be responsive accross all devices. 
- I want the transitions to run smoothly
- I want the user to be able to retain frequently asked information to reduce stressload on my Customer service team.

## Fonts
Finding the correct font to match the example given was one of the most fun parts of this challenge. I really revelled in the minutiae of looking through google fonts and comparing the tail ends of *a* or the curve of the letter *e* until I found the Heebo and Monsterrat pairing. The former was used for the title and h3 elements with the latter being reserved for content. I knew instantly that I was dealing with a font in the 'Sans-serif' family so that helped rule out a lot of unnecessary options. 
I used google fonts to then judge the font weight and applied their CDN link to my index page.

## Colour Palette:
![colour palette](/media/Capture.PNG)

## Icons 

Although I identified that Css entities were used for the plus and minus symbols, as a personal preference I decided to use font awesomes range of svgs as I felt that their rounded aesthetic went better with the accordions slightly rounded borders.

- Plus unicode = '\f067'
- Minus unicode = '\f068'
    
# Features
Getting the accordion functionality to be as smooth and flowing as the example shown was certainly a challenge and something I knew I needed to dedicate the most time to. You may find that in an earlier commit of the app.js file you will see that I was using two individual forEach loops, one to add the class and one to check for the class added. This coupled with the max-height transition created a delay between opening and closing elements, which looked super clunky and unappealing. I was able to over come this by employing one for each loop and two logic statements one which first checks for the opened-accordion class and closes it and then proceeds to toggle that class for the element that is clicked. I am happy to report that the transitions are as smooth as they could be. 

You find that the accordion works as expected accross all formats.

## features to be implemented
talk about how you think you could improve visuals for user

# Technologies Used
## HTML
- I thought of the accordion as a form and I based the html off of bootstraps own examples, I knew I would need to interact with the content as the nextElementSibling so I laid out the html in that fashion.

## SCSS/CSS 
- I used sass compiler in vs code to create mixins and variables and streamline the whole css process. The variables proved helpful when adding mobile break points as well as providing darker colour variation to the text in the content section so as to make it stand out more.

## JavaScript
- The majority of my methodology was explained in the features section but It was a great revision into loops and I feel as though I will continue to challenge myself to little exercises like these in the weeks to come, certainley helps keep my logic skills sharp. I learned a lot from this.

# Testing
    ## html 
    - when passed through an HTML validator  there was a context error where the element *h3* not allowed as child of element *button* this was resolved by changing the element to a span and adding the classes *Question* and *icon* to both spans within the button objects.

    ##CSS 
    - there is an error where none is not a flex-direction value : none but that was necessary as it was used in a mixin in order to add a null value to flex direction.

    ## JavaScript
    - A few warnings around arrow functions and const only being used in es6 and to use mozilla extensions in -moz-.
    - there was one missing semi-colon that was corrected.


# Challenges
    talk about the different approaches in JS.
    how initially you were relying on the transition in css but it was causing a delayed animation.
    time constraints because of moving

# Deployment
    steps to deploy


# Reflections
