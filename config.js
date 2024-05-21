const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, 'LEGEND') : "2347025764303";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_59_05_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDM5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQzLFxuICAgICAgICA2MixcbiAgICAgICAgMTY2LFxuICAgICAgICA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICA2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEzLFxuICAgICAgICA0MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ1LFxuICAgICAgICA3MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDcwLFxuICAgICAgICA4MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODksXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAzMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzksXG4gICAgICAgIDQzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI5LFxuICAgICAgICAwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDkyLFxuICAgICAgICA2MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA5NCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTExLFxuICAgICAgICA1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDExMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDc3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDExMixcbiAgICAgICAgOTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDYwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNMdjZ0OFlPYVl6Z1pFZXNhTndRWStyempuL3NrOVVMTmR6TXFjZ3MwYTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjFEa21ydDRyU1JxNFhCVWRIeXZvWXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmRkNjZkOWMtZGRmZS00NTlkLTg5NjktNGY1NzNiMGM3NTgwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNyxcbiAgICAgIDEyNSxcbiAgICAgIDg5LFxuICAgICAgMTc1LFxuICAgICAgMTc3LFxuICAgICAgMTQ4LFxuICAgICAgNzIsXG4gICAgICAxNzYsXG4gICAgICAyMjIsXG4gICAgICA3NCxcbiAgICAgIDE1MixcbiAgICAgIDQyLFxuICAgICAgMTM1LFxuICAgICAgMyxcbiAgICAgIDIxLFxuICAgICAgMjM3LFxuICAgICAgMTE5LFxuICAgICAgMjM1LFxuICAgICAgNjYsXG4gICAgICAyNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcsXG4gICAgICAxNjEsXG4gICAgICAxOSxcbiAgICAgIDg1LFxuICAgICAgNzYsXG4gICAgICAxNTksXG4gICAgICA2OSxcbiAgICAgIDc2LFxuICAgICAgMjksXG4gICAgICA5NixcbiAgICAgIDIxMCxcbiAgICAgIDkwLFxuICAgICAgNzIsXG4gICAgICAyMzUsXG4gICAgICAyMDAsXG4gICAgICAxNjYsXG4gICAgICAyLFxuICAgICAgMzgsXG4gICAgICA1NixcbiAgICAgIDY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldNNUtKRlRKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDI1NzY0MzAzOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc2NjkxNDM5Mzc0NDk3OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDdHdE9nSEVMZXl0TElHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJEVEFIM050VDVOT1p3djg1eFYyOWtEVyt3YXZVcG1ISUUzbWNRSkVyaXlBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkx1empQcG1hdmo3WGIvOXgxNmZqaTlSRVFEZThxQ0ZNZzdOcUVNWndSV1FPazV6TURIL2Ywa0l0MXU5bUpxS0d6ak9sektjK1cyTlQvLytkMTRXOEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjg5RExMS0I4RUt2clE5c2dabjQzK2lXSHhyNW9lQmhGTnhweEVwQTcyTllnOTBjZ1BzanlMVzZHYWdROVJDcGZZeHhENmpzejkrdEI1YmJoWmpyQmpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMjU3NjQzMDM6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2MzI4NzY2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "LEGEND",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
