import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import LiveDemoBox from "./components/LiveDemoBox";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      staleTime: 60 * 60 * 1000, // 1 hour
      retryOnMount: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LiveDemoBox />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.querySelector(".react-live-demo-box"));
