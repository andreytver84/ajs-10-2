// TODO: write your code here
import sum from './basic';
import json from './parser';
import read from './reader';

console.log('worked');

console.log(sum([1, 2]));


export default class GameSavingLoader {
  static load() {
    return (async () => {
      try {
        const data = await  read();
        return await json(data);
      }
      catch(e) {
        console.log(e)
      }
    })();   
  }
}

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    return JSON.parse(saving)
  }
  catch(e) {
    console.log(e)
  }
})();