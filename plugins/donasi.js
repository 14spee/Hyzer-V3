let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
*────────「 DONATE 」 ────────*

╭═══════════════
║╭─── [ DONASI ] ───
║│➸ _*UMOBILE*_✅ : 
║│- 60189830350
║│
║│➸ _*DIGI*_✅: 
║│- 60149431385
║│
║│➸ _*Owner bot*_
║│- wa.me/60189830350
║╰────────────
╰═══════════════
`.trim(), 'Donasi jan asal mencet', 'Owner Bot💌', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
