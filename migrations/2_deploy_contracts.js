var VatFab = artifacts.require("VatFab");
var JugFab = artifacts.require("JugFab");
var VowFab = artifacts.require("VowFab");
var CatFab = artifacts.require("CatFab");
var DaiFab = artifacts.require("DaiFab");
var DaiJoinFab = artifacts.require("DaiJoinFab");
var FlapFab = artifacts.require("FlapFab");
var FlopFab = artifacts.require("FlopFab");
var FlipFab = artifacts.require("FlipFab");
var SpotFab = artifacts.require("SpotFab");
var PotFab = artifacts.require("PotFab");
var EndFab = artifacts.require("EndFab");
var PauseFab = artifacts.require("PauseFab");
var DssDeploy = artifacts.require("DssDeploy");

module.exports = function (deployer, network) {
    // deployer.deploy(VatFab);
    // deployer.deploy(JugFab);
    // deployer.deploy(VowFab);
    // deployer.deploy(CatFab);
    // deployer.deploy(DaiFab);
    // deployer.deploy(DaiJoinFab);
    // deployer.deploy(FlapFab);
    // deployer.deploy(FlopFab);
    // deployer.deploy(FlipFab);
    // deployer.deploy(SpotFab);
    // deployer.deploy(PotFab);
    // deployer.deploy(EndFab);
    // deployer.deploy(PauseFab);

    // deployer.deploy(DssDeploy,VatFab.address, JugFab,
    //     VowFab, CatFab, DaiFab,
    //     DaiJoinFab, FlapFab,
    //     FlopFab, FlipFab, SpotFab,
    //     PotFab, EndFab, PauseFab);


    deployer.deploy(VatFab)
    .then(function(){
        return deployer.deploy(JugFab);
    })
    .then(function(){
        return deployer.deploy(VowFab);
    })
    .then(function(){
        return deployer.deploy(CatFab);
    })
    .then(function(){
        return deployer.deploy(DaiFab);
    })
    .then(function(){
        return deployer.deploy(DaiJoinFab);
    })
    .then(function(){
        return deployer.deploy(FlapFab);
    })
    .then(function(){
        return deployer.deploy(FlopFab);
    })
    .then(function(){
        return deployer.deploy(FlipFab);
    })
    .then(function(){
        return deployer.deploy(SpotFab);
    })
    .then(function(){
        return deployer.deploy(PotFab);
    })
    .then(function(){
        return deployer.deploy(EndFab);
    })
    .then(function(){
        return deployer.deploy(PauseFab);
    })
    .then(function(){
        return deployer.deploy(DssDeploy,VatFab.address,JugFab.address,
            VowFab.address,CatFab.address,DaiFab.address,DaiJoinFab.address,FlapFab.address,
            FlopFab.address,FlipFab.address,SpotFab.address,PotFab.address,EndFab.address,PauseFab.address);
    });


};