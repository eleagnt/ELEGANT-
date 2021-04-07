# Music-bot by ELEGANT MAN  & niro

All Copyright Go's To ELEGANT

اذا تريد استخدام بروجكت برجاء معرفة عن البروجكت قانوني ومسجل كل حقوق الخاص بيه

### ✨ Installation

go to `config` folder and edit bot.json file

```js
{
    "game": "GAME",//your bot status
    "prefix": "PREFIX",//your boy prerix 
    "token_bot": "TOKEN"//your bot token
}
```

تذكير :

- `game`, the status of the bot.
- `prefix`, the prefix that will be set to use the bot.
- `token_bot`, the token of the bot available on the [Discord Developers](https://discordapp.com/developers/applications) section.

لتخصيص الرموز التعبيرية ، انتقل إلى الملف `emojis.json`.
يتم تعريف Emojis بالفعل افتراضيًا ولكن يمكنك تعديلها إذا كنت ترغب في ذلك.


```js
{
    "music": ":musical_note:",
    "queue": ":bar_chart:",
    "error": ":x:",
    "success": ":white_check_mark:"
}
```

In the console, type `npm install` to install all dependencies.

To start the bot :

```
#With Node
node index.js

#With pm2
pm2 start index.js --name "MusicBot"
```

### 🎵 Music commands

```
play <name>, تشغيل الموسيقى في قناة صوتية.
pause, وقفة الموسيقى الحالية.
resume, يعيد تشغيل الموسيقى الحالية. 
queue, انظر الموسيقى القادمة.
clear-queue, احذف الموسيقى التالية.
shuffle, لخلط قائمة الانتظار.
np,انظر الموسيقى قيد التقدم.
loop,لتمكين أو تعطيل وظيفة التكرار.
volume <1 - 100>, لتغير مستوي الصوت
skip, انتقل إلى الموسيقى التالية.
stop, أوقف كل الموسيقى.

```






