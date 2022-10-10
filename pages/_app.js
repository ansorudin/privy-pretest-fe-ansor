import AuthProvider from "../components/AuthProvider";
import "../styles/globals.css";
import SnackbarProvider from "react-simple-snackbar";

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </AuthProvider>
  );
}

export default App;
