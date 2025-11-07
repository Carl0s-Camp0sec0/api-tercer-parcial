import { DocumentosService } from './documentos.service';
import { CreateDocumentoDto } from './dto/create-documento.dto';
import { UpdateDocumentoDto } from './dto/update-documento.dto';
export declare class DocumentosController {
    private readonly documentosService;
    constructor(documentosService: DocumentosService);
    create(createDocumentoDto: CreateDocumentoDto): Promise<import("./entities/documento.entity").Documento>;
    uploadPdf(id: number, file: Express.Multer.File): Promise<import("./entities/documento.entity").Documento>;
    findAll(tipo?: string): Promise<import("./entities/documento.entity").Documento[]>;
    findOne(id: number): Promise<import("./entities/documento.entity").Documento>;
    update(id: number, updateDocumentoDto: UpdateDocumentoDto): Promise<import("./entities/documento.entity").Documento>;
    patch(id: number, updateDocumentoDto: UpdateDocumentoDto): Promise<import("./entities/documento.entity").Documento>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
