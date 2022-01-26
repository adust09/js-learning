let = pet ={
    type:'スノーホワイトハムスター',
    name : 'キラ',
    description:{
        birth:'2014年5月'
    }
}

let = pet2 ={
    name : '山田キラ',
    color : '白',
    description:{
        food:'ひまわりの種'
    }
}

let = pet3 ={
    weight : '42',
    photo: 'https://www.wings.msn.to/images/wings/wings_logo.png',
}

Object.assign(pet,pet2,pet3);
console.log(pet);