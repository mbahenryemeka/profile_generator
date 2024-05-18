const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  console.log(`Nice to meet you, ${name}!`);
  rl.question("What's an activity you like doing?", (activity) => {
    console.log(`That sounds fun, ${activity}!`);
    rl.question("What do you listen to while doing ?", (music) => {
      console.log(`Nice, ${music} is wonderful to listen to.`);
      rl.question(`Which meal is your favourite? (eg: dinner, brunch, etc.)`, (meal) => {
        console.log(`Oh!!, ${meal}, thats fantastic.`);
        rl.question (`What's your favourite thing to eat for that meal?`, (favourite) => {
          console.log(`Many people like ${favourite} for meal.`);
          rl.question(`Which sport is your absolute favourite?`, (sport) => {
            console.log(`That's fantastic, ${sport} is the best.`);
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (superPower) => {
              console.log(`${superPower}. Thanks for your valuable feedback.`);
              rl.close();
            });
          });
        });
      });
    });
  });
 });