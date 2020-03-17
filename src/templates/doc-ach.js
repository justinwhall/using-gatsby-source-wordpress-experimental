import React from "react"
import Doc from "./doc"

const DocACH = props => (
  <Doc plugin="ach" {...props}>
    {props.children}
  </Doc>
)

export default DocACH
