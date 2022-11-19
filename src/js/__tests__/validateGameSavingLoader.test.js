import GameSavingLoader from '../app';

test('Expecting result true', () => {

  const expect = {
    "id": 9,
    "created": 1546300800,
    "userInfo": {
      "id": 1,
      "name": "Hitman",
      "level": 10,
      "points": 2000
    }
  }

  const res = GameSavingLoader.load().then((saving) => {
    return JSON.parse(saving)       
  });

    expect(expect).toEqual(res);
});
