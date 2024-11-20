import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Post } from "../types";
import axios from "axios";

export default function useCreatePost(onCreate: () => void){
  const queryClient = useQueryClient() 
  return useMutation({
    mutationFn: (post: Post) =>
      axios
      .post<Post>(
        "https://jsonplaceholder.typicode.com/posts",
        post
      )
      .then(response => response.data),
    onMutate: (newPost) =>{
      const oldPosts = queryClient.getQueryData<Post[]>(["posts"])
      queryClient.setQueryData<Post[]>(
        ["posts"],
        (post = []) =>[newPost, ...post]
      );
      onCreate()
      return oldPosts
    },
    onSuccess: (savedPost, newPost) =>{
      queryClient.setQueryData<Post[]>(
        ["posts"],
        (posts = []) => posts?.map((post)=> {
          return post.id === newPost.id ? savedPost: post
        })
      )
    },
    onError: (error, newPost, ctx) =>{
      queryClient.setQueryData<Post[]>(["posts"], ctx)
    }
  })
}