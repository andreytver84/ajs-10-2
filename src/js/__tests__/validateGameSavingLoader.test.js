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

  const res = (async () => {
    try {
      const saving = await GameSavingLoader.load();
      return JSON.parse(saving)
    }
    catch(e) {
      console.log(e)
    }
  })();

    expect(expect).toEqual(res);
});
