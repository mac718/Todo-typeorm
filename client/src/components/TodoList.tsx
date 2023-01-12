import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

interface Item {
  id: number;
  description: string;
  targetDate: string;
  complete: boolean;
}

interface TodoListProps {
  items: Item[];
}

const TodoList = ({ items }: TodoListProps) => {
  return (
    <table className={styles.list}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item: Item) => (
          <TodoItem
            id={item.id}
            description={item.description}
            targetDate={item.targetDate}
            complete={item.complete}
            key={item.id}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
