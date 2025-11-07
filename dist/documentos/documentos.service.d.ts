import { Repository } from 'typeorm';
import { CreateDocumentoDto } from './dto/create-documento.dto';
import { UpdateDocumentoDto } from './dto/update-documento.dto';
import { Documento } from './entities/documento.entity';
export declare class DocumentosService {
    private documentoRepository;
    constructor(documentoRepository: Repository<Documento>);
    create(createDocumentoDto: CreateDocumentoDto): Promise<Documento>;
    findAll(): Promise<Documento[]>;
    findOne(id: number): Promise<Documento>;
    update(id: number, updateDocumentoDto: UpdateDocumentoDto): Promise<Documento>;
    patch(id: number, updateDocumentoDto: Partial<UpdateDocumentoDto>): Promise<Documento>;
    remove(id: number): Promise<{
        message: string;
    }>;
    updatePdfPath(id: number, pdfPath: string): Promise<Documento>;
    findByType(tipo: string): Promise<Documento[]>;
}
