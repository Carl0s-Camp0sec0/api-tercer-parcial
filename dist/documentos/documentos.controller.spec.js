"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const documentos_controller_1 = require("./documentos.controller");
const documentos_service_1 = require("./documentos.service");
describe('DocumentosController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [documentos_controller_1.DocumentosController],
            providers: [documentos_service_1.DocumentosService],
        }).compile();
        controller = module.get(documentos_controller_1.DocumentosController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=documentos.controller.spec.js.map