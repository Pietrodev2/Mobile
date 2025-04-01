import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  Button,
  Alert,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

function ToDoScreen() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [responsable, setResponsable] = useState("");
  const [how, setHow] = useState("");
  const [dueDate, setDueDate] = useState(1);
  const [complexity, setComplexity] = useState(1);
  const [priority, setPriority] = useState("low");
  const [completed, setCompleted] = useState(false);
  const [urgent, setUrgent] = useState(false);
  const [taskType, setTaskType] = useState("home");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      const newTask = {
        id: Math.random().toString(),
        taskName: task,
        description,
        responsable,
        how,
        priority,
        dueDate,
        complexity,
        completed,
        urgent,
        taskType,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTask("");
      setDescription("");
      setResponsable("");
      setHow("");
      setDueDate(1);
      setComplexity(1);
      setCompleted(false);
      setUrgent(false);
    } else {
      Alert.alert("Erro", "Por favor, adicione uma tarefa antes de salvar.");
    }
  };

  const handleCancelTask = () => {
    if (tasks.length > 0) {
      setTasks((prevTasks) => prevTasks.slice(0, prevTasks.length - 1));
    } else {
      Alert.alert("Erro", "Não há tarefas para cancelar.");
    }
    setTask("");
    setDescription("");
    setResponsable("");
    setHow("");
    setDueDate(1);
    setComplexity(1);
    setCompleted(false);
    setUrgent(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>Adicione sua tarefa:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Comprar leite"
          value={task}
          onChangeText={setTask}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Descrição:</Text>
        <TextInput
          style={styles.input}
          placeholder="Descrição da tarefa"
          value={responsable}
          onChangeText={setResponsable}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Como vai realizar a Tarefa</Text>
        <TextInput
          style={styles.input}
          placeholder="Método de execução da tarefa"
          value={how}
          onChangeText={setHow}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Responsável pela tarefa:</Text>
        <TextInput
          style={styles.input}
          placeholder="Quem irá realizar a tarefa"
          value={description}
          onChangeText={setDescription}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Prioridade:</Text>
        <Picker
          selectedValue={priority}
          style={styles.picker}
          onValueChange={(itemValue) => setPriority(itemValue)}
        >
          <Picker.Item label="Baixa" value="low" />
          <Picker.Item label="Média" value="medium" />
          <Picker.Item label="Alta" value="high" />
        </Picker>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Tempo estimado (horas):</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={12}
          value={dueDate}
          onValueChange={setDueDate}
          step={1}
        />
        <Text style={styles.sliderValue}>Horas: {dueDate}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Complexidade:</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={10}
          value={complexity}
          onValueChange={setComplexity}
          step={1}
        />
        <Text style={styles.sliderValue}>Complexidade: {complexity}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Tarefa concluída:</Text>
        <Switch value={completed} onValueChange={setCompleted} />
        <Text style={styles.switchText}>
          A tarefa está {completed ? "Concluída" : "Pendente"}
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Tarefa urgente:</Text>
        <Switch value={urgent} onValueChange={setUrgent} />
        <Text style={styles.switchText}>Urgente: {urgent ? "Sim" : "Não"}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Tipo de tarefa:</Text>
        <Picker
          selectedValue={taskType}
          style={styles.picker}
          onValueChange={(itemValue) => setTaskType(itemValue)}
        >
          <Picker.Item label="Casa" value="home" />
          <Picker.Item label="Trabalho" value="work" />
          <Picker.Item label="Pessoal" value="personal" />
        </Picker>
      </View>
      <View style={styles.section}>
        <Button title="Adicionar Tarefa" onPress={handleAddTask} />
        <Button
          title="Cancelar Tarefa"
          onPress={handleCancelTask}
          color="red"
        />
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>
              {item.taskName} - {item.dueDate} horas - {item.priority} -{" "}
              {item.taskType}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

function ImagesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.label, { textAlign: "center" }]}>
        Exemplos de Tarefas:
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_louca2.jpg",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://www.bv.com.br/documents/1697363/1703972/economizar-no-supermercado.jpg/16f048d7-544a-c991-79ed-f97fbc38d658?t=1717686981253",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://blog.wokgrill.com.br/wp-content/uploads/2021/04/comida-caseira-e-facil-de-fazer-780x450.jpeg",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7XMkwznBXNF-MZeRMcZjrGT05C8P2CMGsQg&s",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStqWpGfQ1JXW3YNEQfWBT7qTmhrz7JiG2rYA&s",
          }}
          style={styles.image}
        />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="To-Do List" component={ToDoScreen} />
        <Tab.Screen name="Exemplos de Tarefas" component={ImagesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 20,
  },
  section: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#1E90FF",
  },
  input: {
    height: 40,
    borderColor: "#1E90FF",
    borderWidth: 1,
    width: "80%",
    paddingLeft: 8,
    backgroundColor: "#333333",
    color: "#fff",
  },
  taskContainer: {
    backgroundColor: "#333333",
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
    width: "90%",
    alignSelf: "center",
  },
  taskText: {
    color: "#fff",
    fontSize: 16,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
  },
  slider: {
    width: "80%",
  },
  sliderValue: {
    marginTop: 10,
    fontSize: 16,
    color: "#fff",
  },
  switchText: {
    marginTop: 10,
    fontSize: 16,
    color: "#fff",
  },
});
