# Pep Talk Generator
Get a different pep talk each time you press the button [peptalk.click](http://peptalk.click)! You can include your name, or leave the form blank to get an endearment instead. 

## Process

I wrote an initial peptalk, and then added replacements for the different sections of the text. 

```
let pepTalk = "Honey, you are a powerful goddess and you can do this!";

// if you don't put in your name then you get an endearment instead 
const replaceHoney = ["Honey", "Baby", "Sweetheart", "Pumpkin", "Muffin"];

// switch out powerful with a different description 
const replacePowerful = [
  "powerful",
  "strong",
  "brave",
  "smart",
  "kind",
  "thoughtful",
  "hard working",
  "practical",
  "creative",
  "loving",
  "funny"
];

// replace goddess 
const replaceGoddess = [
  "goddess",
  "warrior",
  "princess",
  "queen",
  "king",
  "angel",
  "ballerina",
  "member of society",
  "friend",
  "person",
  "kitty cat",
  "doggy dog",
  "fish",
  "bird",
  "elephant",
  "capybara"
];

// get a piece of advice at the end
const replacePepTalk = [
  "can do this",
  "will get through this",
  "will laugh about this one day",
  "won't think this will be important one day",
  "will be okay",
  "can quit if that's whats best for you",
  "deserve a rest",
  "deserve a little treat",
  "will figure this out",
  "will get over it sooner than you think",
  "are doing just fine"
];
```

## Next Steps

To keep it going, I can add more options for each section of the text. This way, you are more likely to get something different each time you try it. 