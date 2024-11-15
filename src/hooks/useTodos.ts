import { useQuery } from "@tanstack/react-query";

type Todo = {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
};

const queryTodos = (userId: number | undefined): Promise<Todo[]> => {
    const url ="https://jsonplaceholder.typicode.com/todos?"
    const queryParams = userId ? new URLSearchParams({
        userId: String(userId),
    }) : "";

    return fetch(url + queryParams)
    .then((response) => {
    if (!response.ok) throw new Error(`Error ${response.status}`)
    return response.json()
    })
}

function useTodos(userId: number | undefined){
    return useQuery({
        //user / 2 / todos

        queryKey: userId ? ["users",userId,"todos"] : ["todos"],
        queryFn:  () => queryTodos(userId),
    })
}

export default useTodos;