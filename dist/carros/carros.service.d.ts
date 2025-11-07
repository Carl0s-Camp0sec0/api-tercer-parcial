import { Repository } from 'typeorm';
import { CreateCarroDto } from './dto/create-carro.dto';
import { UpdateCarroDto } from './dto/update-carro.dto';
import { Carro } from './entities/carro.entity';
export declare class CarrosService {
    private carroRepository;
    constructor(carroRepository: Repository<Carro>);
    create(createCarroDto: CreateCarroDto): Promise<Carro>;
    findAll(): Promise<Carro[]>;
    findOne(id: number): Promise<Carro>;
    update(id: number, updateCarroDto: UpdateCarroDto): Promise<Carro>;
    patch(id: number, updateCarroDto: Partial<UpdateCarroDto>): Promise<Carro>;
    remove(id: number): Promise<{
        message: string;
    }>;
    updateImagePath(id: number, imagePath: string): Promise<Carro>;
}
