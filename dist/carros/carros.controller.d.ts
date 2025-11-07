import { CarrosService } from './carros.service';
import { CreateCarroDto } from './dto/create-carro.dto';
import { UpdateCarroDto } from './dto/update-carro.dto';
export declare class CarrosController {
    private readonly carrosService;
    constructor(carrosService: CarrosService);
    create(createCarroDto: CreateCarroDto): Promise<import("./entities/carro.entity").Carro>;
    uploadImage(id: number, file: Express.Multer.File): Promise<import("./entities/carro.entity").Carro>;
    findAll(): Promise<import("./entities/carro.entity").Carro[]>;
    findOne(id: number): Promise<import("./entities/carro.entity").Carro>;
    update(id: number, updateCarroDto: UpdateCarroDto): Promise<import("./entities/carro.entity").Carro>;
    patch(id: number, updateCarroDto: UpdateCarroDto): Promise<import("./entities/carro.entity").Carro>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
