const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// person who follows the most people
const biggestFollower = (data) => {
  let followCount = 0;
  let mostFollows = '';
  for (const user in data) {
    if (data[user]['follows'].length > followCount) {
      followCount = data[user]['follows'].length;
      mostFollows = data[user]['name'];
    }
  }
  console.log(mostFollows);
  return mostFollows;
};

// name of the most followed individual
const mostPopular = (data) => {
  
}
