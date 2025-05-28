// Min lista med skämt
const myJokes = [
  "Why don't programmers like nature? It has too many bugs.",
  "Why did the CSS developer go to therapy? To get rid of his margins.",
  "How do you comfort a JavaScript developer? You console them.",
  "Why did the CSS developer leave the restaurant? Because it had no class.",
  "Why did the JavaScript developer go missing? Because he didn't know when to return.",
  "Why did the HTML tag go to the party? Because it wanted to break the line.",
  "Why do JavaScript developers wear glasses? Because they don't C#.",
  "Why don't programmers like to use inline styles? Because they want to be classy.",
  "Why did the CSS selector break up with the HTML element? It found someone more specific.",
  "Why did the CSS developer apply for a job? They wanted to get a position.",
];

// Funktion som väljer två olika skämt
function ChooseTwoJokes() {
  // Slumpa ett nummer för första skämtet
  let JokeNumberOne = Math.floor(Math.random() * 10); // Det finns 10 skämt
  
  // Slumpa ett nummer för andra skämtet
  let JokeNumberTwo = Math.floor(Math.random() * 10);
  
  // Om det är samma nummer, slumpa igen så vi får olika skämt
  while (JokeNumberTwo == JokeNumberOne) {
    JokeNumberTwo = Math.floor(Math.random() * 10);
  }
  
  // Skicka tillbaka båda skämten i en lista
  return [myJokes[JokeNumberOne], myJokes[JokeNumberTwo]];
}

// Kör funktionen och skriv ut skämten
let TwoJokes = ChooseTwoJokes();
console.log("Första skämtet: " + TwoJokes[0]);
console.log("Andra skämtet: " + TwoJokes[1]);