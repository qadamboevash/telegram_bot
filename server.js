import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8089599146:AAE4NnvDEMVOkIwZLhyesqZZOnbhRFWeDwU";
const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    const username = msg.from.first_name;

   
    bot.sendMessage(chatId, `Xush kelibsiz → ${username}`, {
        reply_markup: {
            keyboard: [
                [{ text: "Boshlash🙃" }],
                [{ text: "Menu😜" }, { text: "Sozlamalar🛠️" }]
            ],
            resize_keyboard: true
        }
    });

 
    if (text === "Boshlash🙃") {
        bot.sendMessage(chatId, "Salom! Men sizga yordam berishga tayyorman 😎");
    } 
    else if (text === "Menu😜") {
        bot.sendMessage(chatId, "Bizning menyu:\n🍕 Pizza\n🍔 Burger\n🥤 Ichimliklar");
    } 
    else if (text === "Sozlamalar🛠️") {
        bot.sendMessage(chatId, "Sozlamalar bo‘limi hali ishlab chiqilmoqda ⚙️");
    } 
    else {
        bot.sendMessage(chatId, "Iltimos, pastdagi tugmalardan birini tanlang 👇");
    }

    console.log(msg);
});

console.log("Bot ishga tushdi...");
