export const config = {
    runtime: 'edge',
    matcher: ['/', '/delivery', '/collab', '/contact'],
};

// Список ботов для проверки (вместо is-bot библиотеки)
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

function isBot(userAgent) {
    if (!userAgent) return false;
    const agent = userAgent.toLowerCase();
    return BOT_USER_AGENTS.some(bot => agent.includes(bot));
}

export default function middleware(request) {
    try {
        const userAgent = request.headers.get('user-agent') || '';
        const isBotRequest = isBot(userAgent);
        const url = new URL(request.url);

        if (isBotRequest) {
            console.log('Bot detected:', url.pathname);
            return Response.rewrite(new URL(`/api/render-bot?pathname=${url.pathname}`, request.url));
        }

        return new Response(null, { status: 200 });
    } catch (error) {
        console.error('Middleware error:', error);
        return new Response(null, { status: 200 });
    }
}
