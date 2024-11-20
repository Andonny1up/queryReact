import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Post } from "../types";
import axios from "axios";

export default function useDeletePost(){
  const queryClient = useQueryClient() 
  return useMutation({
    mutationFn: (post: Post) =>
      axios
      .delete<Post>(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      )
      .then(response => response.data),
    onMutate: (oldPost) =>{
      const oldPosts = queryClient.getQueryData<Post[]>(["posts"])
      queryClient.setQueryData<Post[]>(
        ["posts"],
        (posts = []) =>posts.filter(post=> post.id !== oldPost.id)
      );
      return oldPosts
    },
    onError: (_, __, ctx) =>{
      queryClient.setQueryData<Post[]>(["posts"], ctx)
    }
  })
}