// api/render-bot.js


// HTML шаблоны прямо в коде
const HTML_TEMPLATES = {
    '/': `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Главная страница</title>
    <meta name="description" content="Описание главной страницы">
</head>
<body>
    <div id="root">
        <h1>Главная страница</h1>
        <p>Содержание главной страницы</p>
    </div>
</body>
</html>
  `,
    '/delivery': `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Доставка</title>
    <meta name="description" content="Условия доставки и оплаты">
</head>
<body>
    <div id="root">
        <h1>Доставка</h1>
        <p>Условия доставки и оплаты</p>
    </div>
</body>
</html>
  `,
    '/collab': `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Сотрудничество</title>
    <meta name="description" content="Условия сотрудничества">
</head>
<body>
    <div id="root">
        <h1>Сотрудничество</h1>
        <p>Условия сотрудничества с нами</p>
    </div>
</body>
</html>
  `,
    '/contact': `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Контакты</title>
    <meta name="description" content="Наши контактные данные">
</head>
<body>
    <div id="root">
        <h1>Контакты</h1>
        <p>Наши контактные данные</p>
    </div>
</body>
</html>
  `,
};

export default function handler(request) {
    try {
        const url = new URL(request.url);
        const pathname = url.searchParams.get('pathname') || '/';

        const html = HTML_TEMPLATES[pathname] || HTML_TEMPLATES['/'];

        return new Response(html, {
            status: 200,
            headers: {
                'Content-Type': 'text/html; charset=utf-8',
                'Cache-Control': 'public, max-age=3600',
            },
        });
    } catch (error) {
        return new Response('Error generating page', { status: 500 });
    }
}
