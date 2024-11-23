import { Address, fromNano, toNano } from '@ton/core';
import { NftCollection } from '../wrappers/NftCollection';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const nftCollection = provider.open(NftCollection.fromAddress(Address.parse('Provide NFT collection address here')));  //Provide NFT collection address here
    const nftMintTotalCost = await nftCollection.getGetNftMintTotalCost();

    console.log('NFT mint total cost: ' + fromNano(nftMintTotalCost) + ' TON');

    // Mint the NFT
    await nftCollection.send(
        provider.sender(),
        {
            value: toNano('0.01') + nftMintTotalCost,
        },
        "Mint"
    );
    console.log(`Additional NFT minting initiated`);
}