function hoge() {
    var args = Array.prototupe.slice.call(arguments);
    consolr.log(args.join(', '));
}

hoge(1, 2, 3);