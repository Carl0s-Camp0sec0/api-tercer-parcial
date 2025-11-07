"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const articulos_controller_1 = require("./articulos.controller");
const articulos_service_1 = require("./articulos.service");
describe('ArticulosController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [articulos_controller_1.ArticulosController],
            providers: [articulos_service_1.ArticulosService],
        }).compile();
        controller = module.get(articulos_controller_1.ArticulosController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=articulos.controller.spec.js.map