import {
  PrimaryColumn, Entity, Column, CreateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('files')
class File {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    size: number;

    @Column()
    key: string;

    @Column()
    url: string;

    @CreateDateColumn()
    created_at: Date

    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
}

export { File };
