function loopyLighthouse(range, multiples, words) {
  for (let x = 100; x <= 200; x++)   {
    if (x % multiples[0] === 0 && x % multiples[1] === 0) { console.log(words[0] + words[1]);
  }
    else if (x % multiples[0] === 0) { console.log(words[0]);
  }
    else if (x % multiples[1] === 0) { console.log(words[1]);
  }
    else {console.log(x);
    }
  }
  
}

loopyLighthouse([15, 90], [2, 5], ["Fatty", "Beacon"]);