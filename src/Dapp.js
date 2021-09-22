import React, { Component } from 'react'
import Web3 from 'web3'
import Monke from '../abis/monke.json'
import Navbar from './Navbar'
import Main from './Main'
import './App.css'

const web3 = new Web3(rpcUrl);
const bytecode = await web3.eth.getCode(address);
const isSmartContract = bytecode && utils.hexStripZeros(bytecode) !== "0x";

class Dapp extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = window.web3

    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    const networkId = await web3.eth.net.getId()

    // Load MonkeToken
    const monkeData = Monke.networks[networkId]
    if(monkeData) {
      const monke = new web3.eth.Contract(monke.abi, monkeData.address)
      this.setState({ monke })
      let monkeBalance = await monke.methods.balanceOf(this.state.account).call()
      this.setState({ monkeBalance: monkeBalance.toString() })
    } else {
      window.alert('Monke contract not deployed to detected network.')
    }
  }


  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }


  constructor(props) {
    super(props)
    this.state = {
      account: '0x0',
      monke: {},
      monkeBalance: '0',
      loading: true
    }
  }

  render() {
    let content
    if(this.state.loading) {
      content = <p id="loader" className="text-center">Loading...</p>
    } else {
      content = <Main
        monkeBalance={this.state.monkeBalance}
    
      />
    }

    return (
      <div>
        <Navbar account={this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '600px' }}>
              <div className="content mr-auto ml-auto">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                </a>

                {content}

              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
} export default Monke;