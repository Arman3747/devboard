
var items = document.getElementsByClassName('btnnn-completed');

for(let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {

        if(items[i].classList.contains("bg-[#3752FD]") === true)
        {
        
        //01 - alert
        alert("Board Updated Successfully!");

        //02 - task remaining
        const taskRemaining = document.getElementById('task-remaining');
        const numberCountingString = taskRemaining.innerText;
        let numberCountingNumber = parseInt(numberCountingString);
        //Final alert
        if(numberCountingNumber === 1)
        {
            alert("Congratulations! You have completed all the current tasks.");
        }

        numberCountingNumber -=1;
        taskRemaining.innerText = numberCountingNumber;

        //03 - task completed
        const taskCompleted = document.getElementById('task-completed');
        const taskCompletedString = taskCompleted.innerText;
        let taskCompletedNumber = parseInt(taskCompletedString);
        taskCompletedNumber +=1;
        taskCompleted.innerText = taskCompletedNumber;

        //04 - color change  // delete - bg-[#3752FD]  // add - bg-[#CED6FF]
        items[i].classList.remove("bg-[#3752FD]");
        items[i].classList.add("bg-[#CED6FF]");


        //05 - Activity log add comments

        //05 - 01 - Get the time
        const now = new Date();
        const showTime = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });

        //05 - 02 - Get the Message
        const displayMessage = items[i].parentNode.parentNode.parentNode.children[0].children[1].innerText;

        //05 -03 - Full Message
        const commentElementParagraph = document.createElement('p');
        commentElementParagraph.innerText = "You have Complete The Task -> "+ displayMessage + " at " + showTime;

        //05 - 04 - keep the Message inside a div and add classes
        const commentElementDiv = document.createElement('div');
        commentElementDiv.appendChild(commentElementParagraph);
        commentElementDiv.classList.add('bg-[#F4F7FF]');
        commentElementDiv.classList.add('m-4');
        commentElementDiv.classList.add('p-4');
        commentElementDiv.classList.add('rounded-lg');
        commentElementDiv.classList.add('text-base');
        commentElementDiv.classList.add('font-medium');
        commentElementDiv.classList.add('drop-shadow-sm');
        
        //06 Add Message in the comment Container div
        const commentContainer = document.getElementById('comment-container');
        commentContainer.appendChild(commentElementDiv);

        }else
        {
            console.log("Button is disabled! All tasks are completed.")
        }
  });
}

//Clear Activity section
document.getElementById('clear-history')
    .addEventListener('click',function(){
        document.getElementById('comment-container').innerHTML='';
});


//change color

function changeColor(){
    let hexLetters = "0123456789ABCDEF"; 
    let bgColor = '#'; 
      
    for (let i = 0; i < 6; i++) 
        bgColor += hexLetters[(Math.floor(Math.random() * 16))]; 
      
    return bgColor;
}

document.getElementById('change-color')
    .addEventListener('click', function(){
        const bodyColor = document.getElementById('body-id');
        bodyColor.classList = "";

        let newColorCode = "bg-["+changeColor()+"]";

        bodyColor.classList.add(newColorCode);
});


// Calender

const tDate = new Date();
weekAndDate = tDate.toDateString();
thisDay = weekAndDate.slice(0,4);
thisDate = weekAndDate.slice(4,);

window.addEventListener("load",function(){
    let weekDay = this.document.getElementById('week-day');
    weekDay.innerText = thisDay;

    let monthDateYear = this.document.getElementById('month-date-year');
    monthDateYear.innerText = thisDate;
});

//Blog link

document.getElementById('blog-link').addEventListener('click',function(){

    window.location.href="blogs.html";
});

