const help = (pushname, prefix, botName, ownerName, reqXp, getLevelingLevel, sender, _registered, uangku, role, prema) => {
        return `π° -----[ *MENU ${botName}* ]----- π°
Hallo, ${pushname} π
Semoga harimu Menyenangkanβ¨
ββββββββββββββββββββββ
ββ­βββββββββββββββββββ
βββΈ Nama : ${pushname}
βββΈ User : ${prema}
βββΈ Uang : Rp:${uangku}
βββΈ Xp : ${reqXp}
βββΈ Level : ${getLevelingLevel(sender)}
βββΈ Rank : ${role}
βββΈ User ${botName} : ${_registered.length}
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
Berikut adalah fitur yang ada pada bot ini!β¨
Jika tidak paham ketik *${prefix}bingungcok*
ββββββββββββββββββββββ
ββ­ββββββββββββββββββ
βββΈ *${prefix}info*
βββΈ *${prefix}runtime*
βββΈ *${prefix}ping*
βββΈ *${prefix}donasi*
βββΈ *${prefix}iklan*
βββΈ *${prefix}owner*
βββββββββββββββββββββ
βββΈ *${prefix}simplemenu*
βββΈ *${prefix}makermenu*
βββΈ *${prefix}gabutmenu*
βββΈ *${prefix}downloadmenu*
βββΈ *${prefix}randommenu*
βββΈ *${prefix}dompetmenu*
βββΈ *${prefix}othermenu*
βββΈ *${prefix}groupmenu*
βββΈ *${prefix}soundmenu*
βββΈ *${prefix}ownermenu*
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
π° -----[ *POWERED BY ${LISA}* ]----- π°`
}
exports.help = help
