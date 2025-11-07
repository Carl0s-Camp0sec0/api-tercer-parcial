"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const carros_controller_1 = require("./carros.controller");
const carros_service_1 = require("./carros.service");
describe('CarrosController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [carros_controller_1.CarrosController],
            providers: [carros_service_1.CarrosService],
        }).compile();
        controller = module.get(carros_controller_1.CarrosController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=carros.controller.spec.js.map