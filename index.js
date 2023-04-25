const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};
// Using destructuring to declare animal sounds
const [moo, neigh, baa, oink, cluck] = ['cow', 'horse', 'sheep', 'pig', 'chicken'];

// Using destructuring to declare animal names
const {0: bessie, 1: dolly, 2: babe, 3: little} = ['cow', 'sheep', 'pig', 'chicken'];

// Using destructuring to declare animal colors
const [blackAndWhite, black, pink] = ['cow', 'sheep', 'pig'];

// Using destructuring to declare the seven traditional rainbow colors using their color name
const [red, orange, yellow, green, blue, indigo, violet] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Using destructuring to declare six rainbow colors using initials
const [r, o, y, g, b, v] = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

// Using destructuring to declare Indigo using indg
const { 5: indg } = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Using destructuring to declare an object with some properties using variable names different from the object property names
const { muppetName, color, song, job, partner } = muppet;

console.log(muppetName);   // 'Miss Piggy'
console.log(color);       // 'pink'
console.log(song);        // 'Never Before, Never Again'
console.log(job);         // 'Cast member of The Muppet Show'
console.log(partner);     // 'Kermit'

const { album: { theMuppetMovie: {song2, song4}} , nestedJob, nestedPartner } = nestedMuppet;

console.log(song2);         // 'Moving Right Along'
console.log(song4);         // 'I Hope That Something Better Comes Along'
console.log(nestedJob);     // 'Host of The Muppet Show'
console.log(nestedPartner); // 'Miss Piggy'
// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner