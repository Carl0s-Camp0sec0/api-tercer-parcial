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
exports.DocumentosController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const documentos_service_1 = require("./documentos.service");
const create_documento_dto_1 = require("./dto/create-documento.dto");
const update_documento_dto_1 = require("./dto/update-documento.dto");
let DocumentosController = class DocumentosController {
    constructor(documentosService) {
        this.documentosService = documentosService;
    }
    create(createDocumentoDto) {
        return this.documentosService.create(createDocumentoDto);
    }
    async uploadPdf(id, file) {
        const pdfPath = `uploads/documentos/${file.filename}`;
        return this.documentosService.updatePdfPath(id, pdfPath);
    }
    findAll(tipo) {
        if (tipo) {
            return this.documentosService.findByType(tipo);
        }
        return this.documentosService.findAll();
    }
    findOne(id) {
        return this.documentosService.findOne(id);
    }
    update(id, updateDocumentoDto) {
        return this.documentosService.update(id, updateDocumentoDto);
    }
    patch(id, updateDocumentoDto) {
        return this.documentosService.patch(id, updateDocumentoDto);
    }
    remove(id) {
        return this.documentosService.remove(id);
    }
};
exports.DocumentosController = DocumentosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_documento_dto_1.CreateDocumentoDto]),
    __metadata("design:returntype", void 0)
], DocumentosController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(':id/pdf'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('pdf', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/documentos',
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = (0, path_1.extname)(file.originalname);
                const filename = `documento-${uniqueSuffix}${ext}`;
                callback(null, filename);
            },
        }),
        fileFilter: (req, file, callback) => {
            if (!file.originalname.match(/\.(pdf)$/)) {
                return callback(new Error('Solo se permiten archivos PDF'), false);
            }
            callback(null, true);
        },
        limits: {
            fileSize: 10 * 1024 * 1024,
        },
    })),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], DocumentosController.prototype, "uploadPdf", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('tipo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DocumentosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_documento_dto_1.UpdateDocumentoDto]),
    __metadata("design:returntype", void 0)
], DocumentosController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_documento_dto_1.UpdateDocumentoDto]),
    __metadata("design:returntype", void 0)
], DocumentosController.prototype, "patch", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DocumentosController.prototype, "remove", null);
exports.DocumentosController = DocumentosController = __decorate([
    (0, common_1.Controller)('documentos'),
    __metadata("design:paramtypes", [documentos_service_1.DocumentosService])
], DocumentosController);
//# sourceMappingURL=documentos.controller.js.map