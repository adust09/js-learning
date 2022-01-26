function printf(format) {

    for (var i = 0, len = arguments.length; i < len; i++) {
        var pattern = new RegExp('\\{' + i + '\\}', 'g');
        format = format.replace(pattern, arguments[i]);
    }
    console.log(format);
}

printf('{0} {1}', 'Hello', 'World');