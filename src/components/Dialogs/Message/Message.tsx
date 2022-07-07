import React from "react";

type MessageItemPropsType = {
  message: string
  id: number
}

export const Message: React.FC <MessageItemPropsType> = (props) => {
  return (
    <p>{props.message}</p>
  )
}

