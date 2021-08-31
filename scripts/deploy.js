async function main() {
  const USDR = await ethers.getContractFactory("USDR");
  const usdr = await USDR.deploy();
  await usdr.deployed();

  console.log("USDR address:", usdr.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
