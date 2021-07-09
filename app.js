// creates a static list of all elements containing said class.
var questions = document.querySelectorAll(".accordion-button");

// forEach allows us to access each element within the array.
questions.forEach((question) => {
    question.addEventListener("click", () =>{
            // checks if there are any opened accordions
            const openedAccordion = document.querySelector(".accordion-button.opened-accordion");
            // checks to make sure the opened accordion is not equal to clicked element
            if (openedAccordion && openedAccordion!==question){
                openedAccordion.classList.toggle("opened-accordion");
                openedAccordion.nextElementSibling.style.maxHeight = 0;
            }
            
            question.classList.toggle("opened-accordion");
            const accordionContent = question.nextElementSibling;
            if (question.classList.contains("opened-accordion")){
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        }else{
            accordionContent.style.maxHeight = 0; 
        }
    })
    
});