const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true

//aumto functioner
//global.autoTyping = false //auto tying in gc (true to on, false to off)
//global.autoRecord = true //auto recording (true to on, false to off)

global.Owner = ['971553527240','971553527240']  //If you want singal number so global.Owner = ['916297175943'] Change into your number
global.OwnerNumber = ['971553527240','971553527240']  //If you want singal number so global.Owner = ['916297175943'] Change into your number
global.ownertag = ['971553527240']
global.BotName = "زيرو تو"
global.packname = "زيرو تو"
global.author = "ب: لايت"
global.OwnerName = "لايت"
global.BotSourceCode = "https://github.com/ahahahaj"
global.SupportGroupLink = "https://chat.whatsapp.com/LAASmxox5c75HILkYXe2AX"
global.sessionName = "session"

// Prefix //
// If you want to change the prefix, change it and also change all switch's button id from Core.js  otherwise buttons will not work //
global.prefa = ['.'] 


global.location = "Africa ,egypt"
global.reactmoji = "❤️"
global.themeemoji = "💖"
global.vidmenu = { url: 'https://tenor.com/50f8b882-c29c-4ae8-b026-98d00fd91e69' }
global.websitex = "https://github.com/ahahahaj"
global.lolhuman = "KaysaS"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'اصبر ياخي لاتتسرع...',
    useradmin: 'الميزه دي للادمن بس!!!',
    botadmin: 'اعطي للبوت ادمن لتشتغل الميزه!!.',
    botowner: 'لعمك مطوري بس ✨!',
    grouponly: 'الميزه للقروبات بس يغبي!',
    privateonly: 'الميزه للخاص بس!',
    botonly: 'البوت بس يقدر يستخدم الامر!!',
    waiting: ' اصبر ياخي...',
    nolink: 'فين الرابط ؟!',
    error: 'خطء!',
    banned: 'تم حظرك من استخدام البوت بنجاح✅',
    bangc: 'البوت تبند من القروب بنجاح✅!',
    nonsfw: ميزه الnsfw مقفوله!,'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 20,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
