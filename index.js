try {
  require.resolve('discord.js-selfbot-v13');
} catch (e) {
  require('child_process').execSync('npm install discord.js-selfbot-v13');
}

const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

const TOKEN = process.env.DISCORD_TOKEN;
const APP_ID = process.env.APPLICATION_ID;

client.on('ready', async () => {
  console.log(`СТАТУС УСПЕШНО ЗАПУЩЕН для аккаунта: ${client.user.tag}`);
  
  const startTime = Date.now() - (15000 * 60 * 60 * 1000);

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
  res.end("RPC Проводник работает 24/7!");
}).listen(process.env.PORT || 3000);

client.login(TOKEN).catch(err => {
  console.error("ОШИБКА АВТОРИЗАЦИИ!");
});
