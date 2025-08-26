// api/render-bot.js
export default async function handler(request) {
    const url = new URL(request.url);
    const path = url.pathname.replace('/render-bot', '');
    const targetUrl = `https://${url.hostname}${path}${url.search}`;

    // Просто редиректим ботов на оригинальную страницу
    // Vercel автоматически отдаст собранный React-файл
    return Response.redirect(targetUrl, 302);
}

export const config = {
    runtime: 'edge',
};