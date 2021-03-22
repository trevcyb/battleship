class Gameboard {
    constructor(board) {
        this.board = board || [];
        if (!this.board.length) {
            this.initBoard();
        }
    }

    initBoard = () => {
        for (let i = 0; i < 100; i++) {
            this.board.push({hasShip: false, hasShot: false})
        }
    }

    receiveAttack = (location) => {
        this.board[location].hasShot = true;
    }

    checkShipShot = (location) => {
        return this.board[location].hasShip;
    }

    displayShips = (location, ship, axis) => {
        const locationArr = [];
        for(i = 0; i < ship.length; i++) {
            axis === 'x' ? locationArr.push(location + i) : locationArr.push(locationArr + i * 10);
        }
        return locationArr;
    }

    
}