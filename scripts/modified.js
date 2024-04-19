const { ethers } = require("hardhat")

async function enterRaffle() {
    const raffle = await ethers.getContract("Raffle")
    const entranceFee = await raffle.getEntranceFee()
    await raffle.enterRaffle({ value: entranceFee })
    console.log(" ")
    console.log(" ")
    console.log("====>>>> Interactive Test Run Starting <<<<====")
    console.log(" ")
    console.log(" ")
    console.log("This modified.js script will quickly check and interact with the deployed Modified Lottery smart contract from a local Hardhat Node. This modified smart contract will never be deployed to Testnet or Mainnet.")
    console.log(" ")
    console.log(" ")
    console.log("Entered! This enterRaffle check passed and is using a modified version of Patrick's Lottery smart contract. It utilizes a new PrizeMultiplier that gives winners a bonus.")
    console.log(" ")
    console.log(" ")
    console.log("====>>>> Interactive Test Run Finished <<<<====")
    console.log(" ")
    console.log(" ")
}

enterRaffle()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
