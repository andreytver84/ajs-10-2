import Team from '../app';

test('Expecting result true', () => {

   const team = new Team();

  const member1 = { name: 'Andrey' };
  const member2 = { name: 'Andrey' };
  const member3 = member1;

  const res1 = team.addAll(member1,member2,member3,{ name: 'Andrey' }); // успешно


  const res2 = team.add(member1); // успешно
  const res3 = team.add(member2); // успешно
  const res4 = team.add(member3); // ошибка
  const res5 = team.add({ name: 'Andrey' }); // успешно *

  const exp = [{ name: 'Andrey' }, { name: 'Andrey' }, { name: 'Andrey' }];
  const res6 = team.toArray();

    
    expect(res1).toBe(true);
    expect(res2).toBe(true);
    expect(res3).toBe(true);
    expect(res4).toBe(Error);
    expect(res5).toBe(true);
    expect(res6).toEqual(true);
});
