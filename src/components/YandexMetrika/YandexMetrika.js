// src/components/YandexMetrika/YandexMetrika.js
import { useEffect } from 'react';

const YandexMetrika = () => {
    useEffect(() => {
        if (window.ym) return;

        // Код Яндекс.Метрики
        (function (m, e, t, r, i, k, a) {
            m[i] =
                m[i] ||
                function () {
                    (m[i].a = m[i].a || []).push(arguments);
                };
            m[i].l = 1 * new Date();

            for (let j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) {
                    return;
                }
            }

            k = e.createElement(t);
            a = e.getElementsByTagName(t)[0];
            k.async = 1;
            k.src = r;
            a.parentNode.insertBefore(k, a);
        })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=103906071', 'ym');

        // Инициализация
        window.ym(103906071, 'init', {
            ssr: true,
            webvisor: true,
            clickmap: true,
            ecommerce: 'dataLayer',
            accurateTrackBounce: true,
            trackLinks: true,
        });

        // ⭐ ВАЖНО ДЛЯ SPA: Отслеживаем начальную страницу
        window.ym(103906071, 'hit', window.location.pathname);
    }, []);

    return (
        <noscript>
            <div>
                <img src="https://mc.yandex.ru/watch/103906071" style={{ position: 'absolute', left: '-9999px' }} alt="" />
            </div>
        </noscript>
    );
};

export default YandexMetrika;
