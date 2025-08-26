// HTML шаблоны прямо в коде
const HTML_TEMPLATES = {
    '/': `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Главная страница</title>
    <meta name="description" content="Описание главной страницы">
    <meta property="og:title" content="Главная страница">
    <meta property="og:description" content="Описание главной страницы">
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
    <meta property="og:title" content="Доставка">
    <meta property="og:description" content="Условия доставки и оплаты">
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
    <meta property="og:title" content="Сотрудничество">
    <meta property="og:description" content="Условия сотрудничества с нами">
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
    <meta property="og:title" content="Контакты">
    <meta property="og:description" content="Наши контактные данные">
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

module.exports = async (req, res) => {
    try {
        const { pathname = '/' } = req.query;
        const html = HTML_TEMPLATES[pathname] || HTML_TEMPLATES['/'];

        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.setHeader('Cache-Control', 'public, max-age=3600');
        res.status(200).send(html);
    } catch (error) {
        console.error('Render bot error:', error);
        res.status(500).send('Error generating page');
    }
};
