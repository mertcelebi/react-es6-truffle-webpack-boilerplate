import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import Web3 from "web3";

if (typeof web3 !== "undefined") {
  web3 = new Web3(web3.currentProvider);
} else {
  const host = process.env.RPC_HOST || "127.0.0.1";
  const port = process.env.RPC_PORT || 7545;
  web3 = new Web3(new Web3.providers.HttpProvider(`${host}:${port}`));
}

render(<App web3={web3} />, document.getElementById("root"));
