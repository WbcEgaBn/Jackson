const Discord = require('discord.js');
const keepAlive = require("./server")
const nextBreak = "2023-12-20 00:00:00 EST";
const grad = "2024-06-01 00:00 EST";
const RD1 = "2024-01-01 00:00 EST"
const RD2 = "2024-01-15 00:00 EST"
const client = new Discord.Client();
wrong = 0;

 const females = [
   "Alisha Abdullaev",
   "Madison Adams",
   "Sohana Addagada",
   "Ria Agarwal",
   "Danielle Al-Annouf",
   "Abby Alexander",
   "Bhini Arora",
   "Saathvi Arunkumar",
   "Olivia Austria",
   "Liliana Avila",
   "Madison Ayers",
   "Hareesha Baranidharan",
   "Erin Borgese",
   "Mya Brooks",
   "Erica Brown",
   "Megan Carp",
   "Kadyn Carpenter",
   "Elena Caruso",
   "Jessica Choi",
   "Jennifer Chong",
   "Olivia Ciavarelli",
   "Georgia Colborn",
   "Catherine Cole",
   "Catherine Conaty",
   "Camryn Cross",
   "Callie Cunningham",
   "KeyMani Custis",
   "Iness Daho-Bachir",
   "Asmita De",
   "Charlotte deLeeuw",
   "Jane DeVoll",
   "Ava DiBiase",
   "Caroline Dooley",
   "Micah Dulos",
   "Tyresha Duncan",
   "Madison Dunford",
   "Haley Eck",
   "Kal-Kidan Endashaw",
   "Natalie Fannin",
   "Sydney Farrell",
   "Avalin Fawcett",
   "Arden Fennimore",
   "Sofia Fields",
   "Charlotte Finnie",
   "Kira Fleetwood",
   "Amelie Flokiewicz",
   "Molly Freel",
   "Ella Gandolfo",
   "Emma Gaz",
   "Abby Goodwin",
   "Julia Hable",
   "Yohanna Hailu",
   "Sarah Haimowitz",
   "Amna Hayat",
   "Kate Hoban",
   "Maya Hogan",
   "Olivia Jones",
   "Sydney Jones",
   "Sai Kamila",
   "JiYu Kang",
   "Danielle Kanse",
   "Felicia Karosi",
   "Mia Keane",
   "Lucy Kennedy",
   "Sophia Kenney",
   "Evelyne Kim",
   "Taryn Kim",
   "Niyathi Kukkapalli",
   "Isheta Kulshreshtha",
   "Chastity Lam",
   "Shiloh Lee",
   "Joyce Li",
   "Shanna Louis",
   "Ava Lutrzykowski",
   "Claire McCann",
   "Zaniah McCarthy",
   "Anh-Linh McCaskill",
   "Suhani Mehta",
   "Krupa Movva",
   "Iveena Mukherjee",
   "Sanjana Nalavolu",
   "Natalie Nycz",
   "Itzel Olmos-Sanchez",
   "Jane Oommen",
   "Ashini Pachauri",
   "Juliana Padilla",
   "Aadyasachi Pallem",
   "Anna Park",
   "Victoria Phillips",
   "Sahaana Rajagopalan",
   "Calista Rakshit",
   "Alexa Ramos",
   "Selah Reap",
   "Alaina Reynolds",
   "Adelyn Roth",
   "Ava Ruggieri",
   "Jasmine Sabol",
   "Ishita Sai",
   "Emily Scalia",
   "Catherine Schofield",
   "Simra Shaik",
   "Ankita Sharma",
   "Naomi Sica",
   "Natalia Silva-Romero",
   "Emily Spangler",
   "Srivyshnavi Srinivasan",
   "Ella Stack",
   "Abigail Stephan",
   "Katherine Surles",
   "Rebecca Tan",
   "Dhriti Tattari",
   "Elena Taylor",
   "Miranda Ting",
   "Aryanna Toomer",
   "Kayden Tran",
   "Allyson Vannatter",
   "Gloria Villicana-Magana",
   "Hannah White",
   "Samantha Whiteman",
   "Aubrey Winslow",
   "Amber Wong",
   "Kadence Young",
   "Erica Zavala",
   "Cynthia Zhang",
   "Luna Zurita",
 ];

 const males = [
   "Rameen Abid",
   "Anish Agarwal",
   "Rudra Agarwal",
   "Aryan Ajesh",
   "Kayden Akins",
   "Muaazurahman Akram",
   "Anthony Amato",
   "Amleto Antenucci",
   "Matthew Arce",
   "Navin Armstrong",
   "Justin Arnao",
   "Andrew Artis",
   "Franklyn Arvelo",
   "Benjamin Ashley",
   "Ryan Atkins",
   "Praneet Bandla",
   "Reshma Bejjanki",
   "Cody Bowers",
   "Nicholas Boyle",
   "Jack Brangers",
   "Benjamin Bufano",
   "Kauri Bullock",
   "Finn Burns",
   "Kyle Callahan",
   "James Campbell",
   "Alan Chen",
   "Bryce Chen",
   "Srijay Chenna",
   "Andrew Cheung",
   "Nathan Chiou",
   "Justin Clinch",
   "Lucas Conner",
   "Charlie Conway",
   "Shaun Cox",
   "Doug Davis",
   "Harsh Desai",
   "Amilcar Flores-Caceres",
   "Sergio Flores-Jaime",
   "John Foley",
   "Jimmy Fu",
   "Ethan Gage",
   "Tanmay Garudadri",
   "Kai Godfrey",
   "Joshuah Gomez",
   "Shiv Gour",
   "Brady Harach",
   "Kevin He",
   "Troy Hernandez",
   "Kenny Hua",
   "Kyle Immediato",
   "Ronan Jose",
   "Brandon King",
   "John Kuntz",
   "Abhi Lakkakula",
   "Benan Lambiro",
   "Miles Lamons",
   "Arthur Liu",
   "Alexis Lopez-Guerin",
   "Jordan Madanat",
   "Joseph Mancuso",
   "Joshua Massett",
   "Joseph Meara",
   "Gerardo Medel-Jimarez",
   "Aryan Mehta",
   "Manthan Metha",
   "Rudivan Mench",
   "Ethan Moen",
   "Jackson (The Cracker) Mourtada",
   "Nathan Moyer",
   "Aadhi Narayan",
   "Alexander Norris",
   "Roman Oratorio",
   "William Outslay",
   "Jacob Palmer",
   "Patrick Palmer",
   "Domenick Paoli",
   "Roman Paoli",
   "Abhinav Parmar",
   "Om Patel",
   "Ruhan Patel",
   "Neehal Pathak",
   "Maksym Pohorylo",
   "Bhavesh Pothineni",
   "Luke Psaros",
   "Garrett Puzio",
   "Luke Rainey",
   "Rocco Rapposelli",
   "Suraj Reddy",
   "Roshan Rego",
   "Cooper Richle",
   "Benjamin Rosen",
   "Brighton Sagrans",
   "Keith Sanchez-Arriaga",
   "Brian Sand",
   "Finn Sclavounos",
   "Edward Scott",
   "Luke Sgroi",
   "Rishav Sharma",
   "Ben Shaver",
   "Hayden Sherlock",
   "Sahan Shinoj",
   "Kevin Short",
   "Jacob Skripchuk",
   "Brian Snyder",
   "William Snyder",
   "Ethan Sullivan",
   "Vibav Tandel",
   "Ishaan Tayal",
   "Ryan Terranova",
   "Joseph Trey",
   "Joseph Tubia",
   "Dominick Tweed",
   "Aadi Varshney",
   "Philip Warnock",
   "William Watt",
   "Fischer Wolhar",
   "James Wu",
   "Xiankang Zhao",
   "Daniel Zheng",
 ];

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
});

 client.on("message", msg => {
  if(Englihss(msg) && !sentByBot(msg)) {
    grammaticallyCorrect(msg);
  }
   
  if(msg.content === "for(female : list)") {
    for(const name of females) {
      msg.channel.send(name);
    }
  }
  
  if(msg.content === "for(male : list)") {
    for(const name of males) {
      msg.channel.send(name);
    }
  }
  
  if(msg.content === "/imbored") {
    msg.channel.send("Let\'s play rock paper scissors!");
    msg.channel.send("What do you pick? (type r, p or s)");
  }
  
  if(msg.content === "r" && !sentByBot(msg)) {
       msg.channel.send("I chose paper!");
       msg.channel.send("You lost LLLLLLLLL!!!");
       msg.channel.send("Get better kid.");
     } else if(msg.content === "p" && !sentByBot(msg)) {
       msg.channel.send("I chose scissors!");
       msg.channel.send("Imagine losing.");
       msg.channel.send("You are :DumAssFuq:");
     } else if(msg.content === "s" && !sentByBot(msg)) {
       msg.channel.send("I chose rock!");
       msg.channel.send("Your choices surprise me.");
       msg.channel.send("You cannot beat me!");
    } else if(msg.content === "g" && !sentByBot(msg)) {
       msg.channel.send("Kill");
       msg.channel.send("your");
       msg.channel.send("fucking");
       msg.channel.send("self");
       msg.channel.send("I would pull out a reverse card but I am a fuckin idot.");
  }
  
  if((msg.content.includes("plus") || msg.content.includes("minus") || 
     msg.content.includes("times") || msg.content.includes("divided by") || 
     msg.content.includes("over") || msg.content.includes("to the ") || 
    msg.content.includes("of")) && /\d/.test(msg.content) && !sentByBot(msg)) {
  
     msg.channel.send("It's " + calculateSentence(msg.content) + " dumbass. Go back to first grade you fucking idiot.");
  }
  
  if(msg.content === "/rizzgf") {
    msg.channel.send("Go rizz up " + females[getRandomNumber(0, 124)] + "!");
    msg.channel.send("She wants you sooooo bad.")
  }
  
  if(msg.content === "/rizzbf") {
    msg.channel.send("YOU LIKE " + males[getRandomNumber(0,118)] + "!!!???");
    msg.channel.send("EWWWWWW!!!")
  }

  if(msg.content === "/rd") {
    msg.channel.send("Between " + timeUntilDate(RD1, 2) + " and " + timeUntilDate(RD2, 2) + " days until regular decison depending on the school.");
    msg.channel.send("I hope you don't get into any.")
  }
  
  if (msg.content === "/school") {
    msg.channel.send("Get off discord bro")
    msg.channel.send("look at yourself, we just started school and you're already failing English.")
  }
  
  if (msg.content === "/break") {
    msg.channel.send("Time until Winter break is : " + timeUntilDate(nextBreak, 1) + ".");
    msg.channel.send("Or... " + timeUntilDate(nextBreak, 2) + " days.");
  }
  
  if (msg.content === "/graduate") {
    msg.channel.send("Time until you graduate : " + timeUntilDate(grad, 1) + ".");
    msg.channel.send("Unfortuately, that is still a long " + timeUntilDate(grad, 2) + " days.")
  }
  
  if (msg.content === "/jimmygf") {
    const randomNumber = getRandomNumber(10000000000000, 999999999999999);
    msg.channel.send("Time until Jimmy gets a girlfriend: " + randomNumber + " days.");
    msg.channel.send("Or... never.");
  }
  
  if(msg.content === "/jacksongf") {
    const randomNumber = getRandomNumber(1000, 999999);
    msg.channel.send("Time until Jackson gets a girlfriend: " + randomNumber + " days.");
    msg.channel.send("Or... never.");
  }
  
  if(msg.content === "/joshuahgf") {
    msg.channel.send("hauhsoj got a girlfriend like 74275913352 days ago!!");
    msg.channel.send("YAYAYAYAYAYAYAYAYAY!!");
    msg.channel.send();
  }
  
  if(msg.content === "/jamesgf" || msg.content === "/jamesbf") {
    msg.channel.send("Error: could not fit such large number in one msg.");
  }
  
  if((msg.content.includes("idk") || msg.content.includes("Idk")) && !sentByBot(msg)) {
    msg.channel.send("Why is it always you who doesn't know? How stupid are you? You really don't know? Mf can't say anything other than idk idk idk idk");
  }
  
  if(msg.content === "SHUT THE FUCK UP") {
    msg.channel.send("Ight, I'll stop talking.");
    process.exit();
  }
  
  if(msg.content.toLowerCase().includes("e") && msg.content.toLowerCase().includes("t") && 
     msg.content.toLowerCase().includes("a") && msg.content.toLowerCase().includes("o") && 
     msg.content.toLowerCase().includes("i") && msg.content.toLowerCase().includes("n") && 
     msg.content.toLowerCase().includes("s") && msg.content.toLowerCase().includes("r") && 
     !sentByBot(msg)) {
    msg.channel.send("you are so annoying");
  }
  
  if(msg.content.toLowerCase().includes("you are so annoying") && !sentByBot(msg)) {
    msg.channel.send(">:c");
    msg.channel.send("Dear, Jimmy");
    msg.channel.send("We have reviewed the content you posted and found that it violates our platform's rules regarding . As a result,stupidity we have taken the following action:");
    msg.channel.send("24 hour timeout.");
  }
  
  if((msg.content.toLowerCase().includes("kekw")) && !sentByBot(msg)) {
   msg.channel.send("Bro stop saying kekw");
  }
  
  if(msg.content.toLowerCase().includes("lmfao") && !sentByBot(msg)) {
    msg.channel.send("The word \"lmfao\" should only be used when something is really funny.");
    msg.channel.send("Funny it is not!");
  }
  
  if(msg.content.toLowerCase().includes("fuck")) {
    msg.channel.send("You fucking need to fucking change your fucking language so it fucking makes more fucking sense.")
  }
  
  if((msg.content.includes("fuck you") || msg.content.includes("shut the fuck up") || msg.content.includes("stfu")) && !sentByBot(msg)) {
    msg.channel.send("Bitch who you talking to? Nah bro, go kill yourself and shut the fuck up you little cunt.");
  }
  
  if(msg.content.includes("kys")) {
    msg.channel.send("I hope you die first.");
  }
  
  if(msg.content.toLowerCase() === "yes" && !sentByBot(msg)) {
    msg.channel.send("no");
  } if(msg.content.toLowerCase() === "no" && !sentByBot(msg)) {
    msg.channel.send("yes");
  }
  
  if(msg.content.includes("bitch") && !sentByBot(msg)) {
    msg.channel.send("Fuck yourself you wittle wittle asshole.");
  }
  
  if(msg.content.includes("why") && msg.content.includes("?") && !sentByBot(msg)) {
    msg.channel.send("because I said so dumbass");
  }
  
  if(msg.content.toLowerCase().includes("idiot") && !sentByBot(msg)) {
    msg.channel.send("I hope you aint talkin bout me you dipshit.");
  }
  
  if(botPing(msg)) {
    msg.channel.send("fuck you");
  }
});

