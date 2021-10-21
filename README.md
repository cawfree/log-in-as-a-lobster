# 🦞 log-in-as-a-lobster 🦞
A TypeScript implementation of [__Log In as a Lobster__](https://lobsters.substack.com/p/product-hunt-as-a-protocol-or-grassroots), which can be used to verify if a given wallet address is the holder of an asset from the [__lobsterdao__](https://opensea.io/collection/lobsterdao) collection.

## 🚀 Getting Started

```shell
yarn add log-in-as-a-lobster
```

```typescript
import {checkAddressIsLobster} from 'log-in-as-a-lobster';

(async () => {
  const isUserALobster = !!(await checkAddressIsLobster({
    address: '0x13880821e1d2453E77bccE113700765C65A0dF90',
  }));
  if (isUserALobster) {
    // wagmi
    return;
  }
  //ngmi
})();
```

## ✌️ License
[__MIT__](./LICENSE)