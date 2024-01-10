// List of words obtained and modified from here: https://members.optusnet.com.au/~charles57/Creative/Techniques/random_words.htm
// Idea for word and hint modified from here: https://www.codingnepalweb.com/build-hangman-game-html-javascript/

/* jshint esversion: 6 */

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
    {word: 'Mouth',
    hint: 'Body part used for eating and speaking.'
    },
    {word: 'Necklace',
    hint: 'Piece of jewelry.'
    },
    {word: 'Needle',
    hint: 'Used for sewing or drawing blood.'
    },
    {word: 'Onion',
    hint: 'Food that produces tears.'
    },
    {word: 'Parachute',
    hint: 'Fabric canopy used to descend slowly through air.'
    },
    {word: 'Passport',
    hint: 'Travel identification.'
    },
    {word: 'Pepper',
    hint: 'Often combined with salt.'
    },
    {word: 'Pillow',
    hint: 'Used on a bed.'
    },
    {word: 'Planet',
    hint: 'Earth, Mars, Venus...'
    },
    {word: 'Pocket',
    hint: 'Hole in clothing used for carrying items.'
    },
    {word: 'Potato',
    hint: 'Root vegetable.'
    },
    {word: 'Pyramid',
    hint: 'Sand constructions, famous in Egypt.'
    },
    {word: 'Rainbox',
    hint: 'Colour illusion caused by rain.'
    },
    {word: 'Restaurant',
    hint: 'Commercial place to eat'
    },
    {word: 'Sandwich',
    hint: 'Two pieces of bread with fillings.'
    },
    {word: 'Signature',
    hint: 'How one writes their name.'
    },
    {word: 'Skeleton',
    hint: 'A collection of bones'
    },
    {word: 'Snail',
    hint: 'Lives in a shell.'
    },
    {word: 'Sphere',
    hint: '3D circle.'
    },
    {word: 'Square',
    hint: '4-sided shape'
    },
    {word: 'Stomach',
    hint: 'Bodily organ.'
    },
    {word: 'Sunglasses',
    hint: 'Protects your eyes.'
    },
    {word: 'Sword',
    hint: 'Medieval weapon.'
    },
    {word: 'Table',
    hint: 'Object used for eating.'
    },
    {word: 'Teeth',
    hint: 'Used for chewing.'
    },
    {word: 'Television',
    hint: 'Household screen'
    },
    {word: 'Thermometer',
    hint: 'To check temperature.'
    },
    {word: 'Tiger',
    hint: 'Large Asian striped cat.'
    },
    {word: 'Torch',
    hint: 'Portable battery-operated object that shines powerful beam in darkness.'
    },
    {word: 'Train',
    hint: 'Mostly long-distance transport vehicle.'
    },
    {word: 'Treadmill',
    hint: 'Fitness machine.'
    },
    {word: 'Umbrella',
    hint: 'Used in rain.'
    },
    {word: 'Vampire',
    hint: 'Mythical fanged creature.'
    },
    {word: 'Water',
    hint: 'H2O'
    },
];