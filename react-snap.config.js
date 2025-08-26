module.exports = {
    source: 'build',
    include: ['/', '/delivery', '/collab', '/contact'],
    userAgent: 'ReactSnap',
    concurrency: 1,
    skipThirdPartyRequests: true,
    cache: false,
    // Для React Router v6
    preloadResources: true,
    preloadImages: false,
    // Игнорируем динамические пути
    exclude: ['/404', '/500'],
};
