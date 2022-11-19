// TODO: write your code here
import sum from './basic';
import json from './parser';
import read from './reader';

console.log('worked');

console.log(sum([1, 2]));

export default class GameSavingLoader {
  static load() {      
    return new Promise((resolve, reject) => {
      read().then((data) => {
        resolve(json(data))          
      })
    })
  }
}

GameSavingLoader.load().then((saving) => {
  return JSON.parse(saving)       
}, (error) => {
  console.log(error)
});