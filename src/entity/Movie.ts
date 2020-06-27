import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('movies')
class Movie extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    title: string;

    @Column('text')
    director: string;

    @Column('integer')
    year: number;

    @Column('integer')
    userId: number
};

export default Movie;