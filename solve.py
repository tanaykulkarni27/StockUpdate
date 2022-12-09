test = '''#                ~INDIA VIX
bankNifty        ~NIFTY BANK
cnxPSU           ~NIFTY PSU BANK
niftyPvtBank     ~NIFTY PVT BANK
cnxMetal         ~NIFTY METAL
cnxAuto          ~NIFTY AUTO
cnxMedia         ~NIFTY MEDIA
cnxEnergy        ~NIFTY ENERGY
cnxInfra         ~NIFTY INFRA
cnxFMCG          ~NIFTY FMCG
cnxPharma        ~NIFTY PHARMA
cnxit            ~NIFTY IT
cnxRealty        ~NIFTY REALTY'''
def prc(i):
    tmp = i.split('~')
    tmp[0] = tmp[0].strip()
    return tmp;
x  = test.split('\n')
y = list(map(prc,x))
print(y)



// for(var i in sector_to_link){
//     sector_to_link[i] = [sector_to_link[i][1],sector_to_link[i][0]];
// }
// console.log(sector_to_link);


/*
'''
#                ~INDIA VIX
bankNifty        ~NIFTY BANK
cnxPSU           ~NIFTY PSU BANK
niftyPvtBank     ~NIFTY PVT BANK
cnxMetal         ~NIFTY METAL
cnxAuto          ~NIFTY AUTO
cnxMedia         ~NIFTY MEDIA
cnxEnergy        ~NIFTY ENERGY
cnxInfra         ~NIFTY INFRA
cnxFMCG          ~NIFTY FMCG
cnxPharma        ~NIFTY PHARMA
cnxit            ~NIFTY IT
cnxRealty        ~NIFTY REALTY
'''


*/