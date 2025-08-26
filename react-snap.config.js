module.exports = {
    source: 'build',
    include: ['/', '/delivery', '/collab', '/contact'],
    userAgent: 'ReactSnap',
    concurrency: 1,
    skipThirdPartyRequests: true,
    cache: false,
    // Важные настройки для React Router
    preloadResources: false,
    preloadImages: false,
    inlineCss: false,
    // Игнорируем API routes
    exclude: ['/api/*', '/static/*', '/images/*', '/asset-manifest.json'],
};
