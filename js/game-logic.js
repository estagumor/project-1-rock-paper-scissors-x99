// All code should be written in this file.
let playerOneMoveOneType, playerOneMoveTwoType, playerOneMoveThreeType, playerOneMoveOneValue, playerOneMoveTwoValue, playerOneMoveThreeValue;

let playerTwoMoveOneType, playerTwoMoveTwoType, playerTwoMoveThreeType, playerTwoMoveOneValue, playerTwoMoveTwoValue, playerTwoMoveThreeValue;

const validTypes = ["rock", "paper", "scissors"];

const checkType = type => {
    return validTypes.includes(type);
};

const checkValue = value => {
    return value >= 1 && value <= 99;
};

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    const sum = moveOneValue + moveTwoValue + moveThreeValue;
    if (checkType(moveOneType) && checkType(moveTwoType) && checkType(moveThreeType) &&
        checkValue(moveOneValue) && checkValue(moveTwoValue) && checkValue(moveThreeValue)
        && sum <= 99) {
        if (player === 'Player One') {
            playerOneMoveOneType = moveOneType;
            playerOneMoveTwoType = moveTwoType;
            playerOneMoveThreeType = moveThreeType;
            playerOneMoveOneValue = moveOneValue;
            playerOneMoveTwoValue = moveTwoValue;
            playerOneMoveThreeValue = moveThreeValue;
        } else if (player === 'Player Two') {
            playerTwoMoveOneType = moveOneType;
            playerTwoMoveTwoType = moveTwoType;
            playerTwoMoveThreeType = moveThreeType;
            playerTwoMoveOneValue = moveOneValue;
            playerTwoMoveTwoValue = moveTwoValue;
            playerTwoMoveThreeValue = moveThreeValue;
        }
    }
};

const checkWinner = (type1, value1, type2, value2) => {
    if (type1 === undefined || value1 === undefined || type2 === undefined || value2 === undefined) {
        return null;
    }

    if (type1 === type2) {
        if (value1 > value2) {
            return 'Player One';
        } else if (value1 === value2) {
            return 'Tie';
        } else if (value1 < value2) {
            return 'Player Two';
        }
    } else {
        if (type1 === 'rock') {
            if (type2 === 'paper') {
                return 'Player Two';
            } else if (type2 === 'scissors') {
                return 'Player One';
            }
        } else if (type1 === 'paper') {
            if (type2 === 'scissors') {
                return 'Player Two';
            } else if (type2 === 'rock') {
                return 'Player One';
            }
        } else if (type1 === 'scissors') {
            if (type2 === 'rock') {
                return 'Player Two';
            } else if (type2 === 'paper') {
                return 'Player One';
            }
        }
    }
};

const getRoundWinner = (roundNum) => {
    if (roundNum === 1) {
        return checkWinner(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue);
    } else if (roundNum === 2) {
        return checkWinner(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue);
    } else if (roundNum === 3) {
        return checkWinner(playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue);
    } else {
        return null;
    }
};

const getGameWinner = () => {
    let wons = [0, 0];
    for (let i = 1; i < 4; i++) {
        let winner = getRoundWinner(i);
        if (winner === 'Player One') {
            wons[0] += 1;
        } else if (winner === 'Player Two') {
            wons[1] += 1;
        } else if (winner === null) {
            return null;
        }
    }

    if (wons[0] > wons[1]) {
        return 'Player One';
    } else if (wons[0] < wons[1]) {
        return 'Player Two';
    } else {
        return 'Tie';
    }
};

const setComputerMoves = () => {
    const type1 = validTypes[Math.floor(Math.random() * 3)];
    const type2 = validTypes[Math.floor(Math.random() * 3)];
    const type3 = validTypes[Math.floor(Math.random() * 3)];

    const value1 = Math.floor(Math.random() * 96) + 1;
    const value2 = Math.floor(Math.random() * (97 - value1)) + 1;
    const value3 = 99 - value1 - value2;

    setPlayerMoves('Player Two', type1, value1, type2, value2, type3, value3);
};