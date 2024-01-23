import { useJsonPlaceholderData } from "../hooks/useJsonPlaceholderData";


const FetchComponent = () => {
  const { isLoading,isError,error,data }= useJsonPlaceholderData();
  if(isLoading)
  return <h1>Loading....</h1>
  else if(isError)
  return <h3>{error.message}</h3>
  {console.log(data)}
  return (
    <>
    <div> userId - {data?.data.userId}</div>
    <div> Id - {data?.data.id}</div>
    <div> Title - {data?.data.title}</div>
    <div> completed - {data?.data.completed + ""}</div>
    </>
  )
};

export default FetchComponent;
