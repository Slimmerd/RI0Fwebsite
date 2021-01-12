db = db.getSiblingDB('ri0f-backend');
db.createUser(
    {
        user: '7QlNen14duCxAk5wyUTHHA8x',
        pwd: 'VNTd337OCAj6hDmXH8gEkDz3',
        roles: [{role: 'readWrite', db: 'ri0f-backend'}],
    },
);
db.createCollection('users');