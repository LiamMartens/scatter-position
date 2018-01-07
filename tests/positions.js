import test from 'ava';
import Positions from './../src/lib';

test(t => {
    const generator = (new Positions())
                        .withBounds(200, 100)
                        .ofSize(20).withGutter(10)
                        .withExclude(50,50,150,150);
    const blocks = generator.generate(4);
    for(let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        for(let j = 0; j < blocks.length; j++) {
            if((i!=j) && (block.overlaps(blocks[j]) ||
                (block.position.x>=generator.exclude.start.x &&
                    block.position.x<=generator.exclude.end.x &&
                    block.position.y>=generator.exclude.start.y &&
                    block.position.y<=generator.exclude.end.y))) {
                t.fail();
                return false;
            }
        }
    }
    t.pass();
    return true;
});