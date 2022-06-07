import mexicoCityCocktailImg from './assets/images/mexicoCityCocktail.jpg'
import caipirinhaImg from './assets/images/caipirinha.jpg'
import greenlandicCoffeeImg from './assets/images/greenlandicCoffee.jpg'
import screechOVAImg from './assets/images/screechOVA.jpg'
import angryCanadianImg from './assets/images/angryCanadian.jpg'
import pinaColadaImg from './assets/images/pinaColada.jpeg'
import trinidadSourImg from './assets/images/trinidadSour.jpg'
import arubaAribaImg from './assets/images/arubaAriba.jpg'
import barbadosSurpriseImg from './assets/images/barbadosSurprise.png'
import rumPunchImg from './assets/images/rumPunch.jpg'
import antiguaSmileImg from './assets/images/antiguaSmile.png'
import volgaBoatmanImg from './assets/images/volgaBoatman.jpeg'
import medovukhaImg from './assets/images/medovukha.jpg'
import passionfruitMojitoImg from './assets/images/passionfruitMojito.jpg'
import jagerbombImg from './assets/images/jagerbomb.png'
import botanicalFlipImg from './assets/images/botanicalFlip.jpg'
import calamansiHardLemonadeImg from './assets/images/calamansiHardLemonade.jpg'
import moscowMuleImg from './assets/images/moscowMule.jpg'

