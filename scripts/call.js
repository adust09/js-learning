var data = 'Global data';
var obj1 = { data: 'Object 1 data' };
var obj2 = { data: 'Object 2 data' };

function hoge() {
    console.log(this.data);
}

hoge.call(null);
hoge.call(obj1);
hoge.call(obj2);