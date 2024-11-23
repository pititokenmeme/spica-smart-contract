import { Address, beginCell, fromNano, toNano } from '@ton/core';
import { NftCollection } from '../wrappers/NftCollection';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const OFFCHAIN_CONTENT_PREFIX = 0x01;
    const CONTENT_URL = "https://amaranth-sensible-cow-634.mypinata.cloud/ipfs/QmY2tn81S7QxaDyjtFMuv15werPP6Kz3Dp7eDvrqyJw9vZ/"; // Change to your content URL
    const NFT_PRICE = toNano('0.5');

    const contentCell = beginCell().storeInt(OFFCHAIN_CONTENT_PREFIX, 8).storeStringRefTail(CONTENT_URL).endCell();
    const owner = provider.sender().address;

    if (!owner) {
        console.log("Treasurt address is undefined");
        return;
    }

    const nftCollection = provider.open(await NftCollection.fromInit(owner, contentCell, NFT_PRICE));

    await nftCollection.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(nftCollection.address);
    console.log(`NftCollection deployed at address: ${nftCollection.address.toString()}`);

    // run methods on `nftCollection`
}