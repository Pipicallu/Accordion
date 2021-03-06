# [Accordion](https://pipicallu.github.io/Accordion/)
Welcome one and all to my accordion. With this exercise I took it upon myself to create something as thorough and as close to the original presented as I possibly could, in both form and function. A process that I found both a little frustrating (which is a great motivator for me) and thoroughly enjoyable. I have also put together this little write up where I will talk about my methodology, aswell as the technologies and my thought process whilst navigating the obstacles in this fun challenge.

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

Although I identified that CSS entities were used for the plus and minus symbols, as a personal preference I decided to use font awesomes range of svgs as I felt that their rounded aesthetic went better with the accordions slightly rounded borders.

- Plus unicode = '\f067'
- Minus unicode = '\f068'
    
# Features
Getting the accordion functionality to be as smooth and flowing as the example shown was certainly a challenge and something I knew I needed to dedicate the most time to. You may find that in an earlier commit of the app.js file you will see that I was using two individual forEach loops, one to add the class and one to check for the class added. This coupled with the max-height transition created a delay between opening and closing elements, which looked super clunky and unappealing. I was able to over come this by employing one for each loop and two logic statements one which first checks for the opened-accordion class and closes it and then proceeds to toggle that class for the element that is clicked. I am happy to report that the transitions are as smooth as they could be. 

You find that the accordion works as expected accross all formats.

The mobile breakpoint width is 480px as is industry standard with mobile devices.

## features to be implemented
given more time and SCOPE It would have been interesting to add hover effects to elements as they are scrolled over. Perhaps a slight box shadow to selected elements inorder to amplify user experience. Plus I'm always tempted to add dark mode. 

# Technologies Used
## HTML
- I thought of the accordion as a form and I based the html off of bootstraps own examples, I knew I would need to interact with the content as the nextElementSibling so I laid out the html in that fashion.

## SCSS/CSS 
- I used sass compiler in vs code to create mixins and variables and streamline the whole css process. The variables proved helpful when adding mobile break points as well as providing darker colour variation to the text in the content section so as to make it stand out more.
- Positioning was also used for the icons as I noticed they sit exactly parallel to the end of the border-top for the content of each accordion element.

## JavaScript
- The majority of my methodology was explained in the features section but It was a great revision into loops and I feel as though I will continue to challenge myself to little exercises like these in the weeks to come, certainley helps keep my logic skills sharp. I learned a lot from this.

# Testing

## html 
- when passed through an HTML validator  there was a context error where the element *h3* not allowed as child of element *button* this was resolved by changing the element to a span and adding the classes *Question* and *icon* to both spans within the button objects.

## CSS 
- All the CSS for the site was tested using https://jigsaw.w3.org/css-validator/validator
- there is an error where none is not a flex-direction value : none but that was necessary as it was used in a mixin in order to add a null value to flex direction.

## JavaScript
- All the JavaScript for the site was tested using https://jshint.com/
- A few warnings around arrow functions and const only being used in es6 and to use mozilla extensions in -moz-.
- there was one missing semi-colon that was corrected.

## Responsiveness

I used Am I Responsive and Responsinator to ensure that my app worked on multiple devices. The latter was expecially helpful when wanting to check out horizontal orientations on mobile devices.

As well as chrome developer tools, which has the provision to test on:

- Samsung Galaxy - Responsive

- Pixel 2 - Responsive

- Pixel 2 XL - Responsive

- iPhone 5s/Se/6/7/8/X - Responsive

- iPad 9.7" - Responsive

- iPad Pro - Responsive

- Surface Duo - Responsive

- Galaxy Fold - Responsive

- I also had a friend open it up on the latest 12 pro and 12 pro max iPhones.

## Compatibility

To ensure a broad range of users can successfully use this site, I tested it across the 6 major browsers in both desktop and mobile configuration.

Chrome - latest version Edge - latest version Firefox - latest version Safari - latest version Opera - latest version


# Personal Challenges

- I have already spoken in length about my process inorder to get the right functionality from the transition.

- I also had a little trouble with the aligning of both my question and icon elements but that was soon resolved with the use of display: inline-flex;  and align-items: center; property.


Besides ensuring that my code reflected the example shown a lot of the challenge that I faced was around time completion, as this week happened to coincide with my moving date, aswell as full time work. Therefore I had to break up the project over a couple of days. Ensuring that I had enough time In the day to dedicate to getting the most out of this exercise was key and also helped me to look forward to working on it when I came home from a long day's work. I was successfull in doing so by breaking down the responsibilites the first day dedicated to developing the MVP and the second to refining it  with time left over to do the write up. 

# Deployment
Make sure the following are installed: 
- VScode or any preferred ide.
- GIT for cloning and version control.

- Clone this GitHub repository by either clicking the  "**Code**" button with the downward facing arrow to the left of it above in order to download the project as a zip-file (remember to unzip it first), or by entering the following command into the Git CLI terminal:
    - `git clone https://github.com/Pipicallu/Accordion`

- Navigate to the correct file location after unpacking the files.
    - `cd <path to folder>`

- be sure to have both Sass compiler and Live server extensions active and installed.

- open live server in command palette.

- select go live, your project should be running on http://127.0.0.1:5500/

and thats about it folks!    


# Reflections
I enjoyed this challenge. Not only as it challenged me to replicate a piece of code from an image but it was also gave me a glimpse of the type of work I will be doing should I be successfull throughout this process. David told me that at Experian we work as part of a tech team that interacts with other teams accross the company, so I figured good documentation and git commit protocol would be greatly necessary and appreciated, I know that I am always grateful to see it myself. I had a great time throwing myself into this and I hope it shows in the quality of my code. I look forward to your feedback.

-Thomas.