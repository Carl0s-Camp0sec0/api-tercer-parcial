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
exports.DocumentosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const documento_entity_1 = require("./entities/documento.entity");
let DocumentosService = class DocumentosService {
    constructor(documentoRepository) {
        this.documentoRepository = documentoRepository;
    }
    async create(createDocumentoDto) {
        const documento = this.documentoRepository.create(createDocumentoDto);
        return await this.documentoRepository.save(documento);
    }
    async findAll() {
        return await this.documentoRepository.find({
            order: { fecha_creacion: 'DESC' }
        });
    }
    async findOne(id) {
        const documento = await this.documentoRepository.findOne({ where: { id } });
        if (!documento) {
            throw new common_1.NotFoundException(`Documento con ID ${id} no encontrado`);
        }
        return documento;
    }
    async update(id, updateDocumentoDto) {
        const documento = await this.findOne(id);
        Object.assign(documento, updateDocumentoDto);
        return await this.documentoRepository.save(documento);
    }
    async patch(id, updateDocumentoDto) {
        const documento = await this.findOne(id);
        Object.assign(documento, updateDocumentoDto);
        return await this.documentoRepository.save(documento);
    }
    async remove(id) {
        const documento = await this.findOne(id);
        await this.documentoRepository.remove(documento);
        return { message: `Documento con ID ${id} eliminado exitosamente` };
    }
    async updatePdfPath(id, pdfPath) {
        const documento = await this.findOne(id);
        documento.ruta_archivo_pdf = pdfPath;
        return await this.documentoRepository.save(documento);
    }
    async findByType(tipo) {
        return await this.documentoRepository.find({
            where: { tipo_documento: tipo },
            order: { fecha_creacion: 'DESC' }
        });
    }
};
exports.DocumentosService = DocumentosService;
exports.DocumentosService = DocumentosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(documento_entity_1.Documento)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DocumentosService);
//# sourceMappingURL=documentos.service.js.map