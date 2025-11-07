import { Repository } from 'typeorm';
import { CreateArticuloDto } from './dto/create-articulo.dto';
import { UpdateArticuloDto } from './dto/update-articulo.dto';
import { Articulo } from './entities/articulo.entity';
export declare class ArticulosService {
    private articuloRepository;
    constructor(articuloRepository: Repository<Articulo>);
    create(createArticuloDto: CreateArticuloDto): Promise<Articulo>;
    findAll(): Promise<Articulo[]>;
    findOne(id: number): Promise<Articulo>;
    update(id: number, updateArticuloDto: UpdateArticuloDto): Promise<Articulo>;
    patch(id: number, updateArticuloDto: Partial<UpdateArticuloDto>): Promise<Articulo>;
    remove(id: number): Promise<{
        message: string;
    }>;
    updateTextPath(id: number, textPath: string): Promise<Articulo>;
    findByStatus(estado: 'borrador' | 'publicado' | 'revision'): Promise<Articulo[]>;
    findByCategory(categoria: string): Promise<Articulo[]>;
}
