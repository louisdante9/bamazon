const program = require('commander');
const prompt = require('inquirer').prompt; // require inquirerjs library
const { getProducts, purchaseItem } = require('./controller')


const help = [
  {
    type: 'text',
    name: 'help',
    message : 'To buy a product pls run the command `buy`'
  }
]

const questions = [
    {
      type : 'input',
      name : 'item_id',
      message : 'Enter the ID of the product they would like to buy...'
    },
    {
      type : 'input',
      name : 'quantity',
      message : 'Enter how many units of the product they would like to buy...'
    }
  ];
  
program
  .version('1.0.0')
  .description('Bamazon');
  
program
  .command('getproducts')
  .alias('l')
  .description('List products')
  .action(() => getProducts().then(()=> prompt(help)));

program
  .command('buy')
  .alias('b')
  .description('buy product')
  .action(() => {
    prompt(questions).then(answers => purchaseItem(answers));
  });



program.on('command:*', function () {
  console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '));
  process.exit(1);
});
  
program.parse(process.argv);