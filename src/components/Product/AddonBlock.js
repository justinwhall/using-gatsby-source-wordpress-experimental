import React from "react"
import { SimpleGrid, Heading, Box, Button } from "@chakra-ui/core"
import Container from "../container"

const AddonBlock = props => {
  return (
    <Box p={10} fontSize={27} fontWeight="light">
      <Container>
        <Heading as="h2" textAlign="center" mb={6} color="pink.700">
          Addons
        </Heading>
        <SimpleGrid columns={[1, null, 2]} spacing="40px">
          <Box>
            <img
              alt="product"
              src="https://i0.wp.com/littlebot.io/wp-content/uploads/2019/01/0.png?fit=673%2C760&ssl=1"
            />
            <Heading
              mt={4}
              fontSize={30}
              color="cyan.600"
              fontWeight="normal"
              as="h3"
            >
              Stripe Payment Gateway
            </Heading>
            <Box fontSize={21}>Let clients pay your invoices with Stripe.</Box>
            <SimpleGrid columns={2} spacing={5}>
              <Button
                as="a"
                href="https://checkout.freemius.com/mode/dialog/plugin/3126/plan/4959/?trial=paid"
                target="_blank"
                variantColor="pink"
                size="lg"
                mt={5}
              >
                Try For Free
              </Button>
              <Button
                as="a"
                href="https://checkout.freemius.com/mode/dialog/plugin/3126/plan/4959/"
                target="_blank"
                variantColor="pink"
                size="lg"
                mt={5}
              >
                Buy Now
              </Button>
            </SimpleGrid>
          </Box>
          <Box>
            <img alt="product" src="/stripe-ach.png" />
            <Heading
              mt={4}
              fontSize={28}
              color="cyan.600"
              fontWeight="normal"
              as="h3"
            >
              ACH Payment Gateway
            </Heading>
            <Box fontSize={21}>
              Let clients pay bank transfer & save on fees (Stripe + Plaid).
            </Box>
            <SimpleGrid columns={2} spacing={5}>
              <Button
                as="a"
                href="https://checkout.freemius.com/mode/dialog/plugin/5711/plan/9347/?trial=paid"
                target="_blank"
                variantColor="pink"
                size="lg"
                mt={5}
              >
                Try For Free
              </Button>
              <Button
                as="a"
                href="https://checkout.freemius.com/mode/dialog/plugin/5711/plan/9347/"
                target="_blank"
                variantColor="pink"
                size="lg"
                mt={5}
              >
                Buy Now
              </Button>
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default AddonBlock
