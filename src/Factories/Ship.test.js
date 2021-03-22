const Ship = require('./Ship');

let destroyer;
beforeEach(() => {
    destroyer = new Ship('destroyer', [1,2,3,4], 4);
}) 

test('checks hits', () => {
    destroyer.hit(1);
    expect(destroyer.hits).toEqual([1]);
})

test('checks multiple hits', () => {
    destroyer.hit(1);
    destroyer.hit(2);
    expect(destroyer.hits).toEqual([1,2]);
})

test('checks not sunk', () => {
    destroyer.hit(1);
    destroyer.hit(2);
    destroyer.sunk();
    expect(destroyer.isSunk).toEqual(false);
})

test('checks sink ship', () => {
    destroyer.hit(1);
    destroyer.hit(2);
    destroyer.hit(3);
    destroyer.hit(4);
    destroyer.sunk();
    expect(destroyer.isSunk).toEqual(true);
})
