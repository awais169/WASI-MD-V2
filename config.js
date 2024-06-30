//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b3af795ba3920a5d19e75.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923146375610";
global.owner = process.env.OWNER_NUMBER || "923146375610";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/b3af795ba3920a5d19e75.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUozUVdVV3pJTzZ2UzF4eGRFVmdIU1dnUUw5ZFpWSWJzeThrcEdFL2hudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmtPKzhlSnl6R1g5NnVLWC9ldDVVNnlOZ2JuWDRlcDQvSFpVbjdLT1RWZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlUFNHbEpGRFp3Q2psckZGUFJRS3F1RGRXMFZwSXZxMEJ5emp3cGdvaW1JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpcmVOcTJYd2FlbTJkTzhQNmZ1dzBPdWk0SUt6cnV4ZTNpWW5iRjRTcFRVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNEM1FvZHdaamRHL0E0WVJYd2tKZElOQWxEQ2RjZ1dTRkJ6YWp3enFiVms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNJemFVVjlBTXlLUnBONWlUNHFNSXE3QkFaVk5qelJrY0QvZjZYL2pnaDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUhqSVhyQ0tzaVZLdGR0MFNXMGJGWHJNZXM1UDVUWUtsaGJJZkVpYllYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1V2L2t1YlBIbXpBSGJUeFZaWGF6V25nQjdQV1hJTDhJUDBqQTVlaDh5ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNyMW54VGhtaGV2MmNJbUpMTXV2YjZncXJIdnZSVlozaWhJMGJ5aFUzaHpHRFRoV1VVRWQ5TjU1ZkVxSG1JVVY4eXREd3FzdjNxdk94Z1RjRXNLeGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU5LCJhZHZTZWNyZXRLZXkiOiIrd1FJR2FSa2l5bE1mTUdLUzVJTm5EQkZIaU8vZk1qRWxUc0dPQ1RSUzZVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4Sk1RRG1saVRBR3U4RlhTVU5FM2h3IiwicGhvbmVJZCI6ImRkNDljOTgyLWQyYzUtNGM0OS05Mzg2LThkNGNkN2Y3NzQ3NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVa0tCd3JiaWRaWFVNUVdNOERYSmIzeVJ5QWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0RJYzNZN0hKY256S3NWZGQvcjBiQ1BCRndRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5FSzhYRVhTIiwibWUiOnsiaWQiOiI5MjMxNDYzNzU2MTA6NzNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi2KfZiNuM2YDbrNmA26fbm9mA26zwnYaK2YDYsyDYrNmA2bnZgNmA2YDbrNmA26fbm9mA26zwnYaK2YDZgNmAIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLT1V6T01GRVBpbGc3UUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWUjFaeksvZlVMRmFVanNKbzdCcy9kVFdCUFdZQ21lSU1rVFRZc281clQwPSIsImFjY291bnRTaWduYXR1cmUiOiIxZmZlR2FnZ1JheGI4VDJBM3ZqQUVoa2hxU21YSW1OTUZpQXRWNUF3c3VjRUlUUlM2YmJaMEREUlJUNXdmMzRmbDRiaGx5bjltR3RieGllZ1VUaFhBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiY1ZjOGRXN3FkNnEzMWd4SWFxSGNGeFN0bjNkeVRLajZhSFgzd2FtWHY2eW1iLyt0Y3UyK1JkSHVUanhYNWhvMnV0OXBWU05HKytOMlgxb0pwUGExalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxNDYzNzU2MTA6NzNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVlVkV2N5djMxQ3hXbEk3Q2FPd2JQM1UxZ1QxbUFwbmlESkUwMkxLT2EwOSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTcxODY2MH0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐀𝐖𝐀𝐈𝐒 𝐉𝐔𝐓𝐓♥️",
  author: process.env.PACK_AUTHER || "𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐌𝐘 𝐃𝐌 𝐈𝐓𝐒 𝐌𝐄 𝐀𝐖𝐀𝐈𝐒 𝐉𝐔𝐓𝐓 𝐔 𝐍𝐄𝐄𝐃 𝐌𝐎𝐑𝐄 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐂𝐎𝐌𝐄 𝐓𝐎 𝐌𝐘 𝐃𝐌 𝐈 𝐇𝐀𝐕𝐄 𝐌𝐀𝐍𝐘 𝐓𝐘𝐏𝐄 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 ❤️🔥
𝟗𝟐𝟑𝟏𝟒𝟔𝟑𝟕𝟓𝟔𝟏𝟎
𝟗𝟐𝟑𝟒𝟗𝟔𝟒𝟓𝟓𝟖𝟔𝟕",
  packname: process.env.PACK_NAME || "°☆𝐀ωɑ͢ɪ̽s̑̈ 𝐉u͓ȶȶ🎭",
  botname: process.env.BOT_NAME || "°☆𝐀ωɑ͢ɪ̽s̑̈ 𝐉u͓ȶȶ🎭",
  ownername: process.env.OWNER_NAME || "°☆𝐀ωɑ͢ɪ̽s̑̈ 𝐉u͓ȶȶ🎭",
  errorChat: process.env.ERROR_CHAT || "923146375610",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
