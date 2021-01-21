import {Entity, Column, PrimaryGeneratedColumn, Index} from 'typeorm';

@Entity()
export class Encoder {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text'})
    url: string;

    @Column({type: 'varchar'})
    @Index({ unique: true })
    unique_id: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
