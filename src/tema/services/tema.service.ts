import { TemaDtoRequest } from './../dtos/tema.dto.request';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ILike, Repository } from 'typeorm';
import { Tema } from '../entity/tema.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TemaService {
  constructor(
    @InjectRepository(Tema)
    private readonly temaRepository: Repository<Tema>,
  ) {}

  async findAll(): Promise<Tema[]> {
    return this.temaRepository.find({
      relations: {
        postagem: true,
      },
    });
  }

  async save(dto: TemaDtoRequest): Promise<Tema> {
    const { descricao } = dto;

    const novoTema = this.temaRepository.create({
      descricao,
    });

    return await this.temaRepository.save(novoTema);
  }

  async findById(temaId: number): Promise<Tema> {
    const tema = await this.temaRepository.findOne({ where: { id: temaId } });

    if (!tema) {
      throw new NotFoundException('tema não encontrado');
    }
    return tema;
  }

  async update(temaId: number, dto: TemaDtoRequest): Promise<Tema> {
    const tema = await this.findById(temaId);

    if (!tema) {
      throw new NotFoundException('tema não encontrado');
    }
    tema.descricao = dto.descricao;
    return await this.temaRepository.save(tema);
  }

  async remove(temaId: number): Promise<void> {
    const tema = await this.findById(temaId);

    if (!tema) {
      throw new NotFoundException('tema não encontrado');
    }
    await this.temaRepository.delete(temaId);
  }

  async findByDescricao(descricao: string): Promise<Tema[]> {
    return await this.temaRepository.find({
      where: {
        descricao: ILike(`%${descricao}%`),
      },
    });
  }
}
