import styled from 'styled-components';

export const FooterOuter = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-decoration: none;
`;

export const BottomLinks = styled.p`
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.small};
  margin-top: ${({ theme }) => theme.space.medium};
  padding-left: ${({ theme }) => theme.space.medium};
  padding-right: ${({ theme }) => theme.space.medium};
  text-align: center;
  a {
    color: ${({ theme }) => theme.colors.secondaryLink};
    font-size: ${({ theme }) => theme.fontSizes.xSmall};
    &:after {
      content: '|';
      padding: 0 ${({ theme }) => theme.space.small};
    }
    &:last-of-type:after {
      content: '';
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: block;
  }
`;

export const TrademarkSection = styled.p`
  align-items: center;
  color: ${({ theme }) => theme.colors.footerLink};
  font-size: ${({ theme }) => theme.fontSizes.xxSmall};
  margin-top: ${({ theme }) => theme.space.xSmall};
  padding: 0 ${({ theme }) => theme.space.small};
  text-align: center;
`;
