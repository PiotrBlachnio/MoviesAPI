import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('users')
class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column('text')
    name: string;

    @Column('text')
    email: string;

    @Column('int', { default: 0 })
    createdMovies: number;

    @Column('bigint', { default: Date.now() })
    joinedDate: number
};

export default User;