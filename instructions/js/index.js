const today = new Date();
const thisYear = today.getFullYear();
var footer = document.querySelector("#copyright");
const copyright = document.createElement("p");
copyright.innerHTML = ` roselynn ${thisYear}`;
footer.appendChild(copyright);

const skills = ['Html,Css and Javascript','Drupal','Q|A with webdriversIO','Service Now'];
let skillsSection = document.getElementById("skills")
let skillList = skillsSection.querySelector('ul') //grabs ul element from #skills 

for(let i = 0; i < skills.length; i ++){ 
    let skill = document.createElement("li")
    skill.innerText = skills[i];
    skillList.appendChild(skill)

}

//Handle Message Form Submit
const messageForm = document.querySelector('form[name="leave_message"]');
messageForm.addEventListener("submit", myFunction);

//creating callback function
function myFunction(){
event.preventDefault();
const eventTarget = event.target ;//event is the submit;  target is the form.
const firstInput = eventTarget.querySelector('input[name="name"]');
console.log(firstInput.value);
const secondInput = eventTarget.querySelector('input[type="email"]');
console.log(secondInput.value);
const thirdInput = eventTarget.querySelector('#message');
console.log(thirdInput.value);


//Display message in List
const messageSection = document.getElementById("messages");
const messageList = messageSection.querySelector('ul');
const newMessage = document.createElement("li");
newMessage.innerHTML = `<a href="mailto: ${secondInput}">${firstInput}</a> wrote:  <span>${thirdInput}</span>`;


const removeButton = document.createElement("button");
    removeButton.innerText="remove";
    removeButton.type="button";

   removeButton.addEventListener("click", ()=>{
     const entry = removeButton.parentNode;
     entry.remove();
    });

   messageList.appendChild(newMessage);
   newMessage.appendChild(removeButton);


   messageSection.hidden = false;

    messageForm.reset();
};

