export const CHOSEN_NEWS_SEO = (lang, ActNews) => {
    return {
        title: `RI0FF | ${lang && lang === 'ru' ? ActNews.name_ru : ActNews.name_en}`,
        description: lang && lang === 'ru' ? ActNews.text_ru : ActNews.text_en,

        openGraph: {
            title: `RI0FF | ${lang && lang === 'ru' ? ActNews.name_ru : ActNews.name_en}`,
            description: lang && lang === 'ru' ? ActNews.text_ru : ActNews.text_en,
        }
    }
}

// Main page
export const MAIN_SEO = (lang, ru, eng) => {
    return {
        title: `RI0FF | ${lang && lang === 'ru' ? ru.head : eng.head}`,
        description: lang && lang === 'ru' ? ru.description : eng.description,

        openGraph: {
            title: `RI0FF | ${lang && lang === 'ru' ? ru.head : eng.head}`,
            description: lang && lang === 'ru' ? ru.description : eng.description,
        }
    }
}

export const ADMIN_SEO = {
    title: `RI0FF | Панель управления`,
    description: 'Go home',
    nofollow: true,
    noindex: true,

    openGraph: {
        title: `RI0FF | Панель управления`,
        description: 'Go home',
    }
}

