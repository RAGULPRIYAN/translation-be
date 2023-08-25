import { Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageController } from './language.controller';
import { languagetype, modtype } from './entities/language.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [LanguageController],
  providers: [LanguageService],
  imports: [TypeOrmModule.forFeature([languagetype, modtype])],
})
export class LanguageModule {}
