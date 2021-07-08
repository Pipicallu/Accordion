// creates a static list of all elements containing said class.
var questions = document.querySelectorAll(".accordion-button");

// forEach allows us to access each element within the array.
questions.forEach((question) => {
    question.addEventListener("click", () =>{
        if(question.classList.contains("opened-accordion")){
            question.classList.remove("opened-accordion")
        }else{
            // checks to see which elements already have the opened class
            const questionsOpened = document.querySelectorAll(".opened-accordion");
            // proceeds to remove any instances of the remained class.
            questionsOpened.forEach((questionOpen) =>{
                questionOpen.classList.remove("opened-accordion");
            }) 
            question.classList.add("opened-accordion");
        }
    })
    
});