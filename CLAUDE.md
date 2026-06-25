# Chateau Borovskoe — CLAUDE.md

## Проект
Сайт-презентация закрытой продажи дома на Боровском шоссе. ГОТОВ.

## Стек
- Чистый HTML/CSS/JS, один файл `index.html`
- Шрифты: Cormorant Garamond, EB Garamond, Jost (Google Fonts)
- Деплой: Vercel (`premiumhousesale.vercel.app`)
- GitHub: `github.com/georglit12-prog/premiumhousesale`

## Структура файлов
```
index.html              — весь сайт (HTML + CSS + JS)
api/submit.js           — приём заявок → Telegram (не подключена)
assets/                 — фото объекта
assets/atmo_statues.jpg — фото для секции-разделителя
assets/decor/           — декоративные PNG без фона:
  column1.png — белая мраморная колонна (Объект, Заявка-mobile)
  column2.png — колонна с розовыми цветами (Особняк)
  column3.png — колонна с бело-розовыми розами (не используется)
  column4.png — колонна с оранжевыми цветами (Территория)
  roses.png   — ботанические розы (Особняк, Территория)
  clouds.png  — барочные облака (Расположение, Заявка-mobile)
  bust.png    — мраморный бюст (Расположение)
  cherub.png  — херувим (не используется)
```

## Критически важно
- **Мобильная версия (<900px) УТВЕРЖДЕНА** — не трогать
- **Десктопная версия (>900px) УТВЕРЖДЕНА** — не трогать
- Классы `desktop-only` / `mobile-only` разделяют декор
- Колонны: `height:120%; margin-top:-10%` для эффекта "во весь слайд"
- Особняк: колонна `left:-140px` — выходит из левой стены
- Lightbox работает через JS в конце файла
- Форма заявки отключена, код готов к включению (обёрнут в `if(leadForm)`)
- Фон с декоративных картинок убран через Pillow (threshold 215+)