function grammaticallyCorrect(msg) {

  //starts correct
  const startsWithCapital = /^[A-Z]/.test(msg);

  //ends correct
  const endsWithPunctuation = /[.!?]$/.test(msg);

  //letter immediately after period
  letterAfterPeriod = false;
  lowercaseAfterPeriod = false;
  const message = msg.content;
  for (let i = 1; i < message.length; i++) {
    if (message[i - 1] === '.' && /^[a-zA-Z]+$/.test(message[i])) {
      letterAfterPeriod = true;
      wrong++;
      msg.reply("you had a letter immediately after a period.");
      const nextChar = message[i];
      if (nextChar != nextChar.toUpperCase()) {
        wrong++;
        msg.reply("you had a lowercase letter after the period.");
      }
    }
  }

  if (startsWithCapital == false) {
    msg.reply("you didn't start with a capital letter.");
    wrong++;
  }
  if (endsWithPunctuation == false) {
    msg.reply("you didn't end with a period.");
    wrong++;
  }

  if (wrong > 0) {
    msg.reply("you have " + wrong + " mistakes.");
    const timeout = new Collection();
    if(wrong == 1) {
      member.timeout(60_000);
    }
  }
  wrong = 0;
}

function Englihss(msg) {
  return msg.channel.id == 1118723417957470344;
}
 function botPing(msg) {
   return msg.content.includes(client.user);
 }

 function contains(msg, word) {
   return msg.content.includes(word);
 }

 function lowercase(msg) {
   const str = msg.content;
   const lowercase = str.toLowerCase();
   return lowercase;
 }

 function sentByBot(msg) {
   return (msg.author == client.user);
 }

 function containsThing(inputString, thing) {
   return inputString.includes(thing);
 }

 function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 function calculateSentence(sentence) {
   const operators = {
     'plus': '+',
     'minus': '-',
     'times': '*',
     'of': '*',
     'divided by': '/',
     'over': '/',
     "to the": "^"
   };

   // Replace words with operators
   const replacedSentence = sentence.replace(/plus|minus|times|of|divided by|over|to the/gi, match => operators[match.toLowerCase()]);

   // Split the modified sentence into words
   const words = replacedSentence.split(' ');

   // Extract the numbers and operator
   const num1 = parseFloat(words[0]);
   const operator = words[1];
   const num2 = parseFloat(words[2]);

   // Perform the calculation based on the operator
   let result;

   switch (operator) {
     case '+':
       result = num1 + num2;
       break;
     case '-':
       result = num1 - num2;
       break;
     case '*':
       result = num1 * num2;
       break;
     case '/':
       result = num1 / num2;
       break;
     case '^':
       result = Math.pow(num1, num2);
       break;
     default:
       return "your lack of asking correctly";
   }

   return result;
 }

 function timeUntilDate(targetDate, bool) {
   // Get the current date
   const currentDate = new Date();

   // Convert the target date string to a Date object
   const targetDateObj = new Date(targetDate);

   // Calculate the time difference in milliseconds
   const timeDiff = targetDateObj.getTime() - currentDate.getTime();

     // Calculate the remaining time in weeks, days, hours, minutes, and seconds
   const all = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
   const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7 * 4));
   const weeks = Math.floor(all % months);
   const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
   const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

   // Format the remaining time as a string
   let remainingTime = "";
   if (months > 0) remainingTime += `${months} month${months > 1 ? "s" : ""}, `;
   if (weeks > 0) remainingTime += `${weeks} week${weeks > 1 ? "s" : ""}, `;
   if (days > 0) remainingTime += `${days} day${days > 1 ? "s" : ""}, `;
   if (hours > 0) remainingTime += `${hours} hour${hours > 1 ? "s" : ""}, `;
   if (minutes > 0) remainingTime += `${minutes} minute${minutes > 1 ? "s" : ""}, `;
   remainingTime += `${seconds} second${seconds > 1 ? "s" : ""}`;

   if(bool == 1) return remainingTime;
   return all+1;
}

keepAlive();

client.login(process.env['TOKEN'])