import style from "../Dialogs/Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsItemPropsType={
  name: string
  id: string
}

const DialogsItem = (props: DialogsItemPropsType) => {
  return (
    <NavLink className={style.dialog} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
  )
}

export const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <nav className={style.dialogs_list}>
        <DialogsItem name="Yury" id="5"/>

      </nav>
      <ul>
        <li>Hello</li>
        <li>How are you?</li>
        <li>I'm fine</li>
      </ul>
    </div>
  );
}
