import type { Todo } from "@prisma/client";
import { TodoItem } from "@/components/todos";

import { toggleTodo } from "@/actions/todoActions";
// Con REST
/*import { updateTodo } from "@/services/todos";
import { useRouter } from "next/navigation";*/

interface Props {
  todos?: Todo[]
}

export const TodosGrid = ({ todos = [] }: Props) => {
  // Con REST
  //const router = useRouter();
  /*const toggleTodo = async (id: string, complete: boolean) => {
    const todoUpdated = await updateTodo(id, complete);

    // Refresh de la página muy especial, refesca solo partes de la página que cambiaron
    // y además conserva el estado
    router.refresh(); 

    return todoUpdated;
  };*/
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
        ))
      }
    </div>
  );
};