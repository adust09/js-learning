let m = new Map();
m.set('dog','わんわん');
m.set('cat','にゃー');
m.set('bird','ちょー');

console.log(m.size);
console.log(m.get('dog'));
console.log(m.get('cat'));


for (let key of m.keys()){
    console.log(key);
}

for (let value of m.values()){
    console.log(value);
}

for (let [key,value] of m.entries()){
    console.log(key,value);
}

m.delete('dog');
console.log(m.size);