import React from "react";
import { useForm } from "react-hook-form";

export default function ChooseUserId() {
  const { register, handleSubmit, watch } = useForm({
    defaultValues : {'id':12}
  });
  const onSubmit = data => console.log(data);
  const id = watch("id")

  return (
    <div className="chooseUserData">
      <h1>Welcome to OpenClassRooms Project 11 SPA</h1>
      <p>Developp an Analytics Dashboard with React<br />
      By JSR029 (Jean-Sébastien Rakotonirina)<br />
      Dev ReactJS/Javascript</p>
        <form  method="GET" action={'/'+id}>
          <label>Choose an user Id</label>
          <select {...register("id", 12)} className="custom-select">
            <option value="12">User id twelve</option>
            <option value="18">User id eighteen</option>
          </select>
          <input type="submit" onSubmit={handleSubmit(onSubmit)}/>
        </form>
    </div>
  );
}