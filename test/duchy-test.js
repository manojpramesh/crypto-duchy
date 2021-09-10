const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CryptoDuchy", function () {
  it("Should allow new duke or duchess to claim the duchy", async function () {
    const Duchy = await ethers.getContractFactory("CryptoDuchy");
    const duchy = await Duchy.deploy(10);
    await duchy.deployed();

    expect(await duchy.getTax()).to.equal(10);
    expect(await duchy.getNobleman()).to.equal([]);

    const becomeNobleTx = await duchy.becomeNoble("Mary poppins!");

    // wait until the transaction is mined
    await becomeNobleTx.wait();

    expect(await duchy.getTax()).to.equal(10);
    expect(await duchy.getNobleman()).to.equal([]);
  });
});
