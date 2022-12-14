var commands = document.getElementById("commands");
var user_input = document.getElementById("user_input");
var terminal_outputs = document.getElementById("terminal_outputs");

function execute(input){
    let output;
    input = input.toLowerCase();
    output = `<div>→ ${input}</div>`;
    if(!COMMANDS.hasOwnProperty(input)){
        output += `<div> No such command: ${input} </div>`;
    }
    else{
        output += `<div>${COMMANDS[input]} </div>`;
    }
    
    terminal_outputs.innerHTML = `${terminal_outputs.innerHTML+output}`;
}

function key(e){
    const input = user_input.value;

    if(e.key == "Enter"){
        execute(input);
        user_input.value = "";
        return;
    }

    user_input.innerHTML = input + e.key;
}

document.addEventListener("keypress", key);

const COMMANDS = 
{
    help:
    'Supported commands: ["about", "experience", "education", "skills", "contact"]',
    about:
    'Hello, my name is Andrew',
    experience: 
    'I have experience with Python, C, Java, JS and TS, and am familiar with React and Angular frameworks',
    skills:
    '',
    contact:
    ''
}