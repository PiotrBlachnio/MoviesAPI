import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, BeforeInsert } from 'typeorm';

@Entity('movies')
class Movie extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column('text')
    title: string;

    @Column('text')
    director: string;

    @Column('integer')
    year: number;

    @Column('integer')
    userId: number

    @Column('bigint', { nullable: true })
    createdDate: number

    @BeforeInsert()
    setCreatedDate() {
        this.createdDate = Date.now();
    };
};

export default Movie;