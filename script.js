const startbtn = document.getElementById("start");
const stopbtn = document.getElementById("stop");
const speakbtn = document.getElementById("speak");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("Activated");
};
 recognition.onend = function () {
   console.log("Deactivated");
 };

startbtn.addEventListener("click", () => {
  recognition.start();
  console.log("Listening")
});

 stopbtn.addEventListener("click", () => {
   recognition.stop();
 });

// speakbtn.addEventListener("click", () => {
//   readOut("hello sir i am hp you personalized voice assistant");
// });

// Function for audio of AI
function readOut(message) {
  const speech = new SpeechSynthesisUtterance();

  const allVoices = speechSynthesis.getVoices();
  speech.text = message;
  speech.voice = allVoices[6];
  speech.pitch = 0.6;
  speech.volume = 1;

  window.speechSynthesis.speak(speech);
  console.log("speaking out");
}




window.onload = function () {
  readOut("   ");
};

recognition.onresult = function (event) {
  let current = event.resultIndex;
  let transcript = event.results[current][0].transcript;
  transcript = transcript.toLowerCase();
  console.log(transcript);

  if (transcript.includes("hello hp")) {
    readOut("hello sir");
    console.log("hello sir");
  }
  if(transcript.includes("what can you do"))
  {
    readOut("i have been designed to assist with a range of tasks including answering questions providing information helping with problem-solving, and generating text based on various prompts i can help you research topics offer explanations or even engage in conversation is there something specific you like assistance with today")
  }
  if( (transcript.includes("how are you friend")) || (transcript.includes("how are you my friend")) ) {
    readOut(
      "i am too good sir & i hope you too and ready to execute commands which you give me"
    );
  }
  
  if (
    transcript.includes("who design you") ||
    transcript.includes("who designed you")
  ) {
    readOut(
      "i am designed by harsh using javascript functionalities which makes me more advanced to work upon"
    );
  }

 
  if (
    transcript.includes("give your intro hp") ||
    transcript.includes("give your intro")
  ) {
    readOut(
      "i am hp x64 bit based 11th gen intel core processor with speed of 2.40 gigahertz and 8gb storage created to personlized the tasks and reduce overload of user"
    );
  }

  if (transcript.includes("can you sing a song")) {
    readOut(
      "sorry User I don not have functionality of singing a song but you can search for any song and i will show you results");
    console.log("hello sir");
  }

  if (
    transcript.includes("hey hp can you open youtube") ||
    transcript.includes("hp can you open youtube") ||
    transcript.includes("open youtube")
  ) {
    readOut("Sure User");
    window.open("https://www.youtube.com/");
  }

  if (
    transcript.includes("open google") ||
    transcript.includes("open chrome")
  ) {
    readOut("got it here is your result");
    window.open("https://www.google.com/");
  }

  if(transcript.includes("open chat gpt"))
  {
    readOut("sure user here is your result");
    window.open("https://chatgpt.com/?iss=https%3A%2F%2Fauth0.openai.com%2F")
  }
  if( (transcript.includes("can you open facebook"))||(transcript.includes("open facebook")) )
  {
    readOut("why not")
    window.open("https://facebook.com/")
  }
  if((transcript.includes("can you open instagram for me"))||(transcript.includes("open instagram")))
    {
      readOut("yes ofcoarse anything for you")
      window.open("https://instagram.com/")
    }
  
    if(transcript.includes("open whatsapp"))
    {
      readOut("i like to do work for you")
      window.open("https://whatsapp.com/")
    }
    
  if((transcript.includes("i want to open my gmail account"))||(transcript.includes("open gmail")))
  {
    readOut("why not i am opening your gmail account")
    window.open("https://gmail.com/")
  }

  
  if(transcript.includes("can you turn on my pc"))
  {
    readOut("nice joke user but i do not find it so funny if you want to turn it off then please gave me command")

  }
  if(transcript.includes("i want to create my resume"))
  {
    readOut("you can make your resume from hackerrank resume dashboard")
    window.open("https://www.hackerrank.com/resume/dashboard")
  }





  if (transcript.includes("show me information about")) {
    let city = transcript.split("");
    city.splice(0,25);
    let cname = city.join("");
    city = city.join("").split(" ").join("+");
    readOut(`got it here is the city named of ${cname}`);
    window.open(`https://www.google.com/search?q=${city}`);
  }




  if (transcript.includes("search on google")) {
    let input = transcript.split("");
    input.splice(0, 16);
    let videoName = input.join("");
    input = input.join("").split(" ").join("+");
    readOut(`got it here are results which i found for ${videoName}`);
    window.open(`https://www.google.com/search?q=${input}`
    );
   
  }
      if (transcript.includes("search on youtube")) {
        let input2 = transcript.split("");
        input2.splice(0, 17);
        let videoName = input2.join("");
        input2 = input2.join("").split(" ").join("+");
        readOut(`definitely here are your results ${videoName}`);
        window.open(`https://www.youtube.com/search?q=${input2}`
        );
      }
  
};


