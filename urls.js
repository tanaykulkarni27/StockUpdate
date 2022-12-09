const axios = require('axios');
const {sector_to_link,marketStat,sectorwise,get_sector_url} = require('./constants');


const home = async (req,res)=>{
    var market_status = null;
    var market_table = [];
    var pref_market_table = [['Index','Ltp','Price change', 'Percentage change','color']];
    await axios.get(marketStat).then((response)=>{
        
        market_status = response.data.NormalMktStatus;

    }).catch(err=>{

        console.error(err);

    })
    await axios.get(sectorwise).then((response)=>{
        
        var data = response.data.data
        for(var i in data){
            if(data[i].name == 'INDIA VIX'){
                pref_market_table.push([data[i].name,data[i].lastPrice,data[i].change,data[i].pChange,(parseFloat(data[i].pChange) < 0)?'red':'green']);
            }
            else if(sector_to_link.has(data[i].name)){
                market_table.push([data[i].name,data[i].lastPrice,data[i].change,data[i].pChange,(parseFloat(data[i].pChange) < 0)?'red':'green']);
            }
        }
    }).catch(err=>{
        console.error(err); 
    });
    market_table.sort((a,b)=>{
        a[3] = parseFloat(a[3])
        b[3] = parseFloat(b[3])
        if(a[3] < b[3])
            return 1;
        else if(a[3] == b[3])
            return 0;
        return -1;
    });

    market_table.unshift(pref_market_table[1])
    market_table.unshift(pref_market_table[0])
    var output = `<h1 align="center">Daily Market update</h1><br><br>
                  Currently market is ` + market_status + `<br><br><table border = '1'>`
    for(var i in market_table){
        output += '<tr>'
        var ok = i > 1;
        for(var j in market_table[i]){
            if(j == 4)
                break;
            if(j == 0 && ok)
                output += `<td>&nbsp;<a href="/view/${market_table[i][0]}">${market_table[i][j]}</a>&nbsp;</td>`;
            else if(i > 0 && (j == 2 || j == 3))
                output += `<td><font color="${market_table[i][4]}">${market_table[i][j]}</font></td>`
            else            
                output += `<td>&nbsp;${market_table[i][j]}&nbsp;</td>`;
        }
        output += '</<tr>'
    }
    output += '</table>'
    res.end(output);
};

const Specific = async (req,res)=>{
                    var market_table = [];
                    var pref_market_table = ['Symbol','previous close','open','high','low','close','Percentage change','color'];
                    await axios.get(get_sector_url(sector_to_link.get(req.params.id))).then((response)=>{
                        var tmp = response.data.data;
                        for(var i in tmp){
                            market_table.push([tmp[i].symbol,tmp[i].previousClose,tmp[i].open,tmp[i].high,tmp[i].low,tmp[i].dayEndClose,tmp[i].per,(parseFloat(tmp[i].per) < 0)?'red':'green']);
                        }
                    });
                    await market_table.sort((a,b)=>{
                        a[6] = parseFloat(a[6]);
                        b[6] = parseFloat(b[6]);
                        if(a[6] > b[6])
                            return -1;
                        else if(a[6] == b[6])
                            return 0;
                        return 1;
                    });
                    market_table.unshift(pref_market_table);
                    var output = `<h1 align="center">Daily Market update</h1><br><br>Sector : ${req.params.id}<br><br><table border="1">`;
                    for(var i in market_table){
                        output += '<tr>'
                        for(var j in market_table[i]){
                            if(j == 7)   
                                break;
                            if(i > 0 && j >= 2)
                                output += `<td><font color="${market_table[i][7]}">&nbsp;${market_table[i][j]}&nbsp;</font></td>`; 
                            else
                               output += `<td>&nbsp;${market_table[i][j]}&nbsp;</td>`;
                        }
                        output += '</<tr>'
                    }
                    output += '</table>'
                    res.end(output);
                };   

module.exports = {home,Specific};


/*
{
    
      symbol: 'VBL',
      previousClose: '1,366.75', 
      open: '1,365.00',
      high: '1,429.60',
      low: '1,345.05',
      dayEndClose: '1410.25',
      per: '3.53',
      
    }
*/