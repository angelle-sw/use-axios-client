/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui';
import { useConfig } from 'docz';
import * as styles from './styles';
import { Logo } from '../Logo';
import { Github } from '../Icons';

export const Header = () => {
  const config = useConfig();

  return (
    <div sx={styles.wrapper}>
      <div sx={styles.innerContainer}>
        <Flex sx={{ justifyContent: 'space-between' }}>
          <Logo />
          <Box>
            <a
              href={config.repository}
              sx={styles.headerButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={15} />
            </a>
          </Box>
        </Flex>
      </div>
    </div>
  );
};
