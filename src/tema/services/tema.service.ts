import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tema } from '../entities/tema.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TemaService {
  constructor(
    @InjectRepository(Tema)
    private readonly temaRepository: Repository<Tema>,
  ) {}
}
