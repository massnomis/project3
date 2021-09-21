var monke = artifacts.require("./monke.vy");

module.exports = function(deployer) {
  deployer.deploy(monke);
};
