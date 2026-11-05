console.log("welcome to bank");
let fname = prompt("Enter your name to login:");
const user1 = { name: "Rahul", balance: 1000 };
const user2 = { name: "kaji", balance: 1200 };
const user3 = { name: "price", balance: 7300 };
const user4 = { name: "Rohan", balance: 1000 };
const user5 = { name: "Ram", balance: 1000 };
if (fname == user1.name || fname == user2.name || fname == user3.name || fname == user4.name || fname == user5.name) {
    console.log("You are registered! Welcome, " );
    console.log("-------please select the work--------");
    console.log("-------2.deposit------");
    console.log("-------3..Withdrawl------");
    console.log("-------4.exit------");
    
    let depo1;
    let withdraw1;
    const choice = prompt("select your choice (2-4)");

    switch(choice) {
        case "2":
            let deposit = prompt("enter how much to deposit");
            depo1 = deposit;
            console.log(depo1, "is deposited successfully");
            break;
            
        case "3":
            let withdraw = prompt("enter how much to withdraw");
            withdraw1 = withdraw;
            console.log(withdraw1, "is withdrawed successfully");
            break;
            
        case "4":
            console.log("Thankyou");
            break;
            
        default:
            console.log("Invalid choice.");
    }

} else {
    console.log("You are not registered. Access Denied.");
}
