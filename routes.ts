/**
 * Набор маршрутов, доступных для общего пользования.
 * Эти маршруты не требуют аутентификации
 * @type {string[]}
 */
export const publicRoutes = ['/'];

/**
 * Набор маршрутов, требующих аутентификации.
 * Эти маршруты перенаправят зарегистрированных пользователей в /settings
 * @type {string[]}
 */
export const authRoutes = ['/auth/login', '/auth/register'];

/**
 * Префикс для аутентификационных маршрутов API
 * Маршруты, начинающиеся с этого префикса, используются для аутентификации по API
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

/**
 * путь перенаправления по умолчанию после входа в систему
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/settings';
