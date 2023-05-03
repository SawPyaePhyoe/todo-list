import "@/styles/globals.css";
import TodoProvider from "@/Provider/TodoProvider";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen text-center text-gray-100 bg-gray-900">
      <TodoProvider>
        <Component {...pageProps} />
      </TodoProvider>
    </div>
  );
}
