const teachersRoot = '/teachers';

export default {
    pages: {
        home: '/',
        teachers: {
            root: teachersRoot,
            add: 'new',
            edit: ':id/edit',
            detail: ':id',
        },
        meeting: '/meeting',
        aboutApp: '/about-app',
        aboutDev: '/about-dev',
    },
    navigate: {
        home: '/',
        teachers: {
            root: teachersRoot,
            add: `${teachersRoot}/new`,
            edit: (id) => `${teachersRoot}/${id}/edit`,
            detail: (id) => `${teachersRoot}/${id}`,
        },
        meeting: '/meeting',
        aboutApp: '/about-app',
        aboutDev: '/about-dev',
    },
}

// Потім у appRoutes звідси прописуєм шляхі
