const test = require('ava');
let Block;
try {
    Block = require('scatter-position').Block;
} catch(e) {
    Block = require('./../src/lib').Block;
}

test(t => {
    const block1 = new Block(10, 10, 20, 20, true);
    const block2 = new Block(19, 19, 20, 20, true);
    if(block1.overlaps(block2)) {
        t.pass();
        return true;
    }
    t.fail('Not overlapped');
    return false;
});

test(t => {
    const block1 = new Block(10, 10, 20, 20, true);
    const block2 = new Block(30, 30, 20, 20, true);
    if(!block1.overlaps(block2)) {
        t.pass();
        return true;
    }
    t.fail('Overlapped');
    return false;
});

test(t => {
    const block1 = new Block(10, 10, 20, 20, true);
    const block2 = new Block(30, 30, 20, 20, true);
    if(block1.overlaps(block2, 10)) {
        t.pass();
        return true;
    }
    t.fail('Not overlapped');
    return false;
});