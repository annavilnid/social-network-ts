import style from "../../Dialogs/Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogsItemPropsType = {
  name: string
  id: number
}

export const DialogItem: React.FC <DialogsItemPropsType> = (props) => {
  return (
    <NavLink className={style.dialog} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
  )
}

