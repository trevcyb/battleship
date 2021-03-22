class Ship {
    constructor(name, position, length) {
        this.name = name;
        this.position = position;
        this.length = length;
        this.hits = [];
        this.isSunk = false;
    }

    hit(hitPosition) {
        this.hits.push(hitPosition);
    }

    sunk() {
        this.isSunk = this.position.every((takenBlock) => this.hits.includes(takenBlock));
    }

}

module.exports = Ship;

