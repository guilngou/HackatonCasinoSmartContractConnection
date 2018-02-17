import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// I created the contract manually on remix, I copied and pasted the address of the contract right below
contractAddress = "0x8873c374e578cb26e6e9855008b2fa62b3a9e2ca";

// On remix web browser IDE, in the "Compile" tab, I clicked on "Details", I copied "ABI" and I pasted it right below
ABIArray = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "supplies",
    "outputs": [
      {
        "name": "supplyId",
        "type": "uint256"
      },
      {
        "name": "donationId",
        "type": "uint256"
      },
      {
        "name": "amount",
        "type": "uint256"
      },
      {
        "name": "unitPrice",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "storeAccts",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "donations",
    "outputs": [
      {
        "name": "association",
        "type": "address"
      },
      {
        "name": "store",
        "type": "address"
      },
      {
        "name": "confirmed",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "associationAccts",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "associations",
    "outputs": [
      {
        "name": "name",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "stores",
    "outputs": [
      {
        "name": "name",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_address",
        "type": "address"
      },
      {
        "name": "_name",
        "type": "string"
      }
    ],
    "name": "createAssociation",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_donationId",
        "type": "uint256"
      },
      {
        "name": "_supplyId",
        "type": "uint256"
      },
      {
        "name": "_amount",
        "type": "uint256"
      },
      {
        "name": "_unitPrice",
        "type": "uint256"
      }
    ],
    "name": "addSupplyToDonation",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_address",
        "type": "address"
      },
      {
        "name": "_name",
        "type": "string"
      }
    ],
    "name": "createStore",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_receiver",
        "type": "address"
      }
    ],
    "name": "createDonate",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_donationId",
        "type": "uint256"
      }
    ],
    "name": "confirmDonation",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

