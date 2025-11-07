"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const carros_service_1 = require("./carros.service");
describe('CarrosService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [carros_service_1.CarrosService],
        }).compile();
        service = module.get(carros_service_1.CarrosService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=carros.service.spec.js.map