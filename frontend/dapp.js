// @TODO: Update this address to match your deployed Monke contract!
const contractAddress = "0x7a377fAd8c7dB341e662c93A79d0B0319DD3DaE8";
const dApp = {
    ethEnabled: function() {
      // If the browser has an Ethereum provider (MetaMask) installed
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
        return true;
      }
      return false;
    },
    collectVars: async function() {
        // get land tokens
        this.tokens = [];
        this.totalSupply = await this.meowshiContract.methods.totalSupply().call();