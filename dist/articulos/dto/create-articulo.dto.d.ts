export declare class CreateArticuloDto {
    titulo: string;
    resumen: string;
    categoria: string;
    idioma: string;
    tema_principal: string;
    estado_publicacion?: 'borrador' | 'publicado' | 'revision';
    ruta_archivo_texto?: string;
}
