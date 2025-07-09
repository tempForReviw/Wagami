# 🚀 Blockchain-Based Crowdfunding dApp

A decentralized crowdfunding platform built on the **Ethereum blockchain**, tested on the **Sepolia Testnet**, enabling users to create campaigns and receive secure, transparent donations globally.

---

## 📚 Table of Contents
- [📌 Project Overview](#-project-overview)  
- [🧪 Technologies Used](#-technologies-used)  
- [✨ Features](#-features)  
- [⚙️ Installation](#-installation)  
- [🚀 Usage](#-usage)  
- [🔐 Smart Contract Design](#-smart-contract-design)  
- [🌐 How Blockchain Enhances Crowdfunding](#-how-blockchain-enhances-crowdfunding)  
- [🛡️ Security Features](#-security-features)  
- [🤝 Contributing](#-contributing)

---

## 📌 Project Overview

### 💡 What is Crowdfunding?
Crowdfunding is a method of raising small amounts of money from a large number of people—typically online—for a specific project or cause. However, traditional platforms are often **centralized**, which can lead to:
- Trust and transparency issues  
- Risk of fraud  
- High transaction fees  
- Geographic limitations

### 💡 What This Project Solves
This dApp leverages **Ethereum smart contracts** to build a **decentralized crowdfunding system** where:
- Anyone can start a campaign  
- Anyone worldwide can donate using **ETH**  
- All activity is **transparent**, **secure**, and **immutable**

---

## 🧪 Technologies Used

### 🖥 Frontend
- **React** – Component-based UI development  
- **Vite** – Fast build and dev server  
- **Thirdweb SDK** – Easy Web3 integrations  

### ⚙️ Backend / Blockchain
- **Solidity** – Smart contract language  
- **Ethereum (Sepolia Testnet)** – Blockchain network  
- **IPFS** – Decentralized media and data storage  

### 💸 Cryptocurrency
- **Ether (ETH)** – Native currency for donations  

---

## ✨ Features

### 🏗️ Campaign Creation
- Create campaigns with **title**, **description**, **goal**, and **deadline**  
- Upload images/videos to **IPFS**  
- All campaign data stored and verified via **smart contracts**

### 💰 Donation System
- Donate using **ETH** with real-time updates  
- Every donation recorded on the blockchain  
- Instant feedback after donation confirmation

### 📜 Smart Contract Integration
- Enforces rules: campaigns only get funds if the **goal is met before deadline**  
- Automatic **refunds** if funding fails  
- Fully trustless: no need for middlemen

### 🔍 Transparency & Trust
- **Real-time tracking** of campaign performance  
- Immutable donation history  
- Public auditability via Ethereum blockchain

### 🔐 Security Features
- **Immutable records**: once on-chain, data cannot be altered  
- **Automatic fund distribution** by smart contracts  
- Resistant to fraud, manipulation, or unauthorized access

### 🌍 Global Access
- Open to **any contributor worldwide**  
- No central authority or geo-restrictions  

---

## ⚙️ Installation

### ✅ Prerequisites
- **Metamask** (browser extension)  
- **Node.js & npm**  
- **Vite** (comes with the frontend)  
- **Thirdweb CLI** (optional for contract deployment)

---

### 🛠 Setup Steps

```bash
# Clone the repo
cd "folder-name"

# Install backend dependencies
npm install

# Move into client (frontend) folder
cd client
npm install -f

# Start the development server
npm run dev
🔗 Visit: http://localhost:5173 to use the app.

🚀 Usage
🔧 Create a Campaign
Connect your Ethereum wallet (via MetaMask)

Fill in campaign details: title, description, target, deadline

Upload media to IPFS

Submit campaign to the blockchain

🤝 Donate to a Campaign
View active campaigns

Select a campaign and donate ETH

Transactions are transparent and trackable

📊 Track Progress
View real-time donation amounts

Campaign creators can post updates

Contributors can monitor progress easily

🔐 Smart Contract Design
Written in Solidity

Handles:

Campaign creation

ETH collection

Goal check and refund logic

Contracts deployed using Thirdweb

🌐 How Blockchain Enhances Crowdfunding
🧩 Benefit	🚀 Impact
Decentralization	No central authority controls funds
Transparency	All transactions are visible on the blockchain
Security	Funds protected by Ethereum's cryptographic infrastructure
Immutability	No one can alter past donations or campaign data once stored on-chain

🛡️ Security Features
Uses Ethereum’s immutability and consensus for fund security

Smart contracts automate rules and eliminate fraud risk

IPFS ensures media/data cannot be manipulated post-upload

🤝 Contributing
We welcome contributions from the community!
