"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const language_entity_1 = require("./entities/language.entity");
const typeorm_2 = require("typeorm");
let LanguageService = exports.LanguageService = class LanguageService {
    constructor(languageRepository, modRepository) {
        this.languageRepository = languageRepository;
        this.modRepository = modRepository;
    }
    create(createLanguageDto) {
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
            .innerJoin(language_entity_1.modtype, 'mt', 'languagetype.moduleId = mt.id')
            .getRawMany();
    }
    async findOne(id) {
        return await this.languageRepository
            .createQueryBuilder('languagetype')
            .select('mt.module', 'module')
            .addSelect('JSON_ARRAYAGG(languagetype.key) ', 'keys')
            .addSelect('JSON_ARRAYAGG(languagetype.tamilLang) ', 'tamilLang')
            .addSelect('JSON_ARRAYAGG(languagetype.englishLang) ', 'englishLang')
            .addSelect('JSON_ARRAYAGG(languagetype.hindiLang) ', 'hindiLang')
            .innerJoin(language_entity_1.modtype, 'mt', 'languagetype.moduleId = mt.id')
            .where('languagetype.moduleId = :moduleId', { moduleId: id })
            .groupBy('mt.module')
            .getRawOne();
    }
    update(id, updateLanguageDto) {
        return `This action updates a #${id} language`;
    }
    remove(id) {
        return `This action removes a #${id} language`;
    }
};
exports.LanguageService = LanguageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(language_entity_1.languagetype)),
    __param(1, (0, typeorm_1.InjectRepository)(language_entity_1.modtype)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], LanguageService);
//# sourceMappingURL=language.service.js.map