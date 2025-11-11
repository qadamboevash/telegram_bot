import TelegramBot from "node-telegram-bot-api";
import fs from "fs";

const TOKEN = "8089599146:AAE4NnvDEMVOkIwZLhyesqZZOnbhRFWeDwU";
const bot = new TelegramBot(TOKEN, { polling: true });

console.log("Bot ishga tushdi...");

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstname = msg.chat.first_name;
  const menuPhoto = "./menu.webp";

  if (text === "/start") {
    bot.sendMessage(chatId, `Xush kelibsiz, ${firstname}!`, {
      reply_markup: {
        keyboard: [
          [{ text: "Boshlash 🔥" }],
          [{ text: "Menu 😜" }, { text: "Sozlamalar ⚙️" }],
        ],
        resize_keyboard: true,
      },
    });
  } else if (text === "Sozlamalar ⚙️") {
    bot.sendMessage(chatId, ``)
  }

  else if (text === "Boshlash 🔥") {
    bot.sendPhoto(chatId, "./images.jpg", {
      caption: `**Mercedes-Benz G-Class (Gelik)** — bu dunyodagi eng mashhur va hashamatli yo‘ltanlamas avtomobillardan biridir. 
      
U 1979-yilda ishlab chiqarila boshlangan va shu kungacha o‘zining kuchi, ishonchliligi va o‘ziga xos dizayni bilan mashhur.

**G63 AMG** — Gelikning eng mashhur versiyalaridan biri bo‘lib, unda 4.0 litrli **V8 biturbo** dvigatel o‘rnatilgan. 
U 577 ot kuchi ishlab chiqaradi va 0 dan 100 km/soatgacha 4.5 soniyada tezlashadi. 
Mashina 9 pog‘onali avtomatik uzatma va 4MATIC tizimiga ega. 

Narxi: 150 000 — 300 000 dollar.`,
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [
            { text: "ℹ Info", callback_data: "info" },
            { text: " Photo", callback_data: "photo" },
          ],
          [{ text: " Price", callback_data: "price" }],
        ],
      },
    });
  }

  else if (text === "Menu 😜") {
    const kutingXabari = await bot.sendMessage(chatId, " Iltimos, kuting...");

    setTimeout(() => {
      bot.deleteMessage(chatId, kutingXabari.message_id);
      bot.sendPhoto(chatId, menuPhoto, {
        caption: "🍽 Bizning menyu:",
        reply_markup: {
          keyboard: [
            [{ text: "Manti" }, { text: "Karam" }],
            [{ text: "Shashlik" }, { text: "Hotdog" }],
            [{ text: "Ortga qaytish 🔙" }],
          ],
          resize_keyboard: true,
        },
      });
    }, 1000);
  }

  else if (text === "Manti") {
    bot.sendPhoto(chatId, "./download.jpg", { caption: "   Manti — 25 000 so‘m" });
  }
  else if (text === "Karam") {
    bot.sendPhoto(chatId, "./Karam.jpg", { caption: " Karam — 15 000 so‘m" });
  }
  else if (text === "Shashlik") {
    bot.sendPhoto(chatId, "./shashlik.jpg", { caption: " Shashlik — 20 000 so‘m" });
  }
  else if (text === "Hotdog") {
    bot.sendPhoto(chatId, "./hotdog.jpg", { caption: " Hotdog — 18 000 so‘m" });
  }

  else if (text === "Ortga qaytish 🔙") {
    bot.sendMessage(chatId, "🔙 Bosh menyuga qaytdingiz.", {
      reply_markup: {
        keyboard: [
          [{ text: "Boshlash 🔥" }],
          [{ text: "Menu 😜" }, { text: "Sozlamalar ⚙️" }],
        ],
        resize_keyboard: true,
      },
    });
  }



  if (text == "Sozlamalar ⚙️") {
    bot.sendPhoto(chatId, "./setting.png", {
      caption: `Sizga qanday yordam bera olaman!😊`
    });
  }
});




























bot.on("callback_query", (query) => {
  const data = query.data;
  const chatId = query.message.chat.id;
  bot.answerCallbackQuery(query.id, { text: "Bosildi!!!" })

  if (data === "info") {
    bot.sendMessage(chatId, "ℹ Bu yerda Gelik haqida batafsil ma'lumot mavjud.");
  }
  else if (data === "photo") {
    bot.sendPhoto(chatId, "./images.jpg", { caption: "📸 Mana Gelik rasmi!" });
  }
  else if (data === "price") {
    bot.sendMessage(chatId, "Narxi: 175,000 dollar", {
      reply_markup: {
        inline_keyboard: [[{ text: " Sotib olish", callback_data: "buy" }]],
      },
    });
  }
  else if (data === "buy") {
    bot.sendMessage(chatId, " Pullarni Soliyajonga bering... Mashina unda ");
  }
});