const drinksData = [
  {
    zoneNames: [],
    place: 'New York',
    country: 'United States of America',
    name: 'Manhattan',
    drinkId: 'manhattan',
    img: null,
    funFact: null,
    blurb: null,
    ingredients: [],
  },
  {
    zoneNames: ['America/Port_of_Spain'],
    place: 'Port of Spain',
    country: 'Trinidad & Tobago',
    name: 'Trinidad Sour',
    drinkId: 'trinidadSour',
    img: trinidadSourImg,
    funFact:
      'The Trinidad Sour, created by bartender Giuseppe González, is a paradigm shifter with its base of Angostura bitters, but the drink has such a richness of flavor that it has become beloved by bartenders around the world.',
    blurb: null,
    ingredients: [],
  },
  {
    zoneNames: [],
    place: 'Mexico City',
    country: 'Mexico',
    name: 'Mexico City Cocktail',
    drinkId: 'mexicoCityCocktail',
    img: mexicoCityCocktailImg,
    funFact: 'The Mexico City Cocktail is the same as a Cosmopolitan but with tequila instead of vodka.',
    blurb: null,
    ingredients: [],
  },
  {
    zoneNames: ['Brazil/DeNoronha', 'America/Noronha'],
    place: 'Fernando de Noronha',
    country: 'Brazil',
    name: 'Caipirinha',
    drinkId: 'caipirinha',
    img: caipirinhaImg,
    funFact:
      'The Caipirinha, the national cocktail of Brazil, blends Cachaça with lime and sugar for a refreshing, sweet and tangy flavor.',
    blurb: null,
    ingredients: [],
  },
  {
    zoneNames: ['America/Godthab', 'America/Nuuk'],
    place: 'Nuuk',
    country: 'Greenland',
    name: 'Greenlandic Coffee',
    drinkId: 'greenlandicCoffee',
    img: greenlandicCoffeeImg,
    funFact:
      'Greenlandic coffee is mixed with whiskey, Kahlua and Grand Marnier and covered by a heap of whipped cream.',
    blurb: null,
    ingredients: [],
  },
  {
    zoneNames: ['Canada/Newfoundland', 'America/St_Johns', 'America/Miquelon'],
    place: 'Newfoundland and Labrador',
    country: 'Canada',
    name: 'Screech OVA',
    drinkId: 'screechOVA',
    img: screechOVAImg,
    funFact:
      "Celebrate the nation's Canadian and Jamaican roots with this delicious Screech Rum cocktail, made with pineapple juice and ginger beer!",
    blurb:
      'Screech is Jamaican-style rum that is the historic result of trade between Newfoundland and Jamaica (Jamaica got salt cod in return)',
    ingredients: [],
  },
  {
    zoneNames: ['Canada/Newfoundland', 'America/St_Johns', 'America/Miquelon'],
    place: 'Newfoundland and Labrador',
    country: 'Canada',
    name: 'Angry Canadian',
    drinkId: 'angryCanadian',
    img: angryCanadianImg,
    funFact:
      'The Angry Canadian is a variant of the Old Fashioned, where sugar is replaced with pure maple syrup, and mixed with Canadian rye whiskey.',
    blurb: null,
    ingredients: [],
  },
  {
    zoneNames: ['America/Puerto_Rico'],
    place: 'San Juan',
    country: 'Puerto Rico',
    name: 'Piña Colada',
    drinkId: 'pinaColada',
    img: pinaColadaImg,
    funFact: 'Though unsure, many believe Puerto Rico to be the birthplace of the Piña Colada!',
    blurb: null,
    ingredients: [],
  },
  {
    zoneNames: ['America/Aruba'],
    place: 'Oranjestad',
    country: 'Aruba',
    name: 'Aruba Ariba',
    drinkId: 'arubaAriba',
    img: arubaAribaImg,
    funFact:
      'In Aruba, they use a splash of a liquor called, Coecoei, which can only be purchased on the island of Aruba.',
    blurb: null,
    ingredients: [],
  },
  {
    zoneNames: ['America/Barbados', 'America/St_Vincent'],
    place: 'Bridgetown',
    country: 'Barbados',
    name: 'Barbados Surprise',
    drinkId: 'barbadosSurprise',
    img: barbadosSurpriseImg,
    funFact: 'This tropical drink is as beautiful as it is delicious!',
    blurb: null,
    ingredients: [],
  },
  {
    zoneNames: ['America/St_Vincent', 'America/Barbados', 'America/Montserrat', 'America/Anguilla', 'America/Virgin'],
    place: 'Bridgetown',
    country: 'Barbados',
    name: 'Rum Punch',
    drinkId: 'rumPunch',
    img: rumPunchImg,
    funFact:
      'The inventors of rum remain to be heavily debated, however, Barbados is known for creating some of the best rum in the world!',
    blurb: null,
    ingredients: [],
  },
  {
    zoneNames: ['America/Antigua'],
    place: "St. John's",
    country: 'Antigua and Barbuda',
    name: 'Antigua Smile',
    drinkId: 'antiguaSmile',
    img: antiguaSmileImg,
    funFact: 'A tropical drink designed for blissful and relaxind daydreams.',
    blurb: null,
    ingredients: [],
  },
  {
    zoneNames: ['Asia/Anadyr', 'Asia/Kamchatka'],
    place: 'Kamchatka',
    country: 'Russia',
    name: 'Volga Boatman',
    drinkId: 'volgaBoatman',
    img: volgaBoatmanImg,
    funFact: 'This drink is named after a Cecil b. De Mille movie which was released in 1926.',
    blurb: null,
    ingredients: [],
  },
  {
    zoneNames: ['Asia/Anadyr', 'Asia/Kamchatka'],
    place: 'Anadyr',
    country: 'Russia',
    name: 'Medovukha',
    drinkId: 'medovukha',
    img: medovukhaImg,
    funFact:
      'In Ancient Russia this “drinkable honey” was considered holy and so it was an integral feature of many festivities.',
    blurb: null,
    ingredients: [],
  },
  {
    zoneNames: ['Pacific/Fiji'],
    place: 'Suva',
    country: 'Fiji',
    name: 'Passion Fruit Mojito',
    drinkId: 'passionFruitMojito',
    img: passionfruitMojitoImg,
    funFact: 'Passion fruit is plentiful in Fiji so enjoy this classic drink with a tropical twist!',
    blurb: null,
    ingredients: [
      '1 oz Lime Juice',
      '2 oz Passion Fruit (pulp and seeds)',
      '3 oz Club Soda',
      '1 oz White Rum or Light Rum',
      '6 Mint Leaves',
      '2 tbsp Sugar',
      'A Handful of Crushed Ice',
      'Extra Lime Wedges and Mint Sprigs for garnish',
    ],
  },
  {
    zoneNames: [
      'Australia/Adelaide',
      'Australia/Brisbane',
      'Australia/Lindeman',
      'Australia/Broken_Hill',
      'Australia/Queensland',
      'Australia/South',
      'Australia/Yancowinna',
    ],
    place: 'Melbourne',
    country: 'Australia',
    name: 'Jäger bomb',
    drinkId: 'jagerBomb',
    img: jagerbombImg,
    funFact:
      'Although the most familiar chaser is red bull, other mixtures like coffee, apple juice, club soda and raspberry syrup go well with Jägermeister.',
    blurb: null,
    ingredients: [],
  },
  {
    zoneNames: [
      'Australia/Adelaide',
      'Australia/Brisbane',
      'Australia/Lindeman',
      'Australia/Broken_Hill',
      'Australia/Queensland',
      'Australia/South',
      'Australia/Yancowinna',
    ],
    place: 'Sydney',
    country: 'Australia',
    name: 'Botanical Flip',
    drinkId: 'botanicalFlip',
    img: botanicalFlipImg,
    funFact:
      'Ideal for sour cocktail fans, this drink is a textural palate fantasy with ginger, honey, pineapple and egg whites.',
    blurb: null,
    ingredients: [],
  },
  {
    zoneNames: ['Pacific/Guam'],
    place: 'Hagåtña',
    country: 'Guam',
    name: 'Calamansi Hard Lemonade',
    drinkId: 'calamansiHardLemonade',
    img: calamansiHardLemonadeImg,
    funFact: 'Calamansi is very prevalent in Filipino cuisine and Guam provides an excellent growing grounds for it.',
    blurb: null,
    ingredients: [],
  },
  {
    zoneNames: ['Asia/Srednekolymsk', 'Asia/Magadan', 'Asia/Sakhalin'],
    place: 'Srednekolymsk',
    country: 'Russia',
    name: 'Moscow Mule',
    drinkId: 'moscowMule',
    img: moscowMuleImg,
    funFact: 'The history of vodka remains unclear, with both Russia and Poland claiming to be the place of origin.',
    blurb: null,
    ingredients: ['1/2 oz Vodka', '4 oz Ginger Beer', '1/6 oz Lime Juice'],
  },
]

export default drinksData
