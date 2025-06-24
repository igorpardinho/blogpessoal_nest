import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { PostagemService } from '../services/postagem.service';
import { Postagem } from '../entities/postagem.entity';
import { PostagemDtoRequest } from '../dto/postagem.dto.request';

@Controller('/postagens')
export class PostagemController {
  constructor(private readonly postagemService: PostagemService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Postagem[]> {
    return this.postagemService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  save(@Body() dto: PostagemDtoRequest): Promise<Postagem> {
    return this.postagemService.save(dto);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) postagemId: number): Promise<Postagem> {
    return this.postagemService.findById(postagemId);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) postagemId: number): Promise<void> {
    return this.postagemService.remove(postagemId);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) postagemId: number, @Body() dto: PostagemDtoRequest) {
    return this.postagemService.update(postagemId, dto);
  }

  @Get(':titulo')
  @HttpCode(HttpStatus.OK)
  findByTitle(@Param('titulo') titulo: string): Promise<Postagem[]> {
    return this.postagemService.findByTitle(titulo);
  }
}
