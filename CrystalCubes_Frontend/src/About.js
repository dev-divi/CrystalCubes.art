import Provenance from "./Provenance.js"
import ProvenanceList from "./ProvenanceList";

const About = () => {
    return ( 
        <div id="About"> 
           <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> 
              <div id="community">
                <h2> _THE CUBES NETWORK_ </h2>
                
                <a href="https://discord.gg/dYApub3mMf" id="statbutton" className="navlinkexternal" style= {{}}>   _ The Cubes Discord _</a>
                <br /><br />
                For all inquiries contact @0xdivi on twitter. 
                <br /><br /><br />
              </div>

              <br /><br /><br /><br /><br /><br /><br /><br />   

              <div id="provenance"> 
              <h2>  P R O V E N A N C E </h2> 
              <Provenance /> 
              <br /><br />
              <ProvenanceList /> 
              </div>

              <br /> <br /><br /> <br />  
              <p id="disclaimer"><br /> Disclaimer: <br /> <br />
                This project involves cryptocurrency, and is connected to a contract deployed on the Ethereum blockchain. <br />
                Interaction with the functions in this project involves real 'fake internet magic money', <br /> 
                e.g. CRYPTOCURRENCY, tied to real money.  <br /><br />
                The creator assumes no responsibility for any at all losses or damages <br /> 
                caused by the use of this unaudited experimental smart contract. <br /> 
                The creator is not a financial advisaurus. <br />
                This work is considered final as is. <br /><br />
              </p> 
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        </div>
     );
}
 
export default About;