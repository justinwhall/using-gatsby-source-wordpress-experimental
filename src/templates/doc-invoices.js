import React from "react"
import Doc from "./doc"
// import { Grid, Button, Box } from "@chakra-ui/core"

const DocInvoices = props => (
  <Doc plugin="invoices" {...props}>
    {props.children}
  </Doc>
)

export default DocInvoices
