import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

// import { getUrlPath } from "../utils/get-url-path"
import {
  Menu,
  Box,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
} from "@chakra-ui/core"

const StyledLink = styled(Link)`
  color: #fff;
  display: inline-flex;
  user-select: none;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  line-height: 1.2;
  outline: none;
  height: 2.5rem;
  min-width: 2.5rem;
  font-size: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  align-items: center;
`
const StyledMenuButton = styled(MenuButton)`
  background: transparent;
  color: #fff;
  padding-left: 2rem;
  padding-right: 2rem;
`

const LittlBotMenu = () => {
  return (
    <Box bg="gray.800">
      <Menu>
        <StyledLink to="/">Home</StyledLink>
        <StyledMenuButton
          as={Button}
          rightIcon="chevron-down"
          fontWeight="normal"
        >
          Products
        </StyledMenuButton>
        <MenuList>
          <MenuItem>
            <Link to="/plugins/littlebot-invoices/">LittlBot Invoices</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/plugins/littlebot-ach-stripe-plaid/">
              LittleBot ACH for Stripe + Plaid
            </Link>
          </MenuItem>
        </MenuList>
        <StyledLink to="/about/">About</StyledLink>
        <StyledLink to="/contact/">Contact</StyledLink>
        <StyledLink to="/support/">Support</StyledLink>
        <StyledLink to="/make-a-donation/">Make a Donation</StyledLink>
      </Menu>
    </Box>
  )
}

export default LittlBotMenu
