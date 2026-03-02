const inputdate = [
  {
    id: 1,
    type: "mcq",
    question: "What is JavaScript?",
    options: ["Programming Language", "Database", "Operating System", "Browser"],
    answer: "Programming Language"
  },
  {
    id: 2,
    type: "mcq",
    question: "Which keyword is used to declare a variable?",
    options: ["var", "let", "const", "All of the above"],
    answer: "All of the above"
  },
  {
    id: 3,
    type: "truefalse",
    question: "JavaScript is a statically typed language.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 4,
    type: "mcq",
    question: "Which symbol is used for single-line comments?",
    options: ["<!-- -->", "//", "/* */", "#"],
    answer: "//"
  },
  {
    id: 5,
    type: "mcq",
    question: "Which operator checks value and type?",
    options: ["==", "=", "===", "!="],
    answer: "==="
  },
  {
    id: 6,
    type: "truefalse",
    question: "let and const are block scoped.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 7,
    type: "mcq",
    question: "Which loop executes at least once?",
    options: ["for", "while", "do...while", "foreach"],
    answer: "do...while"
  },
  {
    id: 8,
    type: "mcq",
    question: "Which data type is NOT primitive?",
    options: ["Number", "String", "Boolean", "Object"],
    answer: "Object"
  },
  {
    id: 9,
    type: "truefalse",
    question: "Functions can return values.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 10,
    type: "mcq",
    question: "Which method is used to print output in console?",
    options: ["console.write()", "console.log()", "print()", "log.console()"],
    answer: "console.log()"
  },
  {
    id: 11,
    type: "mcq",
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Document Oriented Model",
      "Dynamic Object Method"
    ],
    answer: "Document Object Model"
  },
  {
    id: 12,
    type: "truefalse",
    question: "querySelector selects multiple elements by default.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    id: 13,
    type: "mcq",
    question: "Which function runs code after a delay?",
    options: ["setInterval()", "setTimeout()", "delay()", "timer()"],
    answer: "setTimeout()"
  },
  {
    id: 14,
    type: "mcq",
    question: "Which keyword stops a loop?",
    options: ["exit", "stop", "break", "return"],
    answer: "break"
  },
  {
    id: 15,
    type: "truefalse",
    question: "Arrow functions use the => syntax.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 16,
    type: "mcq",
    question: "Which event occurs when a button is clicked?",
    options: ["onhover", "onclick", "onload", "onchange"],
    answer: "onclick"
  },
  {
    id: 17,
    type: "mcq",
    question: "Which operator is used for logical AND?",
    options: ["||", "&&", "!", "&"],
    answer: "&&"
  },
  {
    id: 18,
    type: "truefalse",
    question: "Arrays can store multiple data types.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    id: 19,
    type: "mcq",
    question: "Which keyword is used to define a constant?",
    options: ["var", "let", "const", "static"],
    answer: "const"
  },
  {
    id: 20,
    type: "mcq",
    question: "Which method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()"
  }
];

//=============================================================================================//

//bady logic
const body = document.querySelector("body");
body.style.backgroundImage = "url('./bg.jpg')";
body.style.backgroundSize="cover"
body.style.alignItems = "center";
body.style.backgroundPosition="center"
body.style.height="90vh"
body.style.fontSize="20px"

// Container logic
let cont=document.getElementById("containerx")
cont.style.marginInline="15%"
cont.style.marginTop="30px"
cont.style.height="70vh"
cont.style.backgroundColor="rgba(252, 251, 207, 0.7)"
cont.style.alignItems="center"
cont.style.display = "flex";
cont.style.flexDirection = "column";

//main logic
let main=document.getElementById("main")
main.style.alignItems="center"
main.style.height="50vh"

//button logic
let btncont=document.getElementById("btn")
btncont.style.marginBlock="auto"
let btn = document.querySelectorAll(".button");

btn.forEach(button => {
  button.style.padding = "5px 10px 5px 10px";
  button.style.fontSize = "20px";
  button.style.fontWeight="600"
  button.style.border = "none";
  button.style.backgroundColor = "rgb(177, 5, 105)";
  button.style.color = "white";
  button.style.borderRadius = "6px";
});

// Timer Button
  const timercont = document.getElementById("timercont");
  timercont.style.display="flex"
  timercont.style.alignSelf = "flex-end";

  const timerBtn = document.getElementById("timer");
  timerBtn.style.paddingInline = "15px";
  timerBtn.style.paddingBlock = "10px";
  timerBtn.style.margin = "50px 50px 0px 0px";
  timerBtn.style.marginLeft="auto"
  timerBtn.style.fontSize = "22px";
  timerBtn.style.fontWeight = "bold";
  timerBtn.style.borderRadius = "6px";
  timerBtn.style.color = "rgb(177, 5, 105)";
  timerBtn.style.backgroundColor="rgba(252, 251, 207, 0.7)"

//-----------------------------------------------------------------------------------------------//

document.getElementById("Start").addEventListener("click",start,timerfun);
let len=0;
let numquest=inputdate.length

//Main page
function start(){
  questionfun(len);
  timerfun();
  button();

}

// Timer logic--------------------------------------------------------------------------------//

let interval

