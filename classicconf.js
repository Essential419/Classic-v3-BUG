/*Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Sampe Nipu Apalagi Lari Dari Tanggung Jawab

Base Ori : Hw Mods
Base Haikal Hw Mods : Copyan Dari Base Dika

• [ Recode Bye > ZetsuboXygen777]
   # AND↓
   THANKS TO >
  XygenGod777( Watashi / 私 )
  Hw Mods Wa / Haikal (Base)
  Adiwajshing (Baileys)
  whiskeysockets (Baileys)
  Thunder X7 (Inspirate)
  Pak Tzy (Inspirate)
  Maintainer (Taira Makino)
  Maintener2(Samue-l1)
  Maintener3(Emperordagoat)
  ♥️ ありがとう
                 >
*/
const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://whatsapp.com/channel/0029VagndLW4Y9lff0t2Pp2e'
global.ig = 'ano_nymous_sam' // ubah aja
global.email = 'reign6888@gmail.com' //serah
global.region = 'Nigeria' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = '❌Ǥ҉Ø҉Đ҉W҉Ɨ҉N҉❌' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['2349012464012'] // ubah aja pake nomor lu
//==========================zetsuboclient=======================//
global.botname = '❌Ǥ҉Ø҉Đ҉W҉Ɨ҉N҉❌' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '❌Ǥ҉Ø҉Đ҉W҉Ɨ҉N҉❌' // ubah aja ini nama sticker
global.author = '❌Ǥ҉Ø҉Đ҉W҉Ɨ҉N҉❌' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'classicsession'  //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.autoviewstatus = process.env.autoviewstatus || "TRUE"
global.wlcm = []
global.wlcmm = []
global.anticall = true
global.rn = 'typing'
/*
Declaring Menu type

V1 = Photo
V2 = Video
V3 = Text
V4 = Button

*/
global.menutype = "v1"
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 5
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
