const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "ใฒ<Adryan><ElainaPunya>",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Owner <Adryan>\nitem1.TEL;waid=6285756507257:6285756507257\nitem1.X-ABLabel:๐ Creator\nitem2.EMAIL;type=INTERNET:pajamma@gmail.com\nitem2.X-ABLabel:๐ Email\nitem3.URL:https://xxx.com\nitem3.X-ABLabel:๐ฎ Rest Api\nitem4.ADR:;;๐ฏ๐ต Jepang;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:๐ Region | Japan\nitem5.X-ABLabel:โโโโโโโ[ใฒ<Elainaใจใฉใคใ>]โโโโโโโ\nEND:VCARD"
  }, {
    "displayName": "Si tukang blokir nomor",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Whatsapp\nitem1.TEL;waid=0:0\nitem1.X-ABLabel:๐ Whatsapp\nitem2.EMAIL;type=INTERNET:Whatsapp@gmail.com\nitem2.X-ABLabel:๐ Email\nitem3.URL:https://faq.whatsapp.com/\nitem3.X-ABLabel:โ๏ธ Rest Api\nitem4.ADR:;;โฉ๏ธ Whatsapp;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:๐ Official Bot Whatsapp\nitem5.X-ABLabel:โโโโโโโ[ แด แดสษชาส สส แดกสแดแดsแดแดแด ]โโโโโโโ\nEND:VCARD"
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler