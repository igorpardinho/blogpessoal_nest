import {
  Body,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { PostagemService } from '../services/postagem.service';
import { Postagem } from '../entities/postagem.entity';

export class PostagemController {
  constructor(private readonly postagemService: PostagemService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Postagem[]> {
    return this.postagemService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  save(@Body() postagem: Postagem): Promise<Postagem> {
    return this.postagemService.save(postagem);
  }

  @Get('/{id}')
  @HttpCode(HttpStatus.OK)
  findById(@Param() postagemId: number): Promise<Postagem | null> {
    return this.postagemService.findById(postagemId);
  }

  @Delete('/{id}')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(postagemId: number): Promise<void> {
    return this.postagemService.remove(postagemId);
  }
}
