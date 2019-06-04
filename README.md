# Bitcoin Address Generator

A Script to generate bitcoin addresses, public keys, private keys and wif keys.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Deployment

1. `git clone https://github.com/denizariyan/bitcoin-address-generator.git`
1. `cd bitcoin-address-generator`
1. delete the `.git` folder (`rm -rf .git`)
1. `git init` to start a new repo for your project
1. `npm install` to get&update the dependencies
1. `node create.js` to run the script
1. Use your file editor check the keys inside the database folder

## Validation

1. Run the script so it will give you some addresses to validate
1. The addresses I got was `“{"address":"1C3K9FdBZUkJ4DTq5YreVFoxkjvjrWMpV9","public_key":"0257378187dba200c80f8c7f83c3434b25a66b2c1ff1dbeec405976f13d2cc11f6","wif_key":"L1qnzA7Nx9u2WqiAJxfoXySSUtyqzR97RxEr4AXBtaj3T2JYPjwX","private_key":"89e974d91d57c5d30403461096f6de86095402cc77ab27f787cf374a0e999754","_id":"6771403e6ded4eb388f4c1bcb54f87b6"}”`
1. Go to https://coinb.in/#verify and download the site then run it offline on your machine to be sure of the safety of your keys
1. Enter you wif key to the box given on the page
1. The site will give you the bitcoin address, public key and the private key to check against your own records. (Ex. https://prnt.sc/j55rao)

## Author

* **Deniz Ariyan** - *Initial work*

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details
