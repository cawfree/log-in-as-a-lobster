import axios from 'axios';

import {Lobster, OpenSeaAssets} from '../@types';

import CONTRACT_ADDRESS from './CONTRACT_ADDRESS';
import checkAddressIsInitialMinter from './checkAddressIsInitialMinter';

/**
 * Checks if the supplied address is the holder of a Lobster NFT.
 * @param {string} address The wallet address of the EOA.
 * @return {Promise<Lobster | null>} If the address holds a Lobster, will return a valid Lobster object; else null.
 */
export default async function checkAddressIsLobster({address}: {
  readonly address?: string;
}): Promise<Lobster | null> {
  if (typeof address === 'string') {
    const {data} = await axios({
      url: `https://api.opensea.io/api/v1/assets?owner=${address}&asset_contract_address=${CONTRACT_ADDRESS}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const {assets} = data as OpenSeaAssets;
    if (assets.length) {
      return {
        isInitialMinter: checkAddressIsInitialMinter(address),
      };
    }
  }
  return Promise.resolve(null);
}
