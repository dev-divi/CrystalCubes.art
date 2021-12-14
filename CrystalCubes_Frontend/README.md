# 🪜 Installation
To use this minter, you'll need to do the following:

1. Run `npm install` to download the `node_modules` folder.
2. Download the [dotenv package](https://www.npmjs.com/package/dotenv) in your project directory by running `npm install dotenv --save` in your terminal
3. Create a `.env` file in the root directory by entering the following on your command line: `vim .env` and then add your [Alchemy API Key](https://docs.alchemyapi.io/alchemy/tutorials/nft-minter#create-your-alchemy-api-key)  

``` 
REACT_APP_ALCHEMY_KEY = https://eth-ropsten.alchemyapi.io/v2/<alchemy-key>
```

4. Run `npm start`in your terminal to open the minter in your browswera at http://localhost:3000/.
