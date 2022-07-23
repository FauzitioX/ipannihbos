const { modul } = require('../Edit/module');
const { chalk, fs, proces } = modul;

global.ownerNumber = ["6289510497533@s.whatsapp.net"]
global.namabotnya = 'IPANBOT'
global.namaownernya = 'IRFAN'
global.packname = '\n\n\n\n\n\n\n\n\n\n© IRFANFF9\n\n\n\n\n\n\n\n\n\n'
global.author = '\n\n\n\n\n\n\n\n\n\nWa : IRFANBOT\nDEK DEK CEMAS KAUU BEK BEK BEK\n\n\n\n\n\n\n\n\n\n'
global.sessionName = 'session'
global.lolkey = 'Atakbotz'
global.dapkey = 'Kirbotz123'
global.kirkey = 'KirBotz'
global.email = 'irfanbotwa@gmail.com'
global.group = 'https://bit.ly/3Bd7ngX'
global.youtube = 'https://bit.ly/3Bde0Q9'
global.website = 'irfanff9-ipan.vercel.app'
global.github = 'https://github.com/irfanff99'
global.noown = 'https://bit.ly/3cvnCeN'
global.region = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','•']
global.api = 
{
    success: '```Success✅```',
    admin: '```Fitur Khusus Admin Group!!!```',
    botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
    owner: '```Fitur Khusus Owner Bot!!!```',
    group: '```Fitur Digunakan Hanya Untuk Group!!!```',
    private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
    bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
    error: '```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```',
    wait: '```Waittt...```',
    ban: '_Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya_',
    verif: '_Maaf Kak Kakak Belum Jadi User FauzyBOTZ - MD Silahkan Register Terlebih Dahulu Click Di Bawah_'
}

global.thumb = fs.readFileSync('./command/Image/thumb.jpg')
global.vidkir = { url: 'https://i.top4top.io/m_20346wtuk5.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
proces.on('uncaughtException', console.error);
