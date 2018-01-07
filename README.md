# Scatter Position
Script for generating non overlapping optionally guttered positions

### Installation
Install using npm
`npm install --save-dev scatter-position`
or include in html
`<script src="scatter-position.js"></script>`

### Usage
```
import Positions from 'scatter-position';

const generator = (new Positions())
                    .withBounds(200, 100)
                    .ofSize(20).withGutter(10)
                    .withExclude(50,50,150,150);

const blocks = generator.generate(4);
```