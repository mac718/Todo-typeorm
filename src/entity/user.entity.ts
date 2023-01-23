import "reflect-metadata";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Task } from "./Task.entity";

@Entity("User", { name: "UserSchema" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  token: string;

  @OneToMany(() => Task, (task) => task.user, { onDelete: "CASCADE" })
  tasks: Task[];
}
