"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const carro_entity_1 = require("./entities/carro.entity");
let CarrosService = class CarrosService {
    constructor(carroRepository) {
        this.carroRepository = carroRepository;
    }
    async create(createCarroDto) {
        const carro = this.carroRepository.create(createCarroDto);
        return await this.carroRepository.save(carro);
    }
    async findAll() {
        return await this.carroRepository.find({
            order: { fecha_creacion: 'DESC' }
        });
    }
    async findOne(id) {
        const carro = await this.carroRepository.findOne({ where: { id } });
        if (!carro) {
            throw new common_1.NotFoundException(`Carro con ID ${id} no encontrado`);
        }
        return carro;
    }
    async update(id, updateCarroDto) {
        const carro = await this.findOne(id);
        Object.assign(carro, updateCarroDto);
        return await this.carroRepository.save(carro);
    }
    async patch(id, updateCarroDto) {
        const carro = await this.findOne(id);
        Object.assign(carro, updateCarroDto);
        return await this.carroRepository.save(carro);
    }
    async remove(id) {
        const carro = await this.findOne(id);
        await this.carroRepository.remove(carro);
        return { message: `Carro con ID ${id} eliminado exitosamente` };
    }
    async updateImagePath(id, imagePath) {
        const carro = await this.findOne(id);
        carro.imagen_carro = imagePath;
        return await this.carroRepository.save(carro);
    }
};
exports.CarrosService = CarrosService;
exports.CarrosService = CarrosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(carro_entity_1.Carro)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CarrosService);
//# sourceMappingURL=carros.service.js.map