"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const documentos_service_1 = require("./documentos.service");
describe('DocumentosService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [documentos_service_1.DocumentosService],
        }).compile();
        service = module.get(documentos_service_1.DocumentosService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=documentos.service.spec.js.map