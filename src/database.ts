import { Sequelize } from 'sequelize';
import { UserModel } from './user/user';
import { SubjectModel } from './subject/subject';
import { UniversityModel } from './university/university';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite', // SQLite database file path
});

export const db = {
    sequelize,
    Sequelize,
    models: {
        User: UserModel(sequelize),
        University: UniversityModel(sequelize),
        Subject: SubjectModel(sequelize)
    },
};

db.models.User.belongsTo(db.models.University, {
    foreignKey: 'universityId',
    as: 'university',
});

db.models.University.hasMany(db.models.User, {
    foreignKey: 'universityId',
    as: 'users',
});

db.models.User.hasMany(db.models.Subject, {
    foreignKey: 'subjectId',
    as: 'subjects',
});
