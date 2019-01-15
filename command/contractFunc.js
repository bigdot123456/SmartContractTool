let transactionClass = require('../transaction/transactionClass.js');

let deploy = new transactionClass(["FROM","TO","SOLFILE","CONTRACT","CONTRACTFUNC","GAS","SUBMIT","PASSWORD","NORMALRAW","TRANSDATABASE","INSERTTRANS"]);
deploy.run();