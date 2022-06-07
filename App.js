import React, {useState, useEffect} from 'react';  
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  // para usar use State necessário importar useState de React
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado]=useState(0);
  const [resultadoMP, setResultadomp]=useState(0);
  const [resultadoDV, setResultadodv]=useState(0);
  const [resultadoST, setResultadost]=useState(0);
  
  const somar = () => {
    alert(resultado);
   }
   const st = () => {
    alert(resultadoST);
   }
   const dv = () => {
    alert(resultadoDV);
   }
   const mp = () => {
    alert(resultadoMP);
   }

   useEffect(() =>{
      setResultadomp(parseFloat(valor1)*parseFloat(valor2));
      setResultadodv(parseFloat(valor1)/parseFloat(valor2));
      setResultadost(parseFloat(valor1)-parseFloat(valor2));
      setResultado(parseFloat(valor1)+parseFloat(valor2));
   })
   
  return (
    <View style={styles.inputContainer}>
        <TextInput
          placeholder="Valor1"
          value={valor1}
          onChangeText={text => setValor1(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Valor2"
          value={valor2}
          onChangeText={text => setValor2(text)}
          style={styles.input}
        />








       <TouchableOpacity
         onPress={somar}
         style={styles.button}
       >
         <Text style={styles.buttonText}>somar</Text>
       </TouchableOpacity>

       <TouchableOpacity
         onPress={st}
         style={styles.button}
       >
         <Text style={styles.buttonText}>subtrair</Text>
       </TouchableOpacity>

       <TouchableOpacity
         onPress={dv}
         style={styles.button}
       >
         <Text style={styles.buttonText}>dividir</Text>
       </TouchableOpacity>

       <TouchableOpacity
         onPress={mp}
         style={styles.button}
       >
         <Text style={styles.buttonText}>multiplicar</Text>
       </TouchableOpacity>
       </View>


       
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})
