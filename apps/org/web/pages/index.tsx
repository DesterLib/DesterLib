import {
  Box,
  Button,
  HStack,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { useApi } from '@desterlib/hooks/react';
import { TimeLine } from '@desterlib/ui/web/chakra';
import Image from 'next/image';
import LogoDark from '../public/logo/logo-full-dark.svg';
import LogoLight from '../public/logo/logo-full-light.svg';

export function Index() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isLoading, response, error } = useApi({
    method: 'GET',
    baseUrl: 'api.github.com',
    path: 'repos/DesterLib/Backend/commits',
    headers: {
      Authorization:
        'Bearer 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',
    },
  });

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Box style={{ padding: '20px' }}>
      <HStack justifyContent="space-between">
        <HStack spacing={2} pb={5}>
          <Box>
            <Image
              width="120"
              src={colorMode === 'light' ? LogoLight : LogoDark}
              alt=""
            />
          </Box>

          <Button variant="ghost">Projects</Button>
          <Button variant="ghost">Account</Button>
        </HStack>
        <HStack spacing={2} pb={5}>
          <IconButton
            aria-label="Toggle color mode"
            onClick={toggleColorMode}
            icon={
              colorMode === 'light' ? (
                <span className="material-symbols-rounded">dark_mode</span>
              ) : (
                <span className="material-symbols-rounded">light_mode</span>
              )
            }
          />
        </HStack>
      </HStack>
      <TimeLine data={response} />
    </Box>
  );
}

export default Index;
