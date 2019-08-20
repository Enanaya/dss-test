//  import {DSToken} from "../lib/ds-token/src/token.sol";
import '../lib/ds-token/src/token.sol';

const cat = artifacts.require("cat");
const dai = artifacts.require("dai");
const end = artifacts.require("end");
const gemjoin = artifacts.require("GemJoin");
const ethjoin = artifacts.require("GemJoin");
const daijoin = artifacts.require("GemJoin");
const flap = artifacts.require("Flapper");
// const flip=artifacts.require("flip");
// const flop=artifacts.require("flop");
const jug=artifacts.require("jug");
const pot=artifacts.require("pot");
const spot=artifacts.require("spotter");
const vat = artifacts.require("vat");
// const vow=artifacts.require("vow");
// const gem=artifacts.require("DSToken");

 var gem;

module.exports = function (deployer) {
  // Use deployer to state migration tasks.
    gem = new DSToken('');

  deployer.deploy(dai, "99");
  deployer.deploy(vat).then(function (instance) {
    return deployer.deploy(cat, instance.address);
  })
  .then(function(){
    return deployer.deploy(jug,vat.address);
  })
  .then(function(){
    return deployer.deploy(pot,vat.address);
  })
  .then(function(){
    return deployer.deploy(spot,vat.address);
  })
   .then(function(instance){
     deployer.deploy(flap, instance.address, gem.address);
   })
  ;
   
  // deployer.deploy(flap,vat.address,"");
  // deployer.deploy(flip,vat.address,"gems");
  // deployer.deploy(flop,vat.address,"");

  deployer.deploy(end);
  
  // deployer.deploy(gemjoin);

};
