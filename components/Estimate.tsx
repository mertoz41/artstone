import React, { FormEvent, useRef, useState } from "react";
import { Textarea, Flex, Heading, Input, Button, Text } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { animated, useSpring } from "@react-spring/web";

type EstimateInput = {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  message: string;
};
function Estimate() {
  const [requestSent, setRequestSent] = useState<boolean>();
  const [error, setError] = useState<string>("");
  const form = useRef<any>();
  const [formAnimation, animateForm] = useSpring(() => ({
    from: { opacity: 1 },
    to: { opacity: 1 },
  }));
  const [messageAnimation, animate] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 0 },
  }));
  const {
    register,
    formState: { errors },
    watch,
  } = useForm<EstimateInput>();

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (
      form.current == null ||
      process.env.NEXT_PUBLIC_SERVICE_ID == null ||
      process.env.NEXT_PUBLIC_TEMPLATE_ID == null
    ) {
      return;
    }
    if (watch("fullName").length < 2) {
      return setError("Name required");
    }
    if (watch("email").length < 2) {
      return setError("Email required");
    }
    if (watch("phone").length < 10) {
      return setError("Phone required");
    }
    if (watch("location").length < 5) {
      return setError("Location required");
    }
    if (watch("message").length < 10) {
      return setError("Message required");
    }
    setError("");
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    );
    animateForm.start({
      from: { opacity: 1 },
      to: { opacity: 0 },
    });
    setTimeout(() => {
      setRequestSent(true);
    }, 300);
    setTimeout(() => {
      animate.start({
        from: { opacity: 0 },
        to: { opacity: 1 },
      });
    }, 500);
  };

  const renderEstimateRequestedUI = () => {
    return (
      <animated.div style={messageAnimation}>
        <Flex direction={"column"}>
          <Heading
            textAlign={"center"}
            fontSize={30}
            fontWeight={"300"}
            mb={10}
          >
            We have received your request for an estimate.
          </Heading>
          <Heading
            textAlign={"center"}
            fontSize={30}
            fontWeight={"300"}
            mb={10}
          >
            We will be in contact with you soon.
          </Heading>
        </Flex>
      </animated.div>
    );
  };

  return (
    <Flex direction={"column"} justify={"center"} marginY={5} minH={460}>
      {requestSent ? (
        renderEstimateRequestedUI()
      ) : (
        <Flex
          direction={"column"}
          alignSelf={"center"}
          borderRadius={"20"}
          w={{ base: "100&", xl: "70%" }}
          padding={{ base: 2, xl: 10 }}
        >
          <animated.div style={formAnimation}>
            <Heading textAlign={"center"} fontSize={33} fontWeight={"300"}>
              Schedule your free estimate today.
            </Heading>
            <Flex h={10}>
              <Text color={"red"} alignSelf={"center"}>
                {error}
              </Text>
            </Flex>
            <form ref={form} onSubmit={sendEmail}>
              <Flex justify={"space-between"}>
                <Input
                  {...register("fullName")}
                  p={5}
                  placeholder="Full name"
                />

                <Input
                  {...register("phone")}
                  p={5}
                  marginLeft={5}
                  marginBottom={5}
                  placeholder="Phone"
                />
              </Flex>
              <Flex justify={"space-between"}>
                <Input {...register("email")} type="email" p={5} placeholder="Email" />

                <Input
                  {...register("location")}
                  p={5}
                  marginLeft={5}
                  marginBottom={5}
                  placeholder="Location"
                />
              </Flex>
              <Textarea
                {...register("message")}
                p={5}
                mb={10}
                placeholder="Message"
                size="lg"
              />
              <Flex>
                <Button type="submit" m="0 auto" alignSelf={"center"}>
                  Get Free Estimate
                </Button>
              </Flex>
            </form>
          </animated.div>
        </Flex>
      )}
    </Flex>
  );
}

export default Estimate;
