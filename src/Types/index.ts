import { FieldInputProps } from "formik";
export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
export type FetchComponentType = {
  data?: Todo;
};

export type ButtonProps = {
  name: string;
  ButtonClick: () => void;
};
export interface FeildLabelsProps {
  [key: string]: string; // You have to define what kind of index type the object has
  firstName: string;
  email: string;
  lastName: string;
}
export interface TextInputProps extends FieldInputProps<string> {
  label: string;
  onValueChange: (value: string) => void;
  type: string;
  id?: string; //added optional type for id and placeholder
  placeholder?: string;
}
