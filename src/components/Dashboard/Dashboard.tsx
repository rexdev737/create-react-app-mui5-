import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";


interface IFormInputs {
  firstName: string
  lastName: string
}

const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data);

export default function Dashboard() {
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>();
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField 
        {...register("firstName", { required: true })}
        error={errors.firstName ? true : false}
      />
      {errors.firstName && "First name is required"}
      <TextField {...register("lastName", { required: true })} />
      {errors.lastName && "Last name is required"}
      <Button type="submit" >
        Submit
      </Button>
    </form>
  );
}