function timerfun(){
  const timer = document.getElementById("timer");
  let time = numquest*15;

  clearInterval(interval);
  timer.textContent = "Time Left: "+time+" Sec";

  interval = setInterval(() => {
    time--;

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    timer.textContent = 
      `Time Left: ${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

    if (time <= 0) {
      clearInterval(interval);
      timer.textContent = "Time Up!";
      showResult()
    }
  }, 1000);
}

//Answer array------------------------------------------------------------------------------------------------------//

let userAnswers=[];

// Buttons------------------------------------------------------------------------------------//

function button(){
  btncont.innerHTML=""

  const prevBtn = document.createElement("button");
  prevBtn.id = "pre";
  prevBtn.textContent = "Previous";
  prevBtn.type = "button";

  const nextBtn = document.createElement("button");
  nextBtn.id = "nxt";
  nextBtn.textContent = "Next";
  nextBtn.type = "button";

  [prevBtn, nextBtn].forEach(btn => {
    btn.style.padding = "5px 10px";
    btn.style.fontSize = "20px";
    btn.style.fontWeight = "600";
    btn.style.border = "none";
    btn.style.backgroundColor = "rgb(177, 5, 105)";
    btn.style.color = "white";
    btn.style.borderRadius = "6px";
    btn.style.margin = "10px";
    btn.style.marginInline = "100px";
  });

  btncont.appendChild(prevBtn);
  btncont.appendChild(nextBtn);
  visible(len)

  prevBtn.addEventListener("click",()=>{
    len--
    visible(len)
    if(len<numquest && len>=0){
      questionfun(len);
    }
  })

  nextBtn.addEventListener("click",()=>{
    len++;
    visible(len)
    if(len<numquest && len>=0){
      questionfun(len);
    }
  })
  function visible(len){
    if (len==0){
      prevBtn.style.visibility= "hidden";
      nextBtn.style.visibility= "visible";
    }
    else if (len==numquest){
      prevBtn.style.display="none"
      nextBtn.style.display="none"
      submit()
    }
    else{
      prevBtn.style.visibility= "visible";
      nextBtn.style.visibility= "visible";
    }
  }
}

function submit(){
  const submitBtn = document.createElement("button");
      submitBtn.id = "submit";
      submitBtn.textContent = "Submit";
      submitBtn.type = "button";
      submitBtn.style.padding = "5px 10px";
      submitBtn.style.fontSize = "20px";
      submitBtn.style.fontWeight = "600";
      submitBtn.style.border = "none";
      submitBtn.style.backgroundColor = "rgb(177, 5, 105)";
      submitBtn.style.color = "white";
      submitBtn.style.borderRadius = "6px";
      submitBtn.style.margin = "10px";
      submitBtn.style.marginInline = "200px";

      btncont.appendChild(submitBtn);

      submitBtn.addEventListener("click", showResult);

}

//Result--------------------------------------------------------------------------------------------------------------//

function showResult(){

  let score = 0;

  inputdate.forEach((q, i) => {
    if (userAnswers[i] === q.answer) {
      score++;
    }
  });

  main.innerHTML=""
  btncont.innerHTML=""
  timercont.style.visibility="hidden"

  main.innerHTML = `
    <h1>Congratulations!</h1>
    <p>Great job! You’ve done really well. Keep learning and keep winning! 💪✨</p>
    <h2>Quiz Result</h2>
    <p>Total Questions: ${inputdate.length}</p>
    <p>Correct Answers: ${score}</p>
    <p>Wrong Answers: ${inputdate.length - score}</p>
    <h3>Score: ${score} / ${inputdate.length}</h3>
  `;
}

// Function MCQ-----------------------------------------------------------------------------------------------------//

function questionfun(index) {
  // Container
  main.innerHTML=""

  // Form
  const quizForm = document.createElement("form");
  quizForm.style.margin="20px"
  quizForm.style.width="50vw"
  quizForm.style.display="grid"
  quizForm.style.gridTemplateColumns="4fr"
  quizForm.style.alignSelf = "flex-start";
  
 // Question
  const label = document.createElement("label");
  label.textContent = inputdate[index].id+ ". " + inputdate[index].question;

  // Options container
  const optionsDiv = document.createElement("div");

  if (inputdate[index].type === "mcq") {
    inputdate[index].options.forEach(opt => {
      const optionLabel = document.createElement("label");
      optionLabel.style.display = "block";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "answer";
      radio.value = opt;
      
      // ✅ Restore selected answer
        if (userAnswers[index] === opt) {
          radio.checked = true;
          label.classList.add("selected");
        }

        radio.addEventListener("change", () => {
          userAnswers[index] = opt;

          optionsDiv.querySelectorAll(".option")
            .forEach(el => el.classList.remove("selected"));

          label.classList.add("selected");
        });
      
      optionLabel.appendChild(radio);
      optionLabel.append(" " + opt);
      optionsDiv.appendChild(optionLabel);
    });
  }

  else if (inputdate[index].type === "truefalse") {
    ["True", "False"].forEach(opt => {
      const label = document.createElement("label");
      label.style.display = "block";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "answer";
      radio.value = opt;

        if (userAnswers[index] === opt) {
          radio.checked = true;
          label.classList.add("selected");
        }

        radio.addEventListener("change", () => {
          userAnswers[index] = opt;

          optionsDiv.querySelectorAll(".option")
            .forEach(el => el.classList.remove("selected"));

          label.classList.add("selected");
        });

      label.appendChild(radio);
      label.append(" " + opt);
      optionsDiv.appendChild(label);
    });
  }

  // Assemble form
  quizForm.appendChild(label);
  quizForm.appendChild(document.createElement("br"));
  quizForm.appendChild(optionsDiv);

  main.appendChild(quizForm);
   
}
