

export type Todo ={
    userId:number,
    id:number,
    title:string,
    completed:boolean
}
export type FetchComponentType ={
    data?:Todo
}

export type ButtonProps = {
    name:string,
    ButtonClick: ()=>void
}

