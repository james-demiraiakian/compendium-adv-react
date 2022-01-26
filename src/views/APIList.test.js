import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import APIList from './APIList';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

//Mock Service Worker setup
//'rest' is the api endpoint we want to hit
//'rest' takes in api endpoint and callback function
// set up 'mock' server response

// const mockResp = [
//   {
//     API: 'AdoptAPet',
//     Description: 'Resource to help get pets adopted',
//     Auth: 'apiKey',
//     HTTPS: true,
//     Cors: 'yes',
//     Link: 'https://www.adoptapet.com/public/apis/pet_list.html',
//     Category: 'Animals',
//   },
//   {
//     API: 'Axolotl',
//     Description: 'Collection of axolotl pictures and facts',
//     Auth: '',
//     HTTPS: true,
//     Cors: 'no',
//     Link: 'https://theaxolotlapi.netlify.app/',
//     Category: 'Animals',
//   },
//   {
//     API: 'Cat Facts',
//     Description: 'Daily cat facts',
//     Auth: '',
//     HTTPS: true,
//     Cors: 'no',
//     Link: 'https://alexwohlbruck.github.io/cat-facts/',
//     Category: 'Animals',
//   },
//   {
//     API: 'Cataas',
//     Description: 'Cat as a service (cats pictures and gifs)',
//     Auth: '',
//     HTTPS: true,
//     Cors: 'no',
//     Link: 'https://cataas.com/',
//     Category: 'Animals',
//   },
//   {
//     API: 'catAPI',
//     Description: 'Random pictures of cats',
//     Auth: '',
//     HTTPS: true,
//     Cors: 'yes',
//     Link: 'https://thatcopy.pw/catapi',
//     Category: 'Animals',
//   },
//   {
//     API: 'Cats',
//     Description: 'Pictures of cats from Tumblr',
//     Auth: 'apiKey',
//     HTTPS: true,
//     Cors: 'no',
//     Link: 'https://docs.thecatapi.com/',
//     Category: 'Animals',
//   },
//   {
//     API: 'Dog Facts',
//     Description: 'Random dog facts',
//     Auth: '',
//     HTTPS: true,
//     Cors: 'yes',
//     Link: 'https://dukengn.github.io/Dog-facts-API/',
//     Category: 'Animals',
//   },
//   {
//     API: 'Dog Facts',
//     Description: 'Random facts of Dogs',
//     Auth: '',
//     HTTPS: true,
//     Cors: 'yes',
//     Link: 'https://kinduff.github.io/dog-api/',
//     Category: 'Animals',
//   },
//   {
//     API: 'Dogs',
//     Description: 'Based on the Stanford Dogs Dataset',
//     Auth: '',
//     HTTPS: true,
//     Cors: 'yes',
//     Link: 'https://dog.ceo/dog-api/',
//     Category: 'Animals',
//   },
//   {
//     API: 'eBird',
//     Description: 'Retrieve recent or notable birding observations within a region',
//     Auth: 'apiKey',
//     HTTPS: true,
//     Cors: 'no',
//     Link: 'https://documenter.getpostman.com/view/664302/S1ENwy59',
//     Category: 'Animals',
//   },
//   {
//     API: 'FishWatch',
//     Description: 'Information and pictures about individual fish species',
//     Auth: '',
//     HTTPS: true,
//     Cors: 'yes',
//     Link: 'https://www.fishwatch.gov/developers',
//     Category: 'Animals',
//   },
//   {
//     API: 'HTTPCat',
//     Description: 'Cat for every HTTP Status',
//     Auth: '',
//     HTTPS: true,
//     Cors: 'yes',
//     Link: 'https://http.cat/',
//     Category: 'Animals',
//   },
//   {
//     API: 'IUCN',
//     Description: 'IUCN Red List of Threatened Species',
//     Auth: 'apiKey',
//     HTTPS: false,
//     Cors: 'no',
//     Link: 'http://apiv3.iucnredlist.org/api/v3/docs',
//     Category: 'Animals',
//   },
//   {
//     API: 'MeowFacts',
//     Description: 'Get random cat facts',
//     Auth: '',
//     HTTPS: true,
//     Cors: 'no',
//     Link: 'https://github.com/wh-iterabb-it/meowfacts',
//     Category: 'Animals',
//   },
//   {
//     API: 'Movebank',
//     Description: 'Movement and Migration data of animals',
//     Auth: '',
//     HTTPS: true,
//     Cors: 'yes',
//     Link: 'https://github.com/movebank/movebank-api-doc',
//     Category: 'Animals',
//   },
//   {
//     API: 'Petfinder',
//     Description:
//       'Petfinder is dedicated to helping pets find homes, another resource to get pets adopted',
//     Auth: 'apiKey',
//     HTTPS: true,
//     Cors: 'yes',
//     Link: 'https://www.petfinder.com/developers/',
//     Category: 'Animals',
//   },
//   {
//     API: 'PlaceBear',
//     Description: 'Placeholder bear pictures',
//     Auth: '',
//     HTTPS: true,
//     Cors: 'yes',
//     Link: 'https://placebear.com/',
//     Category: 'Animals',
//   },
//   {
//     API: 'PlaceDog',
//     Description: 'Placeholder Dog pictures',
//     Auth: '',
//     HTTPS: true,
//     Cors: 'yes',
//     Link: 'https://place.dog',
//     Category: 'Animals',
//   },
//   {
//     API: 'PlaceKitten',
//     Description: 'Placeholder Kitten pictures',
//     Auth: '',
//     HTTPS: true,
//     Cors: 'yes',
//     Link: 'https://placekitten.com/',
//     Category: 'Animals',
//   },
//   {
//     API: 'RandomCat',
//     Description: 'Random pictures of cats',
//     Auth: '',
//     HTTPS: true,
//     Cors: 'yes',
//     Link: 'https://aws.random.cat',
//     Category: 'Animals',
//   },
//   {
//     API: 'RandomDog',
//     Description: 'Random pictures of dogs',
//     Auth: '',
//     HTTPS: true,
//     Cors: 'yes',
//     Link: 'https://random.dog/woof.json',
//     Category: 'Animals',
//   },
//   {
//     API: 'RandomDuck',
//     Description: 'Random pictures of ducks',
//     Auth: '',
//     HTTPS: true,
//     Cors: 'no',
//     Link: 'https://random-d.uk/api',
//     Category: 'Animals',
//   },
//   {
//     API: 'RandomFox',
//     Description: 'Random pictures of foxes',
//     Auth: '',
//     HTTPS: true,
//     Cors: 'no',
//     Link: 'https://randomfox.ca/floof/',
//     Category: 'Animals',
//   },
//   {
//     API: 'RescueGroups',
//     Description: 'Adoption',
//     Auth: '',
//     HTTPS: true,
//     Cors: 'unknown',
//     Link: 'https://userguide.rescuegroups.org/display/APIDG/API+Developers+Guide+Home',
//     Category: 'Animals',
//   },
//   {
//     API: 'Shibe.Online',
//     Description: 'Random pictures of Shiba Inu, cats or birds',
//     Auth: '',
//     HTTPS: true,
//     Cors: 'yes',
//     Link: 'http://shibe.online/',
//     Category: 'Animals',
//   },
//   {
//     API: 'The Dog',
//     Description:
//       'A public service all about Dogs, free to use when making your fancy new App, Website or Service',
//     Auth: 'apiKey',
//     HTTPS: true,
//     Cors: 'no',
//     Link: 'https://thedogapi.com/',
//     Category: 'Animals',
//   },
//   {
//     API: 'Zoo Animals',
//     Description: 'Facts and pictures of zoo animals',
//     Auth: '',
//     HTTPS: true,
//     Cors: 'yes',
//     Link: 'https://zoo-animal-api.herokuapp.com/',
//     Category: 'Animals',
//   },
// ];

// const server = setupServer(
//   rest.get('https://api.publicapis.org/entries', (req, res, ctx) => {
//     return res(ctx.json(mockResp));
//   })
// );

// //runs before everything
// beforeAll(() => {
//   server.listen();
// });

// //runs after everything
// afterAll(() => {
//   server.close();
// });

//test dropdown displays
test('test for dropdown display', async () => {
  render(<APIList />);

  const dropdown = await screen.findByRole('combobox');
  expect(dropdown).toBeInTheDocument();
});

//test for category options exist
test('test for dropdown display', async () => {
  render(<APIList />);

  const option = await screen.findByRole('option', { name: /all/i });
  expect(option).toBeInTheDocument();
});

//test category select changes cards rendered
test('test for category behavior', async () => {
  render(<APIList />);

  const category = await screen.findByRole('combobox');
  userEvent.selectOptions(category, 'Books');
  expect(screen.getByRole('option', { name: 'Books' }).selected).toBe(true);
});

//test api tiles render
