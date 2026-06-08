/**
 * Get Transaction Detail TronScan.org
 * @param {String} hash 
 */
const getTransactionDetail = async (hash) => {
    const response = await fetch(`https://apilist.tronscanapi.com/api/transaction-info?hash=${hash}`);
    const json = await response.json();
    return json;
}

getTransactionDetail("adef9f7ea1d1d331c3b4595003c8818f9f1024713193de7b7b333913330b5c87")
    .then((json) => {
        console.log(`Account ${json.tokenTransferInfo.from_address} transferred ${(parseFloat(json.tokenTransferInfo.amount_str) / Math.pow(10, json.tokenTransferInfo.decimals))} ${json.tokenTransferInfo.symbol} to ${json.tokenTransferInfo.to_address}`);
        console.log(`Result: ${json.contractRet} \t Status: ${json.confirmed ? "Confirmed" : "Unconfirmed"}`);
    });