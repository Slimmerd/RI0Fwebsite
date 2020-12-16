import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import {initReactI18next} from 'react-i18next'

const availableLanguages = ['ru', 'en'];

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: localStorage.getItem('locales'),
        backend: {
            // /* translation file path */
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        },
        fallbackLng: 'ru',
        whitelist: availableLanguages,
        debug: false,
        /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
        ns: ['basic', 'main', 'news', 'team', 'plan', 'hardware', 'photos', 'qsl', 'onlinelog', 'donate', 'chat', 'contacts'],
        defaultNS: 'basic',
        // keySeparator: false,
        interpolation: {
            escapeValue: false,
            formatSeparator: ','
        },
        react: {
            wait: true
        }
    })

export default i18n