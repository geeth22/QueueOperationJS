const Utility = require('./Utility');
let readlineSync = require('readline-sync')
checkoption = function () {
    let isTerminated = true;
    while (isTerminated == true) {
        let checkoption = readlineSync.question("\nEner your choice:\n1.enqueue\n2.dequeue\n3.print\nn4.exit\n");
        switch (checkoption) {
            case '1':
                let element = readlineSync.question("Enter the element:");
                Utility.enqueue(element);
                break;
            case '2':
                Utility.dequeue();
                break;
            case '3':
                Utility.print();
                break;
            case '4':
                isTerminated = false;
                break;
            default: console.log("please enter correct option");
        }
    }
}
checkoption();
