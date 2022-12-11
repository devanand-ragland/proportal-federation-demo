import styled from 'styled-components';
import { CenterContent } from 'components/Layout';

export const IntroLetterContainer = styled(CenterContent)`
  margin-top: ${({ theme }) => theme.space.xxLarge};
  padding: ${({ theme }) => theme.space.large};
  max-width: ${({ theme }) => theme.breakpoints.small};
  background: ${({ theme }) => theme.colors.card};
  border-top: 5px solid ${({ theme }) => theme.colors.primary};
`;
