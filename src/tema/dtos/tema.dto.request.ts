import { IsNotEmpty } from 'class-validator';

export class TemaDtoRequest {
  @IsNotEmpty()
  descricao: string;
}
