import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, AfterInsert } from 'typeorm';
import User from './User';
import { connection } from '../utils/connect-database';

@Entity('movies')
class Movie extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    title: string;

    @Column('text')
    director: string;

    @Column('integer')
    year: number;

    @Column('text')
    userId: string

    @Column('bigint', { default: Date.now() })
    createdDate: number

    @AfterInsert()
    async updateUser() {
        await connection.getRepository(User).increment({ id: this.userId }, 'createdMovies', 1);
    };
};

export default Movie;