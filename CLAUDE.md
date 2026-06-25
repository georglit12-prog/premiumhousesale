# Chateau Borovskoe — CLAUDE.md

## Проект
Сайт-презентация закрытой продажи дома по авторскому проекту на Боровском шоссе.
Двуязычный (RU/EN), одностраничный лендинг в стиле luxury-недвижимости.

## Стек
- Чистый HTML/CSS/JS, один файл `index.html`
- Шрифты: Cormorant Garamond (display), EB Garamond (body), Jost (labels)
- Деплой: Vercel (`premiumhousesale.vercel.app`) + GitHub Pages
- Серверная функция: `api/submit.js` (Vercel Serverless → Telegram)

## Структура
- `index.html` — весь сайт
- `assets/` — фото объекта + атмосферные
- `assets/decor/` — декоративные PNG (колонны, розы, облака, бюст, херувим)
- `api/submit.js` — приём заявок → Telegram

## Важно
- Мобильная версия (<900px) утверждена — НЕ ТРОГАТЬ
- Десктопная версия — в процессе доработки
- Классы `desktop-only` / `mobile-only` разделяют декор для разных устройств
- Фон с картинок убран через Pillow (скрипт удаления белого фона)
- Форма заявки временно отключена, вместо неё текст
