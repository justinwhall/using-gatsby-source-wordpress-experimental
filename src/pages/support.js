import React, { useState } from "react"
import { Heading, Box } from "@chakra-ui/core"
import Layout from "../components/layout"

const MyForm = () => {
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
    <Layout>
      <div>
        <div className="col-md-8 mt-5">
          <h3>Getform.io Gatsby Form</h3>
          <form onSubmit={handleOnSubmit}>
            <div className="form-group">
              <label for="exampleInputEmail1" required="required">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputName">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="exampleInputName"
                placeholder="Enter your name"
                required="required"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlSelect1">Plugin</label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                name="plugin"
                required="required"
              >
                <option>LittleBot Invoices</option>
                <option>LittleBot ACH for Stripe Plaid</option>
              </select>
            </div>
            <div className="form-group">
              <label for="supportTitle">
                Describe your question in 5 words or less
              </label>
              <input
                type="text"
                name="supportTitle"
                className="form-control"
                id="supportTitle"
                placeholder=""
                required="required"
              />
            </div>
            <div className="form-group">
              <label for="formMessage">Extended description</label>
              <textarea
                className="form-control"
                id="formMessage"
                name="message"
                required="required"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={serverState.submitting}
            >
              Submit
            </button>
            {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default MyForm
