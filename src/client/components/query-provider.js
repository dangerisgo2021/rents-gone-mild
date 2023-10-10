import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const QueryProvider = ({ children }) => {
  console.log("QueryProvider")
  
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
