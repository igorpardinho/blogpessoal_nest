import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Tema } from '../../tema/entity/tema.entity';
import { Usuario } from '../../usuario/entity/usuario.entity';

@Entity({ name: 'tb_postagens' })
export class Postagem {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ length: 1000, nullable: false })
  public titulo: string;

  @Column({ length: 1000, nullable: false })
  texto: string;

  @UpdateDateColumn()
  data: Date;

  @ManyToOne(() => Tema, (tema) => tema.postagem, {
    onDelete: 'CASCADE',
  })
  tema: Tema;

  @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;
}
