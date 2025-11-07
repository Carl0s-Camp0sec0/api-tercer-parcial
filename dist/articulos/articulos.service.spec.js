"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const articulos_service_1 = require("./articulos.service");
describe('ArticulosService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [articulos_service_1.ArticulosService],
        }).compile();
        service = module.get(articulos_service_1.ArticulosService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=articulos.service.spec.js.map