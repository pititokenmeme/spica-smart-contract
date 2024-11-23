# spica-smart-contract with TACT

1. Start by creating a TACT project by running the following command in your terminal:
npm create ton@latest

2. Follow the prompts:
Give your project a name.
When asked for a template, select "An empty contract (TACT)".

3. Before deploying our contract, we need to compile it. This will generate a build file, and if there are no errors, the contract can be deployed to the TON network.
To compile, run npx blueprint build in the terminal.
To deploy, run npx blueprint run in the terminal to start the deployment process.
Then, select the testnet, "Ton Connect compatible mobile wallet," and finally, the TonKeeper options in sequence.

4. Finally, by scanning the generated QR code and confirming the transaction through the TonKeeper mobile app, we can deploy our contract to the TON network.
