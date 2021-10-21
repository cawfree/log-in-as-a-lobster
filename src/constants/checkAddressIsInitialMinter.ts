import owners from '../../assets/lobsters_owners.json';

/**
 * Checks if the supplied address was registered as one of the initial owners.
 * This is referenced against zhongfu's original gist, which has been cached to the assets/ directory.
 * https://gist.github.com/zhongfu/9f6f98070cc2afb1f72d4c2f90c6e31b
 * @param {string} address The wallet address of the EOA.
 * @return {boolean} If the address is of an initial minter, return true.
 */
export default function checkAddressIsInitialMinter(address: string): boolean {
  return !!owners.find(({address: a}) => a === address);
}
