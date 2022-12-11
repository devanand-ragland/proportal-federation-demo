import React from 'react';
import { useTranslation } from 'react-i18next';
import { BottomLinks, FooterOuter, Link, TrademarkSection } from './Footer.style';

const footerLegalLinks = [
  {
    textKey: 'footer.legal.links.resideo',
    linkPath: 'https://resideo.com',
  },
  {
    textKey: 'footer.legal.links.honeywellhome',
    linkPath: 'https://honeywellhome.com',
  },
  {
    textKey: 'footer.legal.links.privacypolicy',
    linkPath: 'https://corporate.resideo.com/privacy/english',
  },
  {
    textKey: 'footer.legal.links.termsconditions',
    linkPath: 'https://pro.resideo.com/terms',
  },
];

const trademarkYear = new Date().getFullYear();

export const Footer = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <FooterOuter data-test-footer>
      <BottomLinks data-test-secondary-footer-nav-links>
        {footerLegalLinks.map(function(link, i): JSX.Element {
          return (
            <Link href={link.linkPath} key={i}>
              {t(link.textKey)}
            </Link>
          );
        })}
      </BottomLinks>
      <TrademarkSection data-test-footer-copyright>{t('footer.copyright', { year: trademarkYear })}</TrademarkSection>
    </FooterOuter>
  );
};
