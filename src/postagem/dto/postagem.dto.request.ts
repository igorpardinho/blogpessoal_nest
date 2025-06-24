import { IsNotEmpty } from 'class-validator';

export class PostagemDtoRequest {
  @IsNotEmpty()
  titulo: string;
  @IsNotEmpty()
  texto: string;
}
