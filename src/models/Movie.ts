import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, AfterInsert } from 'typeorm';
import User from './User';
import { connection } from '../utils/connect-database';
import { MinLength, IsString, IsInt, Max, Min } from 'class-validator';

@Entity('movies')
class Movie extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    @MinLength(3, {
        message: 'Title is to short. Minimal length is $constraint1 characters, but actual is shorter: $value'
    })
    @IsString({
        message: 'Title should be a string'
    })
    title: string;

    @Column('text')
    @MinLength(3, {
        message: 'Title is to short. Minimal length is $constraint1 characters, but actual is shorter: $value'
    })
    @IsString({
        message: 'Director should be a string'
    })
    director: string;

    @Column('integer')
    @Max(2025, {
        message: 'Year has incorrect form'
    })
    @Min(1850, {
        message: 'Year has incorrect form'
    })
    @IsInt({
        message: 'Year should be an integer'
    })
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