import { Text } from 'react-native';
import {styles} from "./style";
import Button from './src/components/button/button';

export default function App() {

  const nome = "Joâo Victor"

  return (<>
    <Text style={styles.textos}>Olá Mundo</Text>
    
    <Button texto="Acessar" />
  </>
  );
}

