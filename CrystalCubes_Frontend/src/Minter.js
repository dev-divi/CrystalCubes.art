import { useEffect, useState } from "react";
import {
  connectWallet,
  getCurrentWalletConnected,
  mint,
  setGameStatusContract
} from "./functions.js"; 
//import importWalletButton from "./Importwalletbutton.js"
import About from "./About.js"

///////////////////////////////////////START CONNECT WALLET [do not change]/////////////////////////////////////
const Minter = (props) => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [info, setInfo] = useState(""); 
  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();

    setWallet(address);
    setStatus(status);

    addWalletListener();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("Ready.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };
///////////////////////////////////////END CONNECT WALLET/////////////////////////////////////

//START 

  //const [fireStatus, setFire] = useState("");
  //const [fireGameStatus, fireSetGameStatus] = useState("");

  const fireme = async () => {                           
    setGameStatusContract();
    //console.log("Ask dev to reenable button")
  };
  const link = "";
  const linkcontract = "";
  return (
    
    <div className="Minter" >

      <div className="InsideMinter">
        <button id="walletButton" onClick={connectWalletPressed}>
          {walletAddress.length > 0 ? (
            "Connected: " +
            String(walletAddress).substring(0, 6) +
            "..." +
            String(walletAddress).substring(35, 38)
          ) : (
            <span>Connect Wallet</span>
          )}
        </button>
        <br></br>
        <h1 id="title">{/*Divi's ... Eternal... Infinity...Possibility */}Divi's Crystal Cubes  </h1>
        <iframe id="nftmain" src="https://ipfs.io/ipfs/QmUEebbXD1NW6vyhHMF5YgTvSqVWSNJ2n41PcRuKxEDxkV?filename=Crystal_Cube.html"> </iframe> 
        {/* <img src={logo} className="App-logo" alt="logo" id="supermint"/> */} 
        <br /> 
        <h4> This prototype NFT Collection evolved into:  </h4>  
        
        <a href="https://amysterycubesclub.com/"> <button id="buttonspecial" > A Mystery Cubes Club!  </button> </a> 
        {/* 
        <button id="buttonspecial" onClick={fireme}> M I N T </button> 
        */} 
        <p id="status" > 
        <br />
        <br /><br />
        <br /><br />
        
          <br /> 
        </p>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> 
        <About />
        
      </div>

    </div>
  );
};

export default Minter;
