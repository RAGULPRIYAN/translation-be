import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { languagetype, modtype } from './entities/language.entity';
import { Repository } from 'typeorm';
export declare class LanguageService {
    private languageRepository;
    private modRepository;
    constructor(languageRepository: Repository<languagetype>, modRepository: Repository<modtype>);
    create(createLanguageDto: CreateLanguageDto): string;
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<any>;
    update(id: number, updateLanguageDto: UpdateLanguageDto): string;
    remove(id: number): string;
}
