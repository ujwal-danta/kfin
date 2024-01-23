import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {  FetchComponentType } from "../Types";
import React from "react";

const FetchComponent:React.FC<FetchComponentType> = () => {
  

  
  const getTodos = () => {
    return axios.get("https://jsonplaceholder.typicode.com/todos/1");
  };
  const { data }= useQuery({ queryKey: ["todos"], queryFn: getTodos });


  
 
  return (
    <div>
    <p>{data?.data.title}</p>
    <p>{data?.data.completed+""}</p>
    
    </div>
  );
};

export default FetchComponent;
