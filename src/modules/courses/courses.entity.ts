import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Course extends Model<Course> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        
    })
    name: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.ENUM,
        values: ['male', 'female'],
        allowNull: false,
    })
    gender: string;
    
}
