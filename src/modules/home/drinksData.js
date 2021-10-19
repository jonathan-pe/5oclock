import mexicoCityCocktailImg from '../../assets/images/mexicoCityCocktail.jpg'
import caipirinhaImg from '../../assets/images/caipirinha.jpg'
import greenlandicCoffeeImg from '../../assets/images/greenlandicCoffee.jpg'
import screechOVAImg from '../../assets/images/screechOVA.jpg'
import angryCanadianImg from '../../assets/images/angryCanadian.jpg'
import pinaColadaImg from '../../assets/images/pinaColada.jpeg'
import trinidadSourImg from '../../assets/images/trinidadSour.jpg'
import arubaAribaImg from '../../assets/images/arubaAriba.jpg'
import barbadosSurpriseImg from '../../assets/images/barbadosSurprise.png'
import rumPunchImg from '../../assets/images/rumPunch.jpg'
import antiguaSmileImg from '../../assets/images/antiguaSmile.png'
import volgaBoatmanImg from '../../assets/images/volgaBoatman.jpeg'
import medovukhaImg from '../../assets/images/medovukha.jpg'
import passionfruitMojitoImg from '../../assets/images/passionfruitMojito.jpg'

const drinksData = [
  {
    zoneNames: [],
    place: 'New York',
    country: 'United States of America',
    name: 'Manhattan',
    img: null,
    funFact: null,
    blurb: null,
    ingredients: {},
  },
  {
    zoneNames: ['America/Port_of_Spain'],
    place: 'Port of Spain',
    country: 'Trinidad & Tobago',
    name: 'Trinidad Sour',
    img: trinidadSourImg,
    funFact:
      'The Trinidad Sour, created by bartender Giuseppe González, is a paradigm shifter with its base of Angostura bitters, but the drink has such a richness of flavor that it has become beloved by bartenders around the world.',
    blurb: null,
    ingredients: {},
  },
  {
    zoneNames: [],
    place: 'Mexico City',
    country: 'Mexico',
    name: 'Mexico City Cocktail',
    img: mexicoCityCocktailImg,
    funFact: 'The Mexico City Cocktail is the same as a Cosmopolitan but with tequila instead of vodka.',
    blurb: null,
    ingredients: {},
  },
  {
    zoneNames: ['Brazil/DeNoronha', 'America/Noronha'],
    place: 'Fernando de Noronha',
    country: 'Brazil',
    name: 'Caipirinha',
    img: caipirinhaImg,
    funFact:
      'The Caipirinha, the national cocktail of Brazil, blends Cachaça with lime and sugar for a refreshing, sweet and tangy flavor.',
    blurb: null,
    ingredients: {},
  },
  {
    zoneNames: ['America/Godthab', 'America/Nuuk'],
    place: 'Nuuk',
    country: 'Greenland',
    name: 'Greenlandic Coffee',
    img: greenlandicCoffeeImg,
    funFact:
      'Greenlandic coffee is mixed with whiskey, Kahlua and Grand Marnier and covered by a heap of whipped cream.',
    blurb: null,
    ingredients: {},
  },
  {
    zoneNames: ['Canada/Newfoundland', 'America/St_Johns', 'America/Miquelon'],
    place: 'Newfoundland and Labrador',
    country: 'Canada',
    name: 'Screech OVA',
    img: screechOVAImg,
    funFact:
      "Celebrate the nation's Canadian and Jamaican roots with this delicious Screech Rum cocktail, made with pineapple juice and ginger beer!",
    blurb:
      'Screech is Jamaican-style rum that is the historic result of trade between Newfoundland and Jamaica (Jamaica got salt cod in return)',
    ingredients: {},
  },
  {
    zoneNames: ['Canada/Newfoundland', 'America/St_Johns', 'America/Miquelon'],
    place: 'Newfoundland and Labrador',
    country: 'Canada',
    name: 'Angry Canadian',
    img: angryCanadianImg,
    funFact:
      'The Angry Canadian is a variant of the Old Fashioned, where sugar is replaced with pure maple syrup, and mixed with Canadian rye whiskey.',
    blurb: null,
    ingredients: {},
  },
  {
    zoneNames: ['America/Puerto_Rico'],
    place: 'San Juan',
    country: 'Puerto Rico',
    name: 'Piña Colada',
    img: pinaColadaImg,
    funFact: 'Though unsure, many believe Puerto Rico to be the birthplace of the Piña Colada!',
    blurb: null,
    ingredients: {},
  },
  {
    zoneNames: ['America/Aruba'],
    place: 'Oranjestad',
    country: 'Aruba',
    name: 'Aruba Ariba',
    img: arubaAribaImg,
    funFact:
      'In Aruba, they use a splash of a liquor called, Coecoei, which can only be purchased on the island of Aruba.',
    blurb: null,
    ingredients: {},
  },
  {
    zoneNames: ['America/Barbados', 'America/St_Vincent'],
    place: 'Bridgetown',
    country: 'Barbados',
    name: 'Barbados Surprise',
    img: barbadosSurpriseImg,
    funFact: 'This tropical drink is as beautiful as it is delicious!',
    blurb: null,
    ingredients: {},
  },
  {
    zoneNames: ['America/St_Vincent', 'America/Barbados', 'America/Montserrat', 'America/Anguilla', 'America/Virgin'],
    place: 'Bridgetown',
    country: 'Barbados',
    name: 'Rum Punch',
    img: rumPunchImg,
    funFact:
      'The inventors of rum remain to be heavily debated, however, Barbados is known for creating some of the best rum in the world!',
    blurb: null,
    ingredients: {},
  },
  {
    zoneNames: ['America/Antigua'],
    place: "St. John's",
    country: 'Antigua and Barbuda',
    name: 'Antigua Smile',
    img: antiguaSmileImg,
    funFact: 'A tropical drink designed for blissful and relaxind daydreams.',
    blurb: null,
    ingredients: {},
  },
  {
    zoneNames: ['Asia/Anadyr', 'Asia/Kamchatka'],
    place: 'Kamchatka',
    country: 'Russia',
    name: 'Volga Boatman',
    img: volgaBoatmanImg,
    funFact: 'This drink is named after a Cecil b. De Mille movie which was released in 1926.',
    blurb: null,
    ingredients: {},
  },
  {
    zoneNames: ['Asia/Anadyr', 'Asia/Kamchatka'],
    place: 'Anadyr',
    country: 'Russia',
    name: 'Medovukha',
    img: medovukhaImg,
    funFact:
      'In Ancient Russia this “drinkable honey” was considered holy and so it was an integral feature of many festivities.',
    blurb: null,
    ingredients: {},
  },

  {
    zoneNames: ['Pacific/Fiji'],
    place: 'Suva',
    country: 'Fiji',
    name: 'Passion Fruit Mojito',
    img: passionfruitMojitoImg,
    funFact: 'Passion fruit is plentiful in Fiji so enjoy this classic drink with a tropical twist!',
    blurb: null,
    ingredients: {},
  },
]

export default drinksData
