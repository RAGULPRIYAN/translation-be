import { Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { languagetype, modtype } from './entities/language.entity';
import { Repository } from 'typeorm';
import { groupBy } from 'rxjs';

@Injectable()
export class LanguageService {
  constructor(
    @InjectRepository(languagetype)
    private languageRepository: Repository<languagetype>,
    @InjectRepository(modtype)
    private modRepository: Repository<modtype>,
  ) {}
  // constructor(@InjectRepository(languagetype) private languageRepository:Repository<languagetype>,
  // @InjectRepository(modtype) private languageRepository:Repository<modtype>){}
  // constructor(@InjectRepository(language) private la:Repository<Employee>)
  create(createLanguageDto: CreateLanguageDto) {
    return 'This action adds a new language';
  }

  async findAll() {
    return await this.languageRepository
      .createQueryBuilder('languagetype')
      .select('mt.module', 'module')
      .addSelect('languagetype.key ', 'keys')
      .addSelect('languagetype.tamilLang ', 'tamilLang')
      .addSelect('languagetype.englishLang ', 'englishLang')
      .addSelect('languagetype.hindiLang ', 'hindiLang')
      .innerJoin(modtype, 'mt', 'languagetype.moduleId = mt.id')
      .getRawMany();
  }


  async findOne(id: number) {
    return await this.languageRepository
      .createQueryBuilder('languagetype')
      .select('mt.module', 'module')
      .addSelect('JSON_ARRAYAGG(languagetype.key) ', 'keys')
      .addSelect('JSON_ARRAYAGG(languagetype.tamilLang) ', 'tamilLang')
      .addSelect('JSON_ARRAYAGG(languagetype.englishLang) ', 'englishLang')
      .addSelect('JSON_ARRAYAGG(languagetype.hindiLang) ', 'hindiLang')
      .innerJoin(modtype, 'mt', 'languagetype.moduleId = mt.id')
      .where('languagetype.moduleId = :moduleId', { moduleId: id })
      .groupBy('mt.module')

      .getRawOne();
  }

  update(id: number, updateLanguageDto: UpdateLanguageDto) {
    return `This action updates a #${id} language`;
  }

  remove(id: number) {
    return `This action removes a #${id} language`;
  }
}
