let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Source code')).buffer(), `
*────── 「 SCRIPT 」 ──────*
Hai 👋

Bot Ini Menggunakan Sc dari github
https://github.com/Drz103/RadBot
`.trim(), '©souce code', 'Thanks', '.tqto')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|script|github)$/i

module.exports = handler
