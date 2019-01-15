let transactionClass = require('../transaction/transactionClass.js');

let deploy = new transactionClass(["TO","SOLFILE","CONTRACT","CONTRACTVIEW"]);
deploy.to = "0x95913fca18ce60190eb7571f3f9d0c791918894b";
deploy.file = "/home/cranelv/nodejs/matrix_wallet_command/sol/man.sol";
deploy.name = "MANToken";
deploy.run();