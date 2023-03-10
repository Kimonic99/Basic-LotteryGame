# ð Fullstack Basic Lottery Gameð®  

### [Play On ðð®](https://basic-lottery-game.vercel.app/) â© https://basic-lottery-game.vercel.app/

## Project Description ð

### Fullstack Basic Lottery Game ð® Using Chainlink VRF ð 

- Player can connect to the mini game using Metamask on Mumbai Network
- There is a maximum number of players per game.
- After max number of players have entered the game, one winner is chosen at random
- The winner will get maxplayers*entryfee amount of ether for winning the game


## Project Demo GIF ð¥
![Demo](./lottery-game.png)

## Directory Structure ð
- `backend/contracts` â© Smart Contract Code [Deployed @ Mumbai Test Network]
- `frontend` â© Project's Next frontend.
- `graph` â© Graph for indexing.

## How Does Chainlink VRF work â
Chainlink VRF (Verifiable Random Function) is a provably-fair and verifiable source of randomness designed for smart contracts. 
Smart contract developers can use Chainlink VRF as a tamper-proof random number generator (RNG) to build reliable smart contracts 
for any applications which rely on unpredictable outcomes.

## Run this project locally ðð¾ââï¸ð¨

```shell
git clone https://github.com/Kimonic99/Basic-LotteryGame.git
```

### Frontend ð¨ð

- `cd frontend`
- `npm install` Install Dependencies
- `npm run dev` Start the frontend in localhost 
- Open `http://localhost:3000` <br />
We can use the localhost frontend to interact with the smart contract on Mumbai Network

### Backend ð

- `cd backend`
- `npm install` Install Dependencies
- `npx hardhat --version` Check if Hardhat is properly installed 
- `npx hardhat compile` Compile the Smart Contract
- `npx hardhat test` Test the Smart Contract Locally
- `npx hardhat run scripts/deploy.js` Deploy the Smart Contract Locally


### ð Lottery Game Contract Address ð
[ð 0x500e6c232906bFaa097C41927c5cb823DCbF4E61 ð¸](https://mumbai.polygonscan.com/address/0x500e6c232906bFaa097C41927c5cb823DCbF4E61#code)
