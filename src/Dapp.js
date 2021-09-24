import React, { Component } from 'react'
import Monke from '../src/abis/monke.json'
import Navbar from './Navbar'
import Main from './Main'
import '../src/styles/Global.css'
import 'tailwindcss/tailwind.css' 
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3' 
function getLibrary(provider) {
  return new Web3(provider)
}
function tailwind ({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  )
}
export default MyApp
class MyApp extends Component {
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }
}
  async ; loadBlockchainData(); {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    // Load MonkeToken
    const MonkeData = Monke.networks[networkId]
    if(MonkeData) {
      const mMnke = new web3.eth.Contract(Monke.abi, MonkeData.address)
      this.setState({ Monke })
      let MonkeBalance = await Monke.methods.balanceOf(this.state.account).call()
      this.setState({ MonkeBalance: MonkeBalance.toString() })
    } else {
      window.alert('Monke contract not deployed to detected network.')
    }
  }
  
  async ; loadWeb3() ; {
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
  stakeTokens = (amount) => {
    this.setState({ loading: true })
    this.state.Foti.methods.approve(this.state.monke._address, amount).send({ from: this.state.account }).on('transactionHash', (hash) => {
      this.state.monke.methods.stakeTokens(amount).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
    })
  }
  unstakeTokens = (amount) => {
    this.setState({ loading: true })
    this.state.monke.methods.unstakeTokens().send({ from: this.state.account }).on('transactionHash', (hash) => {
      this.setState({ loading: false })
    })
  }
  constructor(props) ; {
    super(props)
    this.state = {
      account: '0x0',
      Monke: {},
      Foti: {},
      FotiBalance: '0',
      monkeBalance: '0',
      stakingBalance: '0',
      loading: true
    }
  }
  render() ; {
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
