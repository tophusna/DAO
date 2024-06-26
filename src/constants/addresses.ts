import { Networks } from "./blockchain";

const BSC_MAINNET = {
    NUSD_ADDRESS: "0xd2CA5F0e4D365Cb813Df0aD4ce9db05CeD0e5561",
    NMETA_ADDRESS: "0xF029354E17b67076268d387642DbB3AD1d49e3D9",
    BUSD_ADDRESS: "0xffa3B19EDAe07A458120a91408cC00917aedF607",
    STAKING_ADDRESS: "0x479FfaDbc4598BC2F0b1d2f0A17A492735b8DAE2",
    STAKING_HELPER_ADDRESS: "0x95d5e43083F55923e17202d4Eb7b1AC81f6cEe60",
    BONDING_CALC_ADDRESS: "0x6457752B599e8Ac6B15B7F04B4Cf1684FEA4Ed89",
    TREASURY_ADDRESS: "0xE39ce30132F62538A1dAaA04bfd7D2351b4D9ba6",
    ZAPIN_ADDRESS: "0x9ABE63C5A2fBcd54c8bAec3553d326356a530cae",
    WNUSD_ADDRESS: "0x209A35D32ab11c23E890eB45110F0739F21c9969",
};

const BSC_TESTNET = {
    NUSD_ADDRESS: "0x1fe8A7925bE4f68b7724202e9e62522424B927B2",
    NMETA_ADDRESS: "0xe599CBaA7f560E2B50Ba7a12A76E27334b7e979C",
    BUSD_ADDRESS: "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7",
    STAKING_ADDRESS: "0x9947d3D267cEA6e2dF1B33c3a5c43Dd059405B1F",
    STAKING_HELPER_ADDRESS: "0xa799660941930F85B4d06F8e779092b2FAfc1b3F",
    BONDING_CALC_ADDRESS: "0xfc52f254D74bB4b42Db578Ae0F302829fF9A2EDe",
    TREASURY_ADDRESS: "0x98F61A3ed4112bF6D90120035F6734376987aD26",
    ZAPIN_ADDRESS: "0x9ABE63C5A2fBcd54c8bAec3553d326356a530cae",
    WNUSD_ADDRESS: "0xC09cB1a6210a16aDda1D1483627aA913D18f967b",
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.BSC_MAINNET) return BSC_MAINNET;
    if (networkID === Networks.BSC_TESTNET) return BSC_TESTNET;

    throw Error("Network don't support");
};
