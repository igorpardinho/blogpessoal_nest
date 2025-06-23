import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Postagem } from '../entities/postagem.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostagemService {
  constructor(
    @InjectRepository(Postagem)
    private postagemRepository: Repository<Postagem>,
  ) {}

  async findAll(): Promise<Postagem[]> {
    return await this.postagemRepository.find();
  }

  async save(postagem: Postagem): Promise<Postagem> {
    return await this.postagemRepository.save(postagem);
  }

  async findById(postagemId: number): Promise<Postagem | null> {
    return await this.postagemRepository.findOne({ where: { id: postagemId } });
  }

  async remove(postagemId: number): Promise<void> {
    const postagem = await this.findById(postagemId);
    if (postagem) {
      await this.postagemRepository.delete(postagemId);
    }
  }
}
