export declare class Articulo {
    id: number;
    titulo: string;
    resumen: string;
    categoria: string;
    idioma: string;
    tema_principal: string;
    estado_publicacion: 'borrador' | 'publicado' | 'revision';
    ruta_archivo_texto: string;
    fecha_creacion: Date;
    fecha_actualizacion: Date;
}
