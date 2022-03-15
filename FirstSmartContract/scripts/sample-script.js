const hre = require("hardhat");

async function main() {
  const ExampleContract = await hre.ethers.getContractFactory("ExampleContract");
  const exampleContract = await ExampleContract.deploy();

  await exampleContract.deployed();

  console.log("Contract deployed to:", exampleContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
