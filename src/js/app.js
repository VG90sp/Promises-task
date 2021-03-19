import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((saving) => {
  // eslint-disable-next-line no-console
  console.log(saving);
}, (error) => {
  // eslint-disable-next-line no-console
  console.log(error);
});
