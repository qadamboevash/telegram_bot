import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8089599146:AAE4NnvDEMVOkIwZLhyesqZZOnbhRFWeDwU";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", async function (msg) {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstname = msg.chat.first_name;
  const menuPhoto = "./menu.webp";

  if (text == "/start") {
    bot.sendMessage(chatId, `Xush kelibsiz, ${firstname}`, {
      reply_markup: {
        keyboard: [
          [{ text: "Boshlash 🔥" }],
          [{ text: "Menu 😜" }, { text: "Sozlamalar ⚙️" }],
        ],
        resize_keyboard: true,
      },
    });
  } else if (text == "Boshlash 🔥") {
    bot.sendPhoto(chatId, "./images.jpg", {
      caption: `Mercedes-Benz G-Class (Gelik) — bu dunyodagi eng mashhur va hashamatli yo‘ltanlamas avtomobillardan biridir. U 1979-yilda ishlab chiqarila boshlangan va shu kungacha o‘zining kuchi, ishonchliligi va o‘ziga xos dizayni bilan mashhur bo‘lib kelmoqda. “Gelik” nomi aslida “Geländewagen” so‘zining qisqartmasi bo‘lib, bu nemis tilida “yo‘ltanlamas avtomobil” degan ma’noni anglatadi.


G63 AMG — Gelikning eng mashhur versiyalaridan biri bo‘lib, unda 4.0 litrli V8 biturbo dvigatel o‘rnatilgan. U 577 ot kuchi ishlab chiqaradi va 0 dan 100 km/soatgacha atigi 4.5 soniyada tezlashadi. Mashina 9 pog‘onali avtomatik uzatmalar qutisi va 4MATIC to‘liq g‘ildirakli tizimiga ega. Bu unga tog‘li yo‘llar, qumli hududlar yoki qorli joylarda bemalol yurish imkonini beradi.
 Uning narxi modeliga qarab 150 000 dan 300 000 dollargacha bo‘lishi mumkin. G-Class bugun ham eng orzu qilingan mashinalardan biri bo‘lib qolmoqda.`,
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Info", callback_data: "info" },
            { text: "photo", callback_data: "photo" },
          ],
          [
            { text: "Price", callback_data: "price" },
          ]
        ]
      }
    })
  } else if (text == "Menu 😜") {
    const kutingXabari = await bot.sendMessage(chatId, "Iltimos kuting...");


    setTimeout(function () {
      bot.deleteMessage(chatId, kutingXabari.message_id);
      bot.sendPhoto(chatId, menuPhoto, {
        caption: "Bizning menyuyimiz...",
        reply_markup: {
          keyboard: [
            [{ text: "Manti" }, { text: "Karam" }],
            [{ text: "Shashlik" }, { text: "Hotdog" }],
          ],
        },
      });
    }, 1000);
  }
  bot.on("callback_query", function (query) {
  console.log(query);
  const data = query.data;
  const chatId = query.message.chat.id;

  if (data == "info") {
    bot.sendMessage(chatId, "Bu yerda Lamborghini haqida ma'lumot olasiz");
  } else if (data == "photos") {
    bot.sendPhoto(chatId, "./assets/images/lambo.jpg");
  } else if (data == "price") {
    bot.sendMessage(chatId, "175,000 dollar", {
      reply_markup: {
        inline_keyboard: [[{ text: "Sotib olish", callback_data: "buy" }]],
      },
    });
  } else if (data == "buy") {
    bot.sendMessage(chatId, "Pullarni Soliyajonga bering... Mashina unda");
  }
});


  console.log(msg);
  //   console.log("*********");
  //   console.log(chatId, text);
});

console.log("Bot ishga tushdi...");