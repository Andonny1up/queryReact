import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
}

function App() {
  const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
  const {data, isLoading} = useQuery({
    queryKey:["post"],
    queryFn: () =>
      axios.get<Post[]>(url)
        .then((response)=>response.data)
  })
  return (
    <>
      <h2>Post</h2>
      <form>
        <div>
          <input type="text" />
        </div>
        <div>
          <button>Enviar</button>
        </div>
      </form>
      {isLoading && <p>Cargando...</p>}
      <ul>
        {data?.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </>
  );
}

export default App
