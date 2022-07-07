import React from "react";
import style from "../Dialogs/Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DataType} from "../App";

type DialogsType = {
  dialogs: DataType["dialogs"]
  messages: DataType["messages"]
}

export const Dialogs: React.FC<DialogsType> = (props) => {
  let dialogElement = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
  let messageElement = props.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

  return (
    <div className={style.dialogs}>
      <nav className={style.dialogs_list}>
        {dialogElement}
      </nav>
      <div>
        {messageElement}
      </div>
    </div>
  );
}
