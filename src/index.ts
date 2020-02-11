import * as CryptJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockHash = (
        index: number,
        previousHash: string,
        data: string,
        timestamp: number
    ): string => CryptJS.SHA256(index + previousHash + timestamp + data).toString();

    constructor(index: number, hash: string, previousHash: string, data: string, timestamp:number){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock: Block = new Block(0,"2020202020", "", "hello", 123456);

let blcokchain:[Block] = [genesisBlock];

const getBlockchain = (): Block[] => blcokchain;

const getLastestBlock = (): Block => blcokchain[blcokchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

console.log(blcokchain);

export{};


