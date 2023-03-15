import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface StateType {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, StateType> {
  state: StateType = {
    hasError: false,
  };

  static getDerivedStateFromError(_error: any): StateType {
    return { hasError: true };
  }

  componentDidCatch(err: Error, _info: any) {
    console.error("Error encountered: ", err);
  }

  render(): React.ReactNode {
    const { children } = this.props;
    if (this.state.hasError) return <div>Some Error has occurred</div>;
    return <React.Fragment>{children}</React.Fragment>;
  }
}

export default ErrorBoundary;
