"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCarroDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_carro_dto_1 = require("./create-carro.dto");
class UpdateCarroDto extends (0, mapped_types_1.PartialType)(create_carro_dto_1.CreateCarroDto) {
}
exports.UpdateCarroDto = UpdateCarroDto;
//# sourceMappingURL=update-carro.dto.js.map