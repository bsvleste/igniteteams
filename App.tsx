import { StatusBar } from "expo-status-bar";
import { Groups } from "@screens/Groups";
import theme from "./src/theme";
import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loading';
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })
  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Groups /> : <Loading />}
      <StatusBar style="light" translucent />
    </ThemeProvider>
  );
}

