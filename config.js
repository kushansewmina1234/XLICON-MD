const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94725668277"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'asia/colombo'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94772108460' 
global.devs = '94725668277';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia09SVHhpdWREOWtOL3dVaVhNQ1RVeUZOLy9FditCZmM4NXUrVmdZaDhFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUNZa3ZIb2xuKzlrS3dCSCtaVkVlZUQwK2g0bnAzcVNZbmpkeWFlR3lqOD0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSnl5Lzl2UmNpV01hRURkeTRMeEpNc2EzeCtqUzA4Z2ROR2pZdWlNVlVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3VmNJU01NYTlwTmYwYkU4ZWN5WHB1ZkF1QVBscU83azN5VGNHeGowUGpzPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtQck94Z3JtRkxDb1FTbklQQlFYaU9hZk96YUxjdVB3WjEzRXFoaHdtazQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlMrZ29SeUh5ampzNkNRYVFSNFRjSklQWmNBcTRwcFMyZ0kwRGlqSHN3MDA9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2WExUMlYvR0FncUlJYTBGVjZ4UlhyZC9vNGQzUWpRVmNCaTZHbTZwZTZCY2piNk4zS1FBcFV5VytoV3plRVpKdDRtQmlNekEzY1VwT1BKZ3VYWUhoZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE0NSwiYWR2U2VjcmV0S2V5IjoiMDdrbU1GUkxXajh2MHJXMEVteUwxUFNBQW5iVkNZSC9yWkxWcEFVZUR1bz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicFNfaDRHdnBRa09WWGpBSFZBX0NqQSIsInBob25lSWQiOiI2MzgzNWFmYi02ODVhLTRkOGMtYTBlYi03ZWQ5ZjM1YTgwM2QiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR2dGZ0J0MDg3NFFldEFWdEx6MzJrdlNPMmRnPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWNloxb01BdkZ5dmFyeThLUnNBeWZyRU1nNTQ9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNWHh1OG9IRUozdmdxc0dHREE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlF1Ly9PVlpiZGNaYWsyZlhIUEVkMmFSTzRoaTZlL2lraG1CRGlKVTh4bnM9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImFNeWQvL3Z5WUVyWE9NcW13RituNjYzcENPMFJkTmc4QlNWOTlEeThva2VMS0pUNmV4S1Byb0dHVUcxZWFBUnNQYms5VDZYOGpzS3BIdnBpdTdPZ0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJndk5JQnJQeGZDSHVBUWlqNHA1ZEVoblpoOXQ1VXpRV29WNFFzYzYybnkwc0NSZVRaMGNuaHRMZ25zcTZYNVdQTzdRSzlpKzFobGNwNDh0aHRtQWdoZz09In0sIm1lIjp7ImlkIjoiOTQ3MjU2NjgyNzc6NDZAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjU2NjgyNzc6NDZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVUx2L3psV1czWEdXcE5uMXh6eEhkbWtUdUlZdW52NHBJWmdRNGlWUE1aNyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMDgzNzI4MH0=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '@DARK SHAN',
  packname:  process.env.PACK_NAME || 'KUSHAN',
   
  botname:   process.env.BOT_NAME === undefined ? "DARK SHAN" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'DARKSHAN' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI IM ALIVE NOW' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
