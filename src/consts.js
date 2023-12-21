export const USERS = Array.from(Array(50), (_, i) => ({
    id: +Date.now() + i,
    name: 'Эдуард',
    email: `testmail${i < 10 ? '0' + i : i }@gmail.com`,
    role: 'USER',
    subscription: 'Free',
    token: Math.round(Math.random() * 10000) + ' TKN'
}));

export const PAGE_SIZE = 10;
