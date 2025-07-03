import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tema } from './entity/tema.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tema])],
  providers: [],
  controllers: [],
})
export class TemaModule {}
