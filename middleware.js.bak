// middleware.js
import { isBot } from 'is-bot';
import { next } from '@vercel/edge';

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder
         * - assets (typical React build folder)
         */
        '/((?!_next/static|_next/image|favicon.ico|static/|assets/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|woff2|js|css)$).*)',
    ],
};

export default function middleware(request) {
    // 1. Получаем User-Agent из заголовков запроса
    const url = new URL(request.url);
    const userAgent = request.headers.get('user-agent') || '';

    // 2. Проверяем, является ли запрос от поискового бота или соц. сети
    const isBotRequest = isBot(userAgent);

    // 3. Если это бот, перенаправляем его на специальный роут для рендеринга
    if (isBotRequest) {
        const botUrl = new URL(request.url);
        botUrl.pathname = `/render-bot${botUrl.pathname}`;
        return Response.rewrite(botUrl);
    }

    // 4. Если это обычный пользователь, просто пропускаем запрос дальше
    return next();
}
