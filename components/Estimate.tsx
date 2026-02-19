import React, { useRef, useState } from "react";
import { Textarea, Flex, Heading, Input, Button, Text, Box } from "@chakra-ui/react";
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
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EstimateInput>();

  const sendEmail = () => {
    if (
      form.current == null ||
      process.env.NEXT_PUBLIC_SERVICE_ID == null ||
      process.env.NEXT_PUBLIC_TEMPLATE_ID == null
    ) {
      return;
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
          w={{ base: "100&", xl: "50%" }}
          padding={{ base: 2, xl: 10 }}
        >
          <animated.div style={formAnimation}>
            <Heading textAlign={"center"} fontSize={33} marginBottom={5} fontWeight={"300"}>
              Schedule your free estimate today.
            </Heading>
            <form ref={form} onSubmit={handleSubmit(sendEmail)}>
              <Flex justify={"space-between"} gap={5} flexWrap="wrap">
                <Box flex={1} minW={{ base: "100%", md: "200px" }}>
                  <Input
                    {...register("fullName", {
                      required: "Name required",
                      minLength: { value: 2, message: "Name required" },
                    })}
                    p={5}
                    placeholder="Full name"
                    borderColor={errors.fullName ? "red" : undefined}
                    borderWidth={errors.fullName ? "2px" : undefined}
                  />
                  <Box minH={8} mt={1}>
                    {errors.fullName && (
                      <Text color="red" fontSize="sm">
                        {errors.fullName.message}
                      </Text>
                    )}
                  </Box>
                </Box>
                <Box flex={1} minW={{ base: "100%", md: "200px" }}>
                  <Input
                    {...register("phone", {
                      required: "Phone required",
                      minLength: { value: 10, message: "Phone required" },
                      pattern: { value: /^\d+$/, message: "Numbers only" },
                    })}
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    p={5}
                    placeholder="Phone"
                    borderColor={errors.phone ? "red" : undefined}
                    borderWidth={errors.phone ? "2px" : undefined}
                    onInput={(e) => {
                      const v = e.currentTarget.value.replace(/\D/g, "");
                      e.currentTarget.value = v;
                      setValue("phone", v, { shouldValidate: true });
                    }}
                  />
                  <Box minH={8} mt={1}>
                    {errors.phone && (
                      <Text color="red" fontSize="sm">
                        {errors.phone.message}
                      </Text>
                    )}
                  </Box>
                </Box>
              </Flex>
              <Flex justify={"space-between"} gap={5} flexWrap="wrap" mt={5}>
                <Box flex={1} minW={{ base: "100%", md: "200px" }}>
                  <Input
                    {...register("email")}
                    type="email"
                    p={5}
                    placeholder="Email"
                    borderColor={errors.email ? "red" : undefined}
                    borderWidth={errors.email ? "2px" : undefined}
                  />
                  <Box minH={8} mt={1}>
                    {errors.email && (
                      <Text color="red" fontSize="sm">
                        {errors.email.message}
                      </Text>
                    )}
                  </Box>
                </Box>
                <Box flex={1} minW={{ base: "100%", md: "200px" }}>
                  <Input
                    {...register("location", {
                      required: "Location required",
                      minLength: { value: 5, message: "Location required" },
                    })}
                    p={5}
                    placeholder="Location"
                    borderColor={errors.location ? "red" : undefined}
                    borderWidth={errors.location ? "2px" : undefined}
                  />
                  <Box minH={8} mt={1}>
                    {errors.location && (
                      <Text color="red" fontSize="sm">
                        {errors.location.message}
                      </Text>
                    )}
                  </Box>
                </Box>
              </Flex>
              <Box mt={5} mb={10}>
                <Textarea
                  {...register("message")}
                  p={5}
                  placeholder="Message"
                  size="lg"
                  borderColor={errors.message ? "red" : undefined}
                  borderWidth={errors.message ? "2px" : undefined}
                />
                <Box minH={8} mt={1}>
                  {errors.message && (
                    <Text color="red" fontSize="sm">
                      {errors.message.message}
                    </Text>
                  )}
                </Box>
              </Box>
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
