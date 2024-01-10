// List of words obtained and modified from here: https://members.optusnet.com.au/~charles57/Creative/Techniques/random_words.htm
// Idea for word and hint taken from here: https://www.codingnepalweb.com/build-hangman-game-html-javascript/
const wordList = [
    {word: 'Adult',
    hint: 'A person over 18 years old.'
    },
    {word: 'Airplane',
    hint: 'A flying Object.'
    },
    {word: 'Album',
    hint: 'A collection of songs.'
    },
    {word: 'Alphabet',
    hint: 'ABCDEFG...'
    },
    {word: 'Apple',
    hint: 'A fruit.'
    },
    {word: 'Backpack',
    hint: 'An object for carrying things.'
    },
    {word: 'Balloon',
    hint: 'Often seen at birthday parties.'
    },
    {word: 'Banana',
    hint: 'A fruit.'
    },
    {word: 'Bathroom',
    hint: 'A place used for washing and hygiene.'
    },
    {word: 'Bird',
    hint: 'Can fly.'
    },
    {word: 'Brain',
    hint: 'An organ.'
    },
    {word: 'Bridge',
    hint: 'Structural object.'
    },
    {word: 'Butterfly',
    hint: 'A pretty insect.'
    },
    {word: 'Button',
    hint: 'Clothing fastener.'
    },
    {word: 'Carpet',
    hint: 'Placed on floors.'
    },
    {word: 'Carrot',
    hint: 'A vegetable'
    },
    {word: 'Chair',
    hint: 'Used for sitting.'
    },
    {word: 'Chocolate',
    hint: 'Comes in milk, dark or white.'
    },
    {word: 'Church',
    hint: 'A holy place.'
    },
    {word: 'Circle',
    hint: 'A shape.'
    },
    {word : 'Clocke',
    hint: 'Used for time-telling.'
    },
    {word : 'Clown',
    hint: 'Traditionally seen at a circus.'
    },
    {word : 'Coffee',
    hint: 'A hot non-alcoholic beverage.'
    },
    {word : 'Diamond',
    hint: 'A precious stone.'
    },
    {word : 'Dress',
    hint: 'A piece of clothing.'
    },
    {word : 'Earth',
    hint: 'A planet.'
    },
    {word : 'Electricity',
    hint: 'A form of energy.'
    },
    {word : 'Elephant',
    hint: 'Large mammal found in Africa and South-East Asia.'
    },
    {word : 'Feather',
    hint: 'A bird has many of these.'
    },
    {word : 'Finger',
    hint: 'You have 10 of them.'
    },
    {word : 'Flower',
    hint: 'Pretty plant, often gifted.'
    },
    {word : 'Fruit',
    hint: 'A food category.'
    },
    {word : 'Guitar',
    hint: 'A musical instrument.'
    },
    {word : 'Hammer',
    hint: 'Household tool.'
    },
    {word : 'Horoscope',
    hint: 'Virgo, Libra, Scorpio...'
    },
    {word : 'Kaleidoscope',
    hint: 'A tube with many different patterns caused by multiple mirrors and colours within'
    },  
    {word : 'Kitchen',
    hint: 'Place for cooking.'
    },
    {word : 'Library',
    hint: 'One can borrow books from here.'
    },
    {word : 'Meteor',
    hint: 'Streak of light in the sky.'
    },
    {word : 'Microscope',
    hint: 'Used to view miniscule objects or matter.'
    },
    {word : 'Monster',
    hint: 'Scary imaginary creature.'
    },
    {word : 'Mosquito',
    hint: 'Insect that sucks blood.'
    },
// 'Mouth',
// 'Necklace',
// 'Needle',
// 'Onion',
// 'Parachute',
// 'Passport',
// 'Pepper',
// 'Perfume',
// 'Pillow',
// 'Plane',
// 'Planet',
// 'Pocket',
// 'Potato',
// 'Printer',
// 'Pyramid',
// 'Rainbow',
// 'Restaurant',
// 'Robot',
// 'Rocket',
// 'Sandwich',
// 'Satellite',
// 'School',
// 'Shower',
// 'Signature',
// 'Skeleton',
// 'Snail',
// 'Sphere',
// 'Square',
// 'Staircase',
// 'Stomach',
// 'Sunglasses',
// 'Sword',
// 'Table',
// 'Teeth',
// 'Telescope',
// 'Television',
// 'Thermometer',
// 'Tiger',
// 'Tongue',
// 'Torch',
// 'Train',
// 'Treadmill',
// 'Triangle',
// 'Tunnel',
// 'Typewriter',
// 'Umbrella',
// 'Vacuum',
// 'Vampire',
// 'Vulture',
// 'Water',
// 'Wheelchair',
];