async function main() {
  const USDR = await ethers.getContractFactory("USDR");
  const usdr = await USDR.deploy(ethers.utils.parseUnits("4500000", 18));
  await usdr.deployed();

  console.log("USDR address:", usdr.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
