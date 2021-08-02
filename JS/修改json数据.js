
const data = [
    { country: 'China', gold: 11, silver: 5, bronze: 8 },
    { country: 'Japan', gold: 11, silver: 4, bronze: 5 },
    { country: 'USA', gold: 10, silver: 11, bronze: 9 },
];


const demo = [
{ country: 'China', medal: 'gold', value: 11 },
{ country: 'China', medal: 'silver', value: 5 },
{ country: 'China', medal: 'bronze', value: 8 }
];


const res = [];
for (let item of data){
    let medals = ['gold', 'silver', 'bronze'];
    let scores = [item.gold, item.silver, item.bronze];
    for (let i = 0; i < 3; i++) {
        let temp = {};
        temp.country = item.country;
        temp.medal = medals[i];
        temp.value = scores[i];
        res.push(temp);
    }
}
console.log(res)

