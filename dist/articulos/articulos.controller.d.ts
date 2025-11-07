import { ArticulosService } from './articulos.service';
import { CreateArticuloDto } from './dto/create-articulo.dto';
import { UpdateArticuloDto } from './dto/update-articulo.dto';
export declare class ArticulosController {
    private readonly articulosService;
    constructor(articulosService: ArticulosService);
    create(createArticuloDto: CreateArticuloDto): Promise<import("./entities/articulo.entity").Articulo>;
    uploadText(id: number, file: Express.Multer.File): Promise<import("./entities/articulo.entity").Articulo>;
    findAll(estado?: 'borrador' | 'publicado' | 'revision', categoria?: string): Promise<import("./entities/articulo.entity").Articulo[]>;
    findOne(id: number): Promise<import("./entities/articulo.entity").Articulo>;
    update(id: number, updateArticuloDto: UpdateArticuloDto): Promise<import("./entities/articulo.entity").Articulo>;
    patch(id: number, updateArticuloDto: UpdateArticuloDto): Promise<import("./entities/articulo.entity").Articulo>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
