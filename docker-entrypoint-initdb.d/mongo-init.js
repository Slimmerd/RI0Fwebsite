db = db.getSiblingDB('ri0f-backend');
db.createUser(
    {
        user: 'USER',
        pwd: 'PASSWORD',
        roles: [{role: 'readWrite', db: 'ri0f-backend'}],
    },
);
db.createCollection('users');