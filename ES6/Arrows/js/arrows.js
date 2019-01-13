const evens = [2, 4, 6, 8];

const odds = evens.map(v => v + 1);
const nums = evens.map((v, i) => v + i);
const pairs =  evens.map(v => ({even: v, odd: v + 1}));
const fives = [];

nums.forEach(v => {
    if(v % 5 == 0) {
        fives.push(v);
        console.log(fives)
    }
})

/*function num (a){
    a = a+1;
}

num(v=> v+1);*/

export {fives};

