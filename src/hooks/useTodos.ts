import { useQuery, keepPreviousData } from "@tanstack/react-query";
import axios from "axios";

type Todo = {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
};
type TodoQuery = {
    page: number;
    pageSize: number;
}

const queryTodos = (query: TodoQuery): Promise<Todo[]> => {
    const url ="https://jsonplaceholder.typicode.com/todos"

    return axios
        .get(url, {params: {
            _start: (query.page -1) * query.pageSize,
            _limit: query.pageSize,
        }})
        .then((response) => response.data);
}

function useTodos(query: TodoQuery){
    return useQuery({
        queryKey: ["todos", query],
        queryFn:  () => queryTodos(query),
        placeholderData: keepPreviousData,
    })
}

export default useTodos;