// Same as ABI, this is the "object" of "BYTECODE"
data = "6060604052341561000f57600080fd5b610d808061001e6000396000f3006060604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806326f1a1fd146100b45780633b43937a146100ed578063621df534146101235780637216a73f1461015957806378dd99951461017b57806379b393661461019d5780638080077e146101bf5780638a1e765b146101f557806395d1d4c514610217578063f6a99e4c1461024d578063f8626af81461026f575b600080fd5b34156100bf57600080fd5b6100d460046100cf903690610a74565b6102a7565b6040516100e49493929190610c27565b60405180910390f35b34156100f857600080fd5b61010d6004610108903690610a74565b6102e6565b60405161011a9190610bb3565b60405180910390f35b341561012e57600080fd5b610143600461013e9036906109f7565b610325565b6040516101509190610c05565b60405180910390f35b341561016457600080fd5b61017960046101749036906109f7565b610342565b005b341561018657600080fd5b61019b6004610196903690610a74565b61046a565b005b34156101a857600080fd5b6101bd60046101b8903690610a9d565b6104a6565b005b34156101ca57600080fd5b6101df60046101da903690610a74565b610522565b6040516101ec9190610bb3565b60405180910390f35b341561020057600080fd5b6102156004610210903690610a20565b610561565b005b341561022257600080fd5b61023760046102329036906109f7565b610622565b6040516102449190610c05565b60405180910390f35b341561025857600080fd5b61026d6004610268903690610a20565b61063f565b005b341561027a57600080fd5b61028f600461028a903690610a74565b6106fe565b60405161029e93929190610bce565b60405180910390f35b6005818154811015156102b657fe5b90600052602060002090600402016000915090508060000154908060010154908060020154908060030154905084565b6001818154811015156102f557fe5b90600052602060002090016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060205280600052604060002060009150905080600001905081565b600480548060010182816103569190610784565b916000526020600020906002020160006060604051908101604052808573ffffffffffffffffffffffffffffffffffffffff1681526020013373ffffffffffffffffffffffffffffffffffffffff16815260200160001515815250909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160010160146101000a81548160ff02191690831515021790555050505050565b600160048281548110151561047b57fe5b906000526020600020906002020160010160146101000a81548160ff02191690831515021790555050565b600580548060010182816104ba91906107b6565b916000526020600020906004020160006080604051908101604052808781526020018881526020018681526020018581525090919091506000820151816000015560208201518160010155604082015181600201556060820151816003015550505050505050565b60038181548110151561053157fe5b90600052602060002090016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b80600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000190805190602001906105b79291906107e8565b506001600380548060010182816105ce9190610868565b9160005260206000209001600085909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b600260205280600052604060002060009150905080600001905081565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000190805190602001906106949291906107e8565b5060018080548060010182816106aa9190610868565b9160005260206000209001600085909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b60048181548110151561070d57fe5b90600052602060002090600202016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160149054906101000a900460ff16905083565b8154818355818115116107b1576002028160020283600052602060002091820191016107b09190610894565b5b505050565b8154818355818115116107e3576004028160040283600052602060002091820191016107e29190610915565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061082957805160ff1916838001178555610857565b82800160010185558215610857579182015b8281111561085657825182559160200191906001019061083b565b5b5090506108649190610954565b5090565b81548183558181151161088f5781836000526020600020918201910161088e9190610954565b5b505050565b61091291905b8082111561090e57600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160146101000a81549060ff02191690555060020161089a565b5090565b90565b61095191905b8082111561094d576000808201600090556001820160009055600282016000905560038201600090555060040161091b565b5090565b90565b61097691905b8082111561097257600081600090555060010161095a565b5090565b90565b60006109858235610d0d565b905092915050565b600082601f83011215156109a057600080fd5b81356109b36109ae82610c99565b610c6c565b915080825260208301602083018583830111156109cf57600080fd5b6109da838284610d37565b50505092915050565b60006109ef8235610d2d565b905092915050565b600060208284031215610a0957600080fd5b6000610a1784828501610979565b91505092915050565b60008060408385031215610a3357600080fd5b6000610a4185828601610979565b925050602083013567ffffffffffffffff811115610a5e57600080fd5b610a6a8582860161098d565b9150509250929050565b600060208284031215610a8657600080fd5b6000610a94848285016109e3565b91505092915050565b60008060008060808587031215610ab357600080fd5b6000610ac1878288016109e3565b9450506020610ad2878288016109e3565b9350506040610ae3878288016109e3565b9250506060610af4878288016109e3565b91505092959194509250565b610b0981610cd7565b82525050565b610b1881610cf7565b82525050565b600081546001811660008114610b3b5760018114610b5b57610b9c565b607f600283041680865260ff198316602087015260408601935050610b9c565b60028204808652602086019550610b7185610cc5565b60005b82811015610b9357815481890152600182019150602081019050610b74565b80880195505050505b505092915050565b610bad81610d03565b82525050565b6000602082019050610bc86000830184610b00565b92915050565b6000606082019050610be36000830186610b00565b610bf06020830185610b00565b610bfd6040830184610b0f565b949350505050565b60006020820190508181036000830152610c1f8184610b1e565b905092915050565b6000608082019050610c3c6000830187610ba4565b610c496020830186610ba4565b610c566040830185610ba4565b610c636060830184610ba4565b95945050505050565b6000604051905081810181811067ffffffffffffffff82111715610c8f57600080fd5b8060405250919050565b600067ffffffffffffffff821115610cb057600080fd5b601f19601f8301169050602081019050919050565b60008160005260206000209050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b828183376000838301525050505600a265627a7a723058204d99760a1f487a4778ccdb484d83a2edb0f90ba75db18b7bb5ea648925af1fca6c6578706572696d656e74616cf50037"


Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
    //var template = Template.instance();

    //myContract = web3.eth.contract(ABIArray).at(contractAddress);

    // web3.eth.getBalance("0x57a2C3B53b25dEa85517C1bb2A8981B39CdB4391",
    //   function (err, res) {
    //     TemplateVar.set(template, "counter", res);
    //     //alert(res);
    //   })
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);

    // instantiate by address
    myContract = web3.eth.contract(ABIArray).at(contractAddress);
    // send a transaction to a function
    myContract.createDonate('0xaaa2c3b53b25dea85517c1bb2a8981b39cdb4391', function (error, result) {
      if (!error)
        console.log(JSON.stringify(result));
      else
        console.error(error);
    });
  },
});



Template.confirmDonation.onCreated(function confirmDonationOnCreated() {
});

Template.confirmDonation.helpers({
});

Template.confirmDonation.events({
  'click button'(event, instance) {
    myContract = web3.eth.contract(ABIArray).at(contractAddress);
    // send a transaction to a function
    // Here, donationID == 1
    myContract.confirmDonation(1, function (error, result) {
      if (!error)
        console.log(JSON.stringify(result));
      else
        console.error(error);
    });
  },
});