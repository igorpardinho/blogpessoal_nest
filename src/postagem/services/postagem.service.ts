import { Injectable, NotFoundException } from '@nestjs/common';
import { ILike, Repository } from 'typeorm';
import { Postagem } from '../entities/postagem.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PostagemDtoRequest } from '../dto/postagem.dto.request';

@Injectable()
export class PostagemService {
  constructor(
    @InjectRepository(Postagem)
    private postagemRepository: Repository<Postagem>,
  ) {}

  async findAll(): Promise<Postagem[]> {
    return await this.postagemRepository.find();
  }

  async save(dto: PostagemDtoRequest): Promise<Postagem> {
    const { titulo, texto } = dto;

    const novaPostagem = this.postagemRepository.create({
      titulo,
      texto,
    });

    return await this.postagemRepository.save(novaPostagem);
  }

  async findById(postagemId: number): Promise<Postagem> {
    const postagem = await this.postagemRepository.findOne({
      where: { id: postagemId },
    });
    if (!postagem) {
      throw new NotFoundException('Postagem não encontrada');
    }
    return postagem;
  }

  async remove(postagemId: number): Promise<void> {
    const postagem = await this.findById(postagemId);
    if (!postagem) {
      throw new NotFoundException('Postagem não encontrada');
    }
    await this.postagemRepository.delete(postagemId);
  }

  async update(postagemId: number, dto: PostagemDtoRequest): Promise<Postagem> {
    const postagem = await this.findById(postagemId);
    if (!postagem) {
      throw new NotFoundException('Postagem não encontrada');
    }
    postagem.titulo = dto.titulo;
    postagem.texto = dto.texto;
    return postagem;
  }

  async findByTitle(titulo: string): Promise<Postagem[]> {
    return await this.postagemRepository.find({
      where: {
        titulo: ILike(`%${titulo}%`),
      },
    });
  }
}
