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
exports.ArticulosController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const articulos_service_1 = require("./articulos.service");
const create_articulo_dto_1 = require("./dto/create-articulo.dto");
const update_articulo_dto_1 = require("./dto/update-articulo.dto");
let ArticulosController = class ArticulosController {
    constructor(articulosService) {
        this.articulosService = articulosService;
    }
    create(createArticuloDto) {
        return this.articulosService.create(createArticuloDto);
    }
    async uploadText(id, file) {
        const textPath = `uploads/articulos/${file.filename}`;
        return this.articulosService.updateTextPath(id, textPath);
    }
    findAll(estado, categoria) {
        if (estado) {
            return this.articulosService.findByStatus(estado);
        }
        if (categoria) {
            return this.articulosService.findByCategory(categoria);
        }
        return this.articulosService.findAll();
    }
    findOne(id) {
        return this.articulosService.findOne(id);
    }
    update(id, updateArticuloDto) {
        return this.articulosService.update(id, updateArticuloDto);
    }
    patch(id, updateArticuloDto) {
        return this.articulosService.patch(id, updateArticuloDto);
    }
    remove(id) {
        return this.articulosService.remove(id);
    }
};
exports.ArticulosController = ArticulosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_articulo_dto_1.CreateArticuloDto]),
    __metadata("design:returntype", void 0)
], ArticulosController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(':id/texto'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('texto', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/articulos',
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = (0, path_1.extname)(file.originalname);
                const filename = `articulo-${uniqueSuffix}${ext}`;
                callback(null, filename);
            },
        }),
        fileFilter: (req, file, callback) => {
            if (!file.originalname.match(/\.(txt|md|doc|docx)$/)) {
                return callback(new Error('Solo se permiten archivos de texto (.txt, .md, .doc, .docx)'), false);
            }
            callback(null, true);
        },
        limits: {
            fileSize: 5 * 1024 * 1024,
        },
    })),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ArticulosController.prototype, "uploadText", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('estado')),
    __param(1, (0, common_1.Query)('categoria')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ArticulosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ArticulosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_articulo_dto_1.UpdateArticuloDto]),
    __metadata("design:returntype", void 0)
], ArticulosController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_articulo_dto_1.UpdateArticuloDto]),
    __metadata("design:returntype", void 0)
], ArticulosController.prototype, "patch", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ArticulosController.prototype, "remove", null);
exports.ArticulosController = ArticulosController = __decorate([
    (0, common_1.Controller)('articulos'),
    __metadata("design:paramtypes", [articulos_service_1.ArticulosService])
], ArticulosController);
//# sourceMappingURL=articulos.controller.js.map