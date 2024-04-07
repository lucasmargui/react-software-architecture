// Import React and necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Define Atomic Components

// Atoms
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, ...rest }) => (
  <button onClick={onClick} {...rest}>{children}</button>
);

// Molecules
interface TodoItemProps {
  text: string;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, onDelete }) => (
  <div>
    <span>{text}</span>
    <Button onClick={onDelete}>Delete</Button>
  </div>
);

// Organisms
class TodoList extends React.Component {
  state = {
    todos: [],
    newTodo: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newTodo: event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { todos, newTodo } = this.state;
    const updatedTodos = [...todos, { id: Date.now(), text: newTodo }];
    this.setState({ todos: updatedTodos, newTodo: '' });
  };

  handleDelete = (id: number) => {
    const updatedTodos = this.state.todos.filter((todo: { id: number }) => todo.id !== id);
    this.setState({ todos: updatedTodos });
  };

  render() {
    const { todos, newTodo } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={newTodo} onChange={this.handleChange} />
          <Button type="submit">Add</Button>
        </form>
        <div>
          {todos.map((todo: { id: number; text: string }) => (
            <TodoItem key={todo.id} text={todo.text} onDelete={() => this.handleDelete(todo.id)} />
          ))}
        </div>
      </div>
    );
  }
}

// Templates
const App: React.FC = () => (
  <div>
    <h1>Todo List</h1>
    <TodoList />
  </div>
);


export default App 

