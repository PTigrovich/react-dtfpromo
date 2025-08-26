// middleware.js
import { isBot } from 'is-bot';

export const config = {
    matcher: [
        // Обрабатываем только HTML-страницы, исключаем все файлы
        '/((?!_next/static|_next/image|favicon.ico|static/|assets/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|woff2|js|css|json|xml|txt)$).*)',
    ],
};

export default function middleware(request) {
    try {
        const url = new URL(request.url);
        const userAgent = request.headers.get('user-agent') || '';

        // Проверяем, является ли User-Agent поисковым ботом
        const isBotRequest = isBot(userAgent);

        if (isBotRequest) {
            console.log('Bot detected:', userAgent);

            // Для ботов перенаправляем на специальный обработчик
            const botUrl = new URL(request.url);
            botUrl.pathname = `/render-bot${botUrl.pathname}`;
            return Response.rewrite(botUrl);
        }

        // Для обычных пользователей - пропускаем запрос
        // В чистом React просто возвращаем пустой ответ
        return new Response(null, {
            status: 200,
            headers: new Headers(),
        });
    } catch (error) {
        console.error('Middleware error:', error);
        // В случае ошибки пропускаем запрос
        return new Response(null, { status: 200 });
    }
}
