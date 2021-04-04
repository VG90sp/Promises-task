import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read().then((res) => json(res)).then((res) => new GameSaving(res));
  }
}
