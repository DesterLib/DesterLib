import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

export interface TimeLineProps {
  data: any;
}

function TimeLine({ data }: TimeLineProps) {
  return (
    <Accordion p={2} maxWidth={500} allowToggle>
      {data &&
        data.slice(0, 5).map((item: any) => (
          <AccordionItem>
            <Box sx={{ display: 'flex' }} key={item.sha}>
              <Box
                sx={{
                  width: 'fit-content',
                  minHeight: '100%',
                  position: 'relative',
                  marginRight: '20px',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '2px',
                    height: '100%',
                    backgroundColor: 'blue.100',
                  }}
                ></Box>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '15px',
                    height: '15px',
                    backgroundColor: 'blue.300',
                    border: '2px solid',
                    borderColor: 'blue.100',
                    borderRadius: '100%',
                  }}
                />
              </Box>
              <Box
                p={3}
                m={1}
                borderRadius="md"
                sx={{
                  bg: 'gray.50',
                  _dark: { bg: 'gray.700' },
                }}
                width="100%"
                position="relative"
              >
                <Box sx={{ pr: '15px' }}>
                  <Text color="gray.400" fontSize="xs">
                    Yesterday
                  </Text>
                  {item.commit.message
                    .split('\n')
                    .map((str: string, index: number) => (
                      <Text key={index}>{str}</Text>
                    ))}
                </Box>
                <VStack
                  sx={{
                    position: 'absolute',
                    right: '0',
                    top: '0',
                    padding: '5px',
                    justifyContent: 'space-between',
                    height: '100%',
                  }}
                >
                  {item.commit && item.commit.verification.verified && (
                    <Box
                      sx={{
                        height: '5px',
                        width: '5px',
                        bg: 'green.300',
                        borderRadius: '50%',
                        margin: '10px',
                      }}
                    />
                  )}

                  <IconButton
                    size="xs"
                    aria-label="Close Button"
                    variant="ghost"
                  >
                    <span className="material-symbols-rounded">
                      expand_more
                    </span>
                  </IconButton>
                </VStack>
              </Box>
            </Box>
            <AccordionButton />
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        ))}
      <Button mt={2} variant="ghost">
        Show More
      </Button>
    </Accordion>
  );
}

export default TimeLine;
