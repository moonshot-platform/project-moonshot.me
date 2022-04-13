// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  chainId: 97,
  providerTestNetURL: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  providerMainNetURL: "https://bsc-dataseed.binance.org",
  silverAddress: "0x46192Bd44C9066D425375326808109C7d97a2181",
  buyContractAddress: "0x8862B7F7486763E83C3AC628e51De211EB3f70a5",
  tokenContractAddress: "0x5298AD82dD7C83eEaA31DDa9DEB4307664C60534",
  claimContractAddress: "0x02B2106E64d63D1dd3d4d6EC26bFA795193c9807",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
