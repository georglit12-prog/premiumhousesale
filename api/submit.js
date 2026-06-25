// Vercel Serverless Function — приём заявки и отправка в Telegram.
// Токен и chat_id берутся из переменных окружения (Settings → Environment Variables),
// поэтому на сайте они НИКОГДА не видны. В код их вписывать не нужно.
//
//   TELEGRAM_BOT_TOKEN  — токен от @BotFather
//   TELEGRAM_CHAT_ID    — ваш chat_id (узнать у @userinfobot)

export default async function handler(req, res) {
  // CORS (на случай, если файл открывают с другого домена)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method_not_allowed' });

  const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
  if (!TOKEN || !CHAT_ID) {
    return res.status(500).json({ ok: false, error: 'server_not_configured' });
  }

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  // Honeypot: скрытое поле должно быть пустым. Если заполнено — это бот.
  if (body.company) return res.status(200).json({ ok: true });

  const clean = (v, max = 120) =>
    String(v == null ? '' : v).replace(/[<>]/g, '').trim().slice(0, max);

  const agent = clean(body.agent);
  const buyer = clean(body.buyer);
  const phone = clean(body.phone, 40);

  if (!agent || !phone) {
    return res.status(400).json({ ok: false, error: 'missing_fields' });
  }

  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const when = new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' });

  const text =
    '🏛 <b>Новая заявка — Боровское шоссе</b>\n' +
    '<i>Дом по авторскому проекту</i>\n\n' +
    '👤 <b>Агент:</b> ' + esc(agent) + '\n' +
    '🤝 <b>Покупатель:</b> ' + (buyer ? esc(buyer) : '—') + '\n' +
    '📞 <b>Телефон:</b> ' + esc(phone) + '\n\n' +
    '🕒 ' + esc(when) + ' (МСК)';

  try {
    const tg = await fetch('https://api.telegram.org/bot' + TOKEN + '/sendMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'HTML' }),
    });
    const data = await tg.json();
    if (!data.ok) return res.status(502).json({ ok: false, error: 'telegram_error', detail: data.description });
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(502).json({ ok: false, error: 'network_error' });
  }
}
