try {
  require.resolve('discord.js-selfbot-v13');
  require.resolve('debug');
} catch (e) {
  require('child_process').execSync('npm i discord.js-selfbot-v13 debug');
}

const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

const TOKEN = process.env.DISCORD_TOKEN;
const APP_ID = process.env.APPLICATION_ID;

client.on('ready', async () => {
  console.log(`СТАТУС УСПЕШНО ОБНОВЛЕН: ${client.user.tag}`);
  
 
  const startTime = 1;

  client.user.setPresence({
    activities: [{
      name: "проводник", 
      type: "PLAYING",   
      applicationId: APP_ID,
      details: "Пытаюсь найти твои мозги", 
      state: "Элемент не найден",
      timestamps: { start: startTime }
    }],
    status: 'online'
  });
});

const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end("RPC Проводник работает на максимум!");
}).listen(process.env.PORT || 3000);

client.login(TOKEN).catch(err => {
  console.error("ОШИБКА АВТОРИЗАЦИИ!");
});
