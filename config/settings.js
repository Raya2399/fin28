const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6282261065144'] // no own
global.author = 'Fin Ofc' // nama author 
global.packname = 'FIN MD bot whatsapp' // nama pack sticker
global.namabot = 'FIN MD' // nama bot mu
global.group = 'https://chat.whatsapp.com/JaDhlN6irs0AbP2LuIDmlH' // grup mu
global.pic = 'https://telegra.ph/file/357fcef6b4cd35df96569.jpg' // logo lu


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
