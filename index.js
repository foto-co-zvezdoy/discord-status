const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

const TOKEN = process.env.DISCORD_TOKEN;
const APP_ID = process.env.APPLICATION_ID;

client.on('ready', async () => {
  console.log(`Статус успешно запущен для: ${client.user.tag}`);
  
  
  const startTime = Date.now() - (170000 * 60 * 60 * 1000);

  client.user.setPresence({
    activities: [{
      name: "проводник", 
      type: "PLAYING",   
      applicationId: APP_ID,
      details: "Пытаюсь найти твои мозги...", 
      state: "Элемент не найден (Ошибка 404)",
      timestamps: { start: startTime }
    }],
    status: 'online'
  });
});

const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end("Статус работает круглосуточно!");
}).listen(process.env.PORT || 3000);

client.login(TOKEN);
