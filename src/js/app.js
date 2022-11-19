// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

class Team {
    constructor() {
        this.members = new Set();
    }
    add(char) {
       /* if (this.members.has(char)) {
            throw new Error('Персонаж уже в команде');
        } else {
            this.members.add(char);
            //console.log('успешно');
        }  */  
        try {
            if (this.members.has(char)) {
                throw new Error('Персонаж уже в команде');
            } else {
                this.members.add(char);
                //console.log('успешно');
            } 
        } catch(Err)  {            
        }           
    }
    addAll(...char) {
        this.members.add(...char);
        //console.log('успешно');
    };
    toArray() {
        return Array.from(this.members);
    };
}

/* const team = new Team();

const member1 = { name: 'Andrey' };
const member2 = { name: 'Andrey' };
const member3 = member1;

team.addAll(member1,member2,member3,{ name: 'Andrey' }); // успешно


team.add(member1); // успешно
team.add(member2); // успешно
team.add(member3); // ошибка
team.add({ name: 'Andrey' }); // успешно 

console.log(team.toArray());*/