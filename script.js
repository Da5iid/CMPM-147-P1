const fillers = {
    name: ["$fNamePre$fNameSuf $lNamePre$lNameSuf", "$fNamePre $lNamePre$lNameSuf", "$fNamePre$fNameSuf $lNamePre", "$fNamePre $lNamePre"],
    fNamePre: ["Ari", "Abe", "Ban", "Bri", "Cra", "Cal", "Dev", "Dra", "Eli", "Eve", "Fal", "Fra"],
    fNameSuf: ["sta", "staven", "nar", "one", "yon", "gon", "rest", "lon", "dge", "ve"],
    lNamePre: ["Ari", "Abe", "Ban", "Bri", "Cra", "Cal", "Dev", "Dra", "Eli", "Eve", "Fal", "Fra"],
    lNameSuf: ["sta", "staven", "nar", "one", "yon", "gon", "rest", "lon", "dge", "ve"],
    greetings: ["Hello!", "Greetings!", "Welcome"],
    storeOwn: ["Jimbo's", "Kai's", "Jar's", "Brant's", "Egg's", "Echo's", "Aero's", "Max's", "Sam's", "Meatball's", "Trinket's", "Ronnie's"],
    storeType: ["Farmer's Market", "Brick Emporium", "Egg Dealer", "Tomato Tools", "Unexpeted Items In the Bagging Area", "Cheese Land", "Spatchula City"],
    itemSyn: ["objects", "gathered items", "items", "thingies"],
    items: ["Bananas", "Banana Slugs", "Toasters", "Parking Tickets", "Lithium Batteries", "Arby's Gift Cards", "Blenders", "Chain Saws", "Pool Cues", "Puff Bars", " 91% Isopropyl Alcohol Bottles"],
    badwords: ["dang", "cursed", "freaking", "ugly", "stupid", "idiotic"],
    robots: ["robots", "beep-boop machines", "PCs", "machines", "bots"], 
    robot: ["brick", "pile of junk", "bot", "scrap heap", "broken McDonalds ice cream machine"], 
    title: ["Sir", "Ma'am", "Hey, I heard that! >:(... Listen", "Listen here, Valuable Customer,"],
    toobad: ["Fine. No discounts for you.", "A shame.", "I was hoping to be fed today :(."], 
    number: ["4", "7", "8", "3", "5"],
    numbers: ["19", "16", "23", "28"],
    numberss: ["4,826", "2,350", "3,763", "4,342"],
    totalthous: ["Thirty-two", "Twenty-eight", "Forty-four"],
    totalhund: ["seven-hundred and eighty-six", "three-hundred and forty-two"],
    stocked: ["You will be stocked up for years!", "You will never not have (at least one) again! No matter where you are!", "Good choice! Valuable customer!", "A [REDACTED] decision!", "A wonderful choice!"]
  };
  
  const template = `"$greetings Welcome to "$storeOwn $storeType"! My name is $name, your personal AI check-out cashier assistant! Please scan your first $itemSyn to begin!"

  "*Sighs* No cashiers anymore? Just $badwords $robots huh?"
  
  "$title, if you have coupons, do scan them now!"
  
  "I do not."
  
  "$toobad Please scan your $itemSyn!"
  
  "I only bought one thing. Here." *scans item*
  
  "Oh!  $number "$items"? Stocking up we are it seems!
  
  "No hold on, I only need one-"
  
  "You want MORE? No worries! Valued Customer! I have added $numbers "$items" to your shopping cart! $stocked"
  
  "NO! I only bought ONE, and non of whatever THOSE ARE! You $badwords $badwords $robot! This is REDICULOUS!"
  
  "Your total is: $totalthous thousand, $totalhund dollars, and 17 cents!" :)
  
  "WHERE’S YOUR MANAGER?!"
  
  "Cash or credit? ...Valuable "$robot" customer! ;)"
  `;
  
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    box.innerText = story;

    let grammar = tracery.createGrammar(spellbook);
    console.log(grammar.flatten('#origin#'))
  }
  
  /* global clicker */
  clicker.onclick = generate;
  
  generate();
