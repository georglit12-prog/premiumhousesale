# Chateau Borovskoe — CLAUDE.md

## Проект
Сайт-презентация закрытой продажи дома по авторскому проекту на Боровском шоссе.
Двуязычный (RU/EN), одностраничный лендинг в стиле luxury-недвижимости.

## Стек
- Чистый HTML/CSS/JS, один файл `index.html`
- Шрифты: Cormorant Garamond (display), EB Garamond (body), Jost (labels)
- Деплой: Vercel (`premiumhousesale.vercel.app`)
- GitHub: `github.com/georglit12-prog/premiumhousesale`
- Серверная функция: `api/submit.js` (Vercel Serverless → Telegram, пока не подключена)

## Структура файлов
```
index.html              — весь сайт
api/submit.js           — приём заявок → Telegram
assets/                 — фото объекта (фасады, интерьеры, парк)
assets/atmo_statues.jpg — атмосферное фото для секции-разделителя
assets/decor/           — декоративные PNG без фона:
  column1.png           — белая мраморная колонна с резьбой
  column2.png           — колонна с розовыми цветами
  column3.png           — белая колонна с бело-розовыми розами
  column4.png           — колонна с оранжевыми цветами
  roses.png             — ботаническая иллюстрация роз
  clouds.png            — барочные облака
  bust.png              — мраморный бюст женщины
  cherub.png            — херувим с луком
```

## Критически важно
- **Мобильная версия (<900px) УТВЕРЖДЕНА** — не трогать
- Классы `desktop-only` / `mobile-only` разделяют декор
- Десктопная версия — в доработке
- Форма заявки временно заменена на текст
- Фон с декоративных картинок убран через Pillow (threshold 215+)
