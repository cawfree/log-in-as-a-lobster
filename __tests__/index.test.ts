import {ethers} from 'ethers';

import owners from '../assets/lobsters_owners.json';

import {checkAddressIsInitialMinter, checkAddressIsLobster} from '../src'

const cawfree = '0x13880821e1d2453E77bccE113700765C65A0dF90';

test('jest', () => {
  expect(true).toBeTruthy();
});

const randomAddress = (): string => {
  const {address} = ethers.Wallet.createRandom();
  return address;
};

test('checkAddressIsLobster:random', async () => {
  const maybeResult = await checkAddressIsLobster({address: randomAddress()});
  expect(maybeResult).toBe(null);
});

test('checkAddressIsLobster:cawfree', async () => {
  const maybeLobster = await checkAddressIsLobster({address: cawfree});
  expect(maybeLobster).toBeTruthy();
  const {isInitialMinter} = maybeLobster;
  expect(isInitialMinter).toBe(false);
});

test('checkAddressIsInitialMinter:owners', async () => {
  owners.map(({address}) => expect(checkAddressIsInitialMinter(address as string)).toBe(true));
});

test('checkAddressIsInitialMinter:random', async () => {
  expect(checkAddressIsInitialMinter(randomAddress())).toBe(false);
  expect(checkAddressIsInitialMinter(cawfree)).toBe(false);
});
