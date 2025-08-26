// middleware.js
import { isBot } from 'is-bot';

export const config = {
    runtime: 'edge',
    matcher: ['/', '/delivery', '/collab', '/contact'],
};

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
        return new Response(null, { status: 200 });
    }
}
