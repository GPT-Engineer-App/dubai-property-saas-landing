import React from "react";
import { Box, Heading, Text, Flex, Button, Image, Stack, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaChartLine, FaLaptopCode, FaBuilding } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Flex minHeight="100vh" alignItems="center" backgroundImage="url('https://images.unsplash.com/photo-1612873649383-edf91f1cf7fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmV8ZW58MHx8fHwxNzEwODExNTgxfDA&ixlib=rb-4.0.3&q=80&w=1080')" backgroundSize="cover" backgroundPosition="center" px={8} py={24}>
        <Box maxWidth="2xl" color="white">
          <Heading as="h1" size="2xl" mb={4}>
            Revolutionize Property Management in Dubai
          </Heading>
          <Text fontSize="xl" mb={8}>
            Our cutting-edge SaaS solution empowers property managers and owners to streamline operations, boost efficiency, and maximize returns.
          </Text>
          <Button colorScheme="blue" size="lg">
            Get Started
          </Button>
        </Box>
      </Flex>

      {/* Features Section */}
      <Box px={8} py={16}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Key Features
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box textAlign="center">
            <Icon as={FaChartLine} boxSize={12} color="blue.500" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Analytics & Reporting
            </Heading>
            <Text>Gain valuable insights into your portfolio's performance with comprehensive analytics and reporting tools.</Text>
          </Box>
          <Box textAlign="center">
            <Icon as={FaLaptopCode} boxSize={12} color="blue.500" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Seamless Integration
            </Heading>
            <Text>Easily integrate with existing systems and tools for a smooth transition and enhanced functionality.</Text>
          </Box>
          <Box textAlign="center">
            <Icon as={FaBuilding} boxSize={12} color="blue.500" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Property Management
            </Heading>
            <Text>Efficiently manage your properties, tenants, and maintenance tasks from a single, user-friendly platform.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Testimonials Section */}
      <Box px={8} py={16} bg="gray.100">
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          What Our Clients Say
        </Heading>
        <Stack spacing={8} maxWidth="2xl" mx="auto">
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <Text fontSize="lg" mb={4}>
              "This SaaS solution has transformed the way we manage our properties in Dubai. The platform is intuitive, feature-rich, and has significantly improved our efficiency."
            </Text>
            <Text fontWeight="bold">- John Doe, Property Manager</Text>
          </Box>
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <Text fontSize="lg" mb={4}>
              "As a property owner, I appreciate the transparency and control this platform provides. I can easily monitor my investments and make informed decisions based on the data-driven insights."
            </Text>
            <Text fontWeight="bold">- Jane Smith, Property Owner</Text>
          </Box>
        </Stack>
      </Box>

      {/* CTA Section */}
      <Box px={8} py={16} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>
          Ready to Elevate Your Property Management?
        </Heading>
        <Text fontSize="xl" mb={8}>
          Join the leading property SaaS solution in Dubai today.
        </Text>
        <Button colorScheme="blue" size="lg">
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default Index;
