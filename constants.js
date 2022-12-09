const sector_to_link = new Map([
    [ 'INDIA VIX', '#' ],
    [ 'NIFTY BANK', 'bankNifty' ],
    [ 'NIFTY PSU BANK', 'cnxPSU' ],
    [ 'NIFTY PVT BANK', 'niftyPvtBank' ],
    [ 'NIFTY METAL', 'cnxMetal' ],
    [ 'NIFTY AUTO', 'cnxAuto' ],
    [ 'NIFTY MEDIA', 'cnxMedia' ],
    [ 'NIFTY ENERGY', 'cnxEnergy' ],
    [ 'NIFTY INFRA', 'cnxInfra' ],
    [ 'NIFTY FMCG', 'cnxFMCG' ],
    [ 'NIFTY PHARMA', 'cnxPharma' ],
    [ 'NIFTY IT', 'cnxit' ],
    [ 'NIFTY REALTY', 'cnxRealty' ]
  ]);
const sectorwise = 'https://www1.nseindia.com/homepage/Indices1.json';
const marketStat = 'https://www1.nseindia.com/emerge/homepage/smeNormalMktStatus.json';

const get_sector_url = (sector)=>{
    return 'https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/'+sector+'StockWatch.json';
}

module.exports = {sector_to_link,sectorwise,marketStat,get_sector_url};