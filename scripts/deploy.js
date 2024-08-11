const hre = require("hardhat");

async function main() {
  const Ourtube = await hre.ethers.getContractFactory("Ourtube");
  const ourtube = await Ourtube.deploy();
  
  // Wait for the contract to be mined
  await ourtube.waitForDeployment();
  
  // Get the contract address
  const ourttubeAddress = await ourtube.getAddress();
  
  console.log("Ourtube deployed to:", ourttubeAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });