import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/Home'; 

export default function App() {
  return (
    <>
      <StatusBar style="auto" /> {/* "auto" adapta a cor dos ícones se o celular estiver no modo escuro */}
      <HomeScreen />
    </>
  );
}
