import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './entity/postagem.entity';
import { PostagemController } from './controller/postagem.controller';
import { PostagemService } from './services/postagem.service';

@Module({
  imports: [TypeOrmModule.forFeature([Postagem])],
  controllers: [PostagemController],
  providers: [PostagemService],
})
export class PostagemModule {}
