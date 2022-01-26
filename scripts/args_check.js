function showMessage(value){
    if (arguments.length !== 1){
        throw new Error('showMessage() takes exactly one argument');
    }
    console.log(value);
}

try {
    showMessage('Hello');
}catch(e){
    console.log(e.message);
}