const axios = require('axios');
module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['gpt', 'openai', 'assistant'],
  description: "An AI command powered by GPT-4",
  usage: "Ai [promot]",
  credits: 'Metoushela Walker',
  cooldown: 3,
};
module.exports.run = async function({
  api,
  event,
  args
}) {
  const input = args.join(' ');
  if (!input) {
    api.sendMessage(`Oui quelle est votre question 🌐`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(`𝚂ｈ𝚎𝚊ｒ𝚌ｈ...\n━━━━━━━━━━━\n "${input}"`, event.threadID, event.messageID);
  try {
    const {
      data
    } = await axios.get(`https://metoushela-rest-api-tp5g.onrender.com/api/gpt4o?context=${encodeURIComponent(input)}`);
    const response = data.response;
    api.sendMessage('⚘𝗔𝘀𝘀𝗶𝘀𝘁𝗮𝗻𝘁⊰♔⊱\n\n⊰⊹⊱♡⊰⊹⊱♡⊰⊹⊱♡⊰⊹\n' + response + '\n╰┈➤⊹⊱✫⊰⊹⊱✫⊰🍀', event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('🔴 An error occurred while processing your request..', event.threadID, event.messageID);
  }
};
