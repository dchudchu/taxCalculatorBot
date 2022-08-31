// Uses Logical operations, Conditional Statements and Relational Operators
//Discord Bot Areas
const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'discord bot token id, dchu';
const channel = client.channels.cache.find(channel => channel.name === channelName)

//Declaring Variables/Tax Brackets
let taxBracket1 = 18200
let taxBracket2 = 45000
let taxBracket3 = 120000
let taxBracket4 = 180000
let taxBracket5 = 180001

client.login(token); // login the bot with your token.

//Handling Discord Commands
client.on("message", async (message) => {
    if (message.content.startsWith("$tax")) {
        if (message.content.includes("$tax")) {
            await parseInt(message.content.split(" ")[1]);
        mySalary = message.content.split(" ")[1]; };
        //Calculating Da Tax
        if(mySalary <= taxBracket1) {
            let taxRate = 0
            let taxPayable = mySalary * taxRate
            message.reply("You owe the ATO" + " $" + taxPayable)
        } else if(mySalary <= taxBracket2 && mySalary > taxBracket1) {
            let taxRate = 0.19
            let taxableIncome = mySalary - taxBracket1
            let taxConstant = 0
            let taxPayable = taxConstant + taxRate * taxableIncome
            message.reply("You owe the ATO $" + taxPayable)
        } else if(mySalary <= taxBracket3 && mySalary > taxBracket2) {
            let taxRate = 0.325
            let taxableIncome = mySalary - taxBracket2
            let taxConstant = 5092
            let taxPayable = taxConstant + taxRate * taxableIncome
            message.reply("You owe the ATO $" + taxPayable)
        } else if(mySalary <= taxBracket4 && mySalary > taxBracket3) {
            let taxRate = 0.37
            let taxableIncome = mySalary - taxBracket3
            let taxConstant = 29467
            let taxPayable = taxConstant + taxRate * taxableIncome
            message.reply("You owe the ATO $" + taxPayable)
        } else if(mySalary >= taxBracket5) {
            let taxRate = 0.45
            let taxableIncome = mySalary - taxBracket4
            let taxConstant = 51667
            let taxPayable = taxConstant + taxRate * taxableIncome
            message.reply("You owe the ATO $" + taxPayable)
        } else
            message.reply(
                'Error, please make sure you entered a valid number'
            )     
}
    });
