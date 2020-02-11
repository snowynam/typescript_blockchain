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
        timestamp: number,
        data: string
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

const createNewBlock = (data: string): Block =>{
    const previousBlock: Block = getLastestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimestamp = getNewTimeStamp();
    const newHash: string = Block.calculateBlockHash(
        newIndex, previousBlock.hash, newTimestamp, data
    );
    const newBlock: Block = new Block(
        newIndex,
        newHash,
        previousBlock.hash,
        data,
        newTimestamp
    );
    return newBlock;
}

console.log(createNewBlock("Hello"), createNewBlock("byebye"));

export{};


