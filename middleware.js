export const config = {
    runtime: 'edge',
    matcher: ['/', '/delivery', '/collab', '/contact'],
};

const BOT_USER_AGENTS = [
    'bot',
    'crawler',
    'spider',
    'facebookexternalhit',
    'twitterbot',
    'telegrambot',
    'whatsapp',
    'linkedinbot',
    'discordbot',
    'googlebot',
    'bingbot',
    'yandexbot',
    'slackbot',
    'applebot',
    'baiduspider',
    'duckduckbot',
    'facebot',
    'embedly',
    'pinterest',
    'slurp',
    'vkShare',
];

// Исключаем статические файлы из обработки middleware
const STATIC_EXTENSIONS = ['.ico', '.jpg', '.jpeg', '.png', '.gif', '.svg', '.css', '.js', '.json'];

export default function middleware(request) {
    try {
        const url = new URL(request.url);

        // Пропускаем статические файлы
        if (STATIC_EXTENSIONS.some(ext => url.pathname.endsWith(ext))) {
            return new Response(null, { status: 200 });
        }

        const userAgent = request.headers.get('user-agent') || '';
        const isBotRequest = BOT_USER_AGENTS.some(bot => userAgent.toLowerCase().includes(bot.toLowerCase()));

        if (isBotRequest) {
            return Response.rewrite(new URL(`/api/render-bot?pathname=${url.pathname}`, request.url));
        }

        return new Response(null, { status: 200 });
    } catch (error) {
        return new Response(null, { status: 200 });
    }
}
