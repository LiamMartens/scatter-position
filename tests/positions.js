const test = require('ava');
let Positions;
try {
    Positions = require('scatter-position');
} catch(e) {
    Positions = require('./../src/lib');
}

test(t => {
    const generator = (new Positions())
                        .withBounds(200, 100)
                        .ofSize(20).withGutter(10)
                        .withExclude(50,50,150,150);
    const blocks = generator.generate(100);
    for(let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        for(let j = 0; j < blocks.length; j++) {
            if((i!=j) && (block.overlaps(blocks[j]) ||
                (block.position.x+block.size.width/2>=generator.exclude.start.x &&
                    block.position.x-block.size.width/2<=generator.exclude.end.x &&
                    block.position.y+block.size.height/2>=generator.exclude.start.y &&
                    block.position.y-block.size.height/2<=generator.exclude.end.y))) {
                t.fail();
                return false;
            }
        }
    }
    t.pass();
    return true;
});