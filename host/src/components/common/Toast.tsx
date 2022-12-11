import React, { ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { FaTimes } from 'react-icons/fa';
import styled, { ThemeProvider, useTheme } from 'styled-components';
import toaster from 'toasted-notes';
import { Box, Card } from '@resideo/blueprint-react';

interface ToastOptions {
  duration?: number | null;
}

const ToastCard = styled(Card)`
  box-shadow: 0px 2px 10px ${({ theme }) => theme.colors.modal.shadow};
`;

const CloseButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  padding: 0;
  position: absolute;
  right: 1rem;
  top: 1rem;

  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

const Toast = ({ children, onClose, ...rest }) => {
  const { t } = useTranslation();

  return (
    <ToastCard {...rest}>
      {children}

      <CloseButton aria-label={t('common.close')} onClick={onClose} type='button'>
        <FaTimes />
      </CloseButton>
    </ToastCard>
  );
};

export const useToast = () => {
  const theme = useTheme();

  const notify = useCallback(
    (message: ReactNode, { duration = 5000 }: ToastOptions = {}) => {
      toaster.notify(
        ({ onClose }) => (
          <ThemeProvider theme={theme}>
            <Box padding='small'>
              <Toast onClose={onClose}>{message}</Toast>
            </Box>
          </ThemeProvider>
        ),
        { duration: duration, position: 'top' }
      );
    },
    [theme]
  );

  return notify;
};
