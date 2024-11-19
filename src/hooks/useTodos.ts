import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

type Todo = {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
};

const queryTodos = (pageParam: number,pageSize: number): Promise<Todo[]> => {
    const url ="https://jsonplaceholder.typicode.com/todos"

    return axios
        .get(url, {params: {
            _start: (pageParam -1) * pageSize,
            _limit: pageSize,
        }})
        .then((response) => response.data);
}

function useTodos(pageSize: number){
    return useInfiniteQuery({
        queryKey: ["todos"],
        queryFn: ({pageParam}) => queryTodos(pageParam, pageSize),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) =>{
            return lastPage.length > 0 ? allPages.length + 1 : undefined
        }
    })
}

export default useTodos;