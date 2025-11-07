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
exports.ArticulosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const articulo_entity_1 = require("./entities/articulo.entity");
let ArticulosService = class ArticulosService {
    constructor(articuloRepository) {
        this.articuloRepository = articuloRepository;
    }
    async create(createArticuloDto) {
        const articulo = this.articuloRepository.create(createArticuloDto);
        return await this.articuloRepository.save(articulo);
    }
    async findAll() {
        return await this.articuloRepository.find({
            order: { fecha_creacion: 'DESC' }
        });
    }
    async findOne(id) {
        const articulo = await this.articuloRepository.findOne({ where: { id } });
        if (!articulo) {
            throw new common_1.NotFoundException(`Artículo con ID ${id} no encontrado`);
        }
        return articulo;
    }
    async update(id, updateArticuloDto) {
        const articulo = await this.findOne(id);
        Object.assign(articulo, updateArticuloDto);
        return await this.articuloRepository.save(articulo);
    }
    async patch(id, updateArticuloDto) {
        const articulo = await this.findOne(id);
        Object.assign(articulo, updateArticuloDto);
        return await this.articuloRepository.save(articulo);
    }
    async remove(id) {
        const articulo = await this.findOne(id);
        await this.articuloRepository.remove(articulo);
        return { message: `Artículo con ID ${id} eliminado exitosamente` };
    }
    async updateTextPath(id, textPath) {
        const articulo = await this.findOne(id);
        articulo.ruta_archivo_texto = textPath;
        return await this.articuloRepository.save(articulo);
    }
    async findByStatus(estado) {
        return await this.articuloRepository.find({
            where: { estado_publicacion: estado },
            order: { fecha_creacion: 'DESC' }
        });
    }
    async findByCategory(categoria) {
        return await this.articuloRepository.find({
            where: { categoria },
            order: { fecha_creacion: 'DESC' }
        });
    }
};
exports.ArticulosService = ArticulosService;
exports.ArticulosService = ArticulosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(articulo_entity_1.Articulo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ArticulosService);
//# sourceMappingURL=articulos.service.js.map