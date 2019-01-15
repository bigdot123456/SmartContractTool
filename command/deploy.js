let transactionClass = require('../transaction/transactionClass.js');

let deploy = new transactionClass(["FROM","SOLFILE","CONTRACT","DEPLOYDATA","GAS","SUBMIT","PASSWORD","NORMALRAW","TRANSDATABASE","INSERTTRANS"]);
deploy.file = "../sol/sc_AITravelToken_2.sol";
deploy.contractArgs = []
deploy.run();