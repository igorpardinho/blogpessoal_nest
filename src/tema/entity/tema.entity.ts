import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Postagem } from '../../postagem/entity/postagem.entity';

@Entity({ name: 'tb_temas' })
export class Tema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: false })
  descricao: string;

  @OneToMany(() => Postagem, (postagem) => postagem.tema)
  postagem: Postagem[];
}
