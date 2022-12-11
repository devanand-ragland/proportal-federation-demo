import { Component, ReactNode } from 'react';

interface ErrorBoundaryState {
  error?: Error;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: (error?: Error) => ReactNode;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = { error: undefined };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error: error };
  }

  render = () => (this.state.error ? this.props.fallback(this.state.error) : this.props.children);
}
