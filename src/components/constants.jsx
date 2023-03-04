{
  /* imports For card on the first page*/
}

import { BiCheckShield } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiSmartphoneLine } from "react-icons/ri";

{
  /* imports For images on the Wallet page*/
}

import {
  brd,
  coinbase,
  Defi,
  exodus,
  metamask,
  phantom,
  pillar,
  rainbow,
  saitama,
  terra,
  trust,
  walletconnect,
} from "../assets";

{/** Exports for cards in the first page */ }

export const cardInfo = [
  {
    src: <BiCheckShield className="card-icon" />,
    id: 1,
    title: "Migration",
  },
  {
    src: <BiCheckShield className="card-icon" />,
    id: 2,
    title: "Validate",
  },
  {
    src: <FaRegMoneyBillAlt className="card-icon" />,
    id: 3,
    title: "Restore",
  },
  {
    src: <FaRegMoneyBillAlt className="card-icon" />,
    id: 3,
    title: "Staking review",
  },
  {
    src: <RiSmartphoneLine className="card-icon" />,
    id: 4,
    title: "Claim Reflection",
  },
  {
    src: <RiSmartphoneLine className="card-icon" />,
    id: 5,
    title: "Claim Airdrop",
  },
  {
    src: <FaRegMoneyBillAlt className="card-icon" />,
    id: 6,
    title: "Airdrop",
  },
  {
    src: <RiSmartphoneLine className="card-icon" />,
    id: 7,
    title: "Bridge",
  },
  {
    src: <RiSmartphoneLine className="card-icon" />,
    id: 8,
    title: "Claim",
  },
  {
    src: <BiCheckShield className="card-icon" />,
    id: 9,
    title: "Rectification",
  },
  {
    src: <BiCheckShield className="card-icon" />,
    id: 10,
    title: "Recovery",
  },
  {
    src: <FaRegMoneyBillAlt className="card-icon" />,
    id: 11,
    title: "Harvest my stakings",
  },
  {
    src: <FaRegMoneyBillAlt className="card-icon" />,
    id: 12,
    title: "Withdrawal",
  },
  {
    src: <RiSmartphoneLine className="card-icon" />,
    id: 13,
    title: "Staking pool",
  },
  {
    src: <RiSmartphoneLine className="card-icon" />,
    id: 14,
    title: "Review my NFTs",
  },
  {
    src: <BiCheckShield className="card-icon" />,
    id: 15,
    title: "Restore tokens",
  },
  {
    src: <BiCheckShield className="card-icon" />,
    id: 16,
    title: "Update my portfolio's",
  },
  {
    src: <FaRegMoneyBillAlt className="card-icon" />,
    id: 17,
    title: "Purchase Tokens",
  },
  {
    src: <RiSmartphoneLine className="card-icon" />,
    id: 18,
    title: "My NFT's",
  },
  {
    src: <RiSmartphoneLine className="card-icon" />,
    id: 19,
    title: "Other's",
  },
];

{
  /** Exports for logos in the second page */
}

const logosArray = [
  brd,
  coinbase,
  saitama,
  terra,
  phantom,
  Defi,
  exodus,
  walletconnect,
  rainbow,
  metamask,
  trust,
  pillar,
];

const names = [
  "BRD wallet",
  "Coinbase",
  "saitamask wallet",
  "Terra station",
  "Phantom wallet",
  "Cosmos station",
  "Exodus wallet",
  "Wallet connect",
  "Rainbow",
  "Trust",
  "Argent",
  "Metamask",
  "Binance chain",
  "Safemoon",
  "Gnosis Safe",
  "DeFi",
  "Pillar",
  "imToken",
  "ONTO",
  "TokenPcket",
  "Aave",
  "Digitex",
  "Ledger",
  "Portis",
  "Formatic",
  "MathWallet",
];
  export let logos = [];
  for (let i = 0; i < logosArray.length; i++) {
    logos.push({
      src: logosArray[i],
      title: names[i],
    });
};
  
console.log(logos);



