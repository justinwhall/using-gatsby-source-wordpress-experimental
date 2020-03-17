import React, { useState } from "react"
import { Box } from "@chakra-ui/core"
import styled from "@emotion/styled"
import {
  FormControl,
  FormLabel,
  // FormErrorMessage,
  // FormHelperText,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/core"

const StyledFormControl = styled(FormControl)`
  margin-bottom: 30px;

  label {
    font-size: ${props => props.theme.sizes[6]};
    font-weight: ${props => props.theme.fontWeights.light};
  }
`

const SupportForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    const url = "https://getform.io/f/3334a1dd-d9fc-46f2-87cf-0395f8732acf"

    setServerState({ submitting: true })

    fetch(url, {
      method: "post",
      body: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }

  return (
    <Box as="form" mt={20} onSubmit={handleOnSubmit}>
      <StyledFormControl>
        <FormLabel for="exampleInputEmail1" required="required">
          Email address
        </FormLabel>
        <Input
          type="email"
          name="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          required="required"
        />
      </StyledFormControl>
      <StyledFormControl>
        <FormLabel for="exampleInputName">Name</FormLabel>
        <Input
          type="text"
          name="name"
          className="form-control"
          id="exampleInputName"
          placeholder="Enter your name"
          required="required"
        />
      </StyledFormControl>
      <StyledFormControl>
        <FormLabel for="exampleFormControlSelect1">Plugin</FormLabel>
        <select
          className="form-control"
          id="exampleFormControlSelect1"
          name="plugin"
          required="required"
        >
          <option>LittleBot Invoices</option>
          <option>LittleBot ACH for Stripe Plaid</option>
        </select>
      </StyledFormControl>
      <StyledFormControl>
        <FormLabel for="supportTitle">
          Describe your question in 5 words or less
        </FormLabel>
        <Input
          type="text"
          name="supportTitle"
          className="form-control"
          id="supportTitle"
          placeholder=""
          required="required"
        />
      </StyledFormControl>
      <StyledFormControl>
        <FormLabel for="formMessage">Extended description</FormLabel>
        <Textarea
          className="form-control"
          id="formMessage"
          name="message"
          required="required"
        ></Textarea>
      </StyledFormControl>
      <Button
        type="submit"
        disabled={serverState.submitting}
        variantColor="pink"
        size="lg"
      >
        Submit Support Request
      </Button>
      {serverState.status && (
        <p className={!serverState.status.ok ? "errorMsg" : ""}>
          {serverState.status.msg}
        </p>
      )}
    </Box>
  )
}

export default SupportForm
