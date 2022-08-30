import todoLogo from "../../assets/todoLogo.svg";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  onAddTasks: (taskTitle: string) => void;
}

export function Header({ onAddTasks }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onAddTasks(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logo" />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="Adicione uma nova tarefa"
          onChange={onChangeTitle}
        />
        <button>
          Criar <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
