import "reflect-metadata";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./User.entity";

@Entity("Task")
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  targetDate: Date;

  @Column()
  complete: boolean;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;
}
