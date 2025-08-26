import { useEffect } from 'react';

const SeoMetaTags = ({
    title = '3D Печать и моделирование - RiteC',
    description = 'Профессиональная 3D печать, создание моделей и сотрудничество. Высокое качество, быстрая доставка по России.',
    keywords = '3D печать, 3D модели, создание прототипов, 3D принтеры, сотрудничество',
    image = '/images/og-image.jpg',
    url = '/',
    type = 'website',
}) => {
    useEffect(() => {
        // Изменяем title страницы
        document.title = title;

        // Создаем или обновляем meta-теги
        const updateMetaTag = (name, content) => {
            let tag = document.querySelector(`meta[name="${name}"]`);
            if (!tag) {
                tag = document.createElement('meta');
                tag.name = name;
                document.head.appendChild(tag);
            }
            tag.content = content;
        };

        const updatePropertyTag = (property, content) => {
            let tag = document.querySelector(`meta[property="${property}"]`);
            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute('property', property);
                document.head.appendChild(tag);
            }
            tag.content = content;
        };

        // Обновляем основные meta-теги
        updateMetaTag('description', description);
        updateMetaTag('keywords', keywords);

        // Обновляем Open Graph теги
        updatePropertyTag('og:title', title);
        updatePropertyTag('og:description', description);
        updatePropertyTag('og:image', image);
        updatePropertyTag('og:url', url);
        updatePropertyTag('og:type', type);
        updatePropertyTag('og:site_name', 'RiteC');

        // Twitter Card
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:title', title);
        updateMetaTag('twitter:description', description);
        updateMetaTag('twitter:image', image);
    }, [title, description, keywords, image, url, type]);

    return null; // Этот компонент ничего не рендерит в DOM
};

export default SeoMetaTags;
