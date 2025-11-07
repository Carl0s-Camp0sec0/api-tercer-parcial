"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
exports.databaseConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'inmortal66',
    database: 'tercer_parcial_db',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: true,
};
//# sourceMappingURL=database.config.js.map