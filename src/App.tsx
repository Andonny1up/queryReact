import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import { Post } from "./types";
import useCreatePost from "./hooks/useCreatePost";
import useDeletePost from "./hooks/useDeletePost";

function App() {
  const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
  const titleRef = useRef<HTMLInputElement>(null)
  const bodyRef = useRef<HTMLInputElement>(null)
  const {mutate: deleteMutate} = useDeletePost()
  const {mutate, isPending, error} = useCreatePost(()=>{
    if (titleRef.current?.value && bodyRef.current?.value){
      titleRef.current.value = "";
      bodyRef.current.value = ""
    }
  })
  const {data, isLoading} = useQuery({
    queryKey:["posts"],
    queryFn: () =>
      axios.get<Post[]>(url)
        .then((response)=>response.data)
  })
  return (
    <>
      <h2>Post</h2>
      <form onSubmit={e =>{
        e.preventDefault()
        if (titleRef.current?.value && bodyRef.current?.value){
          mutate({
            id: 0,
            body: bodyRef.current.value,
            title: titleRef.current.value ,
            userId: 1,
          })
        }
      }}>
        <div>
          <input ref={titleRef} type="text" placeholder="titulo"/>
        </div>
        <div>
          <input ref={bodyRef} type="text" placeholder="cuerpo"/>
        </div>
        <div>
          <button disabled={isPending}>
            {isPending ? 'Creando': 'Enviar'}
          </button>
          {error && <span>{error.message}</span>}
        </div>
      </form>
      {isLoading && <p>Cargando...</p>}
      <ul>
        {data?.map(post => (
          <li onClick={() => deleteMutate(post)} key={post.id}>
            {post.title}
            </li>
          ))}
      </ul>
    </>
  );
}

export default App
