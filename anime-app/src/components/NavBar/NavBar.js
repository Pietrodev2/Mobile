import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../../firebaseConfig';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

export default function NavBar() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUserLoggedIn(!!user);
    });
    return unsubscribe;
  }, []);

  const navigateToScreen = (screenName) => {
    setMenuVisible(false);
    navigation.navigate(screenName);
  };

  const navigateToUserScreen = () => {
    setUserMenuVisible(false);
    navigation.navigate('User');
  };

  return (
    <View style={styles.titleContainer}>
      <TouchableOpacity onPress={() => navigateToScreen('Home')}>
        <Text style={styles.title}>AnimeList</Text>
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => userLoggedIn ? setUserMenuVisible(true) : navigation.navigate('Login')}>
          <Text style={styles.userIcon}>🧑</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Text style={styles.searchIcon}>☷</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={styles.drawerOverlay}>
          <View style={styles.drawerContent}>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => navigateToScreen('Home')}
            >
              <Ionicons name="home" size={24} color="#3b82f6" />
              <Text style={styles.drawerItemText}>Início</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => navigateToScreen('Favorites')}
            >
              <Ionicons name="heart" size={24} color="#3b82f6" />
              <Text style={styles.drawerItemText}>Favoritos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => navigateToScreen('Search')}
            >
              <Ionicons name="search" size={24} color="#3b82f6" />
              <Text style={styles.drawerItemText}>Pesquisar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => navigateToScreen('Filtros')}
            >
              <Ionicons name="filter" size={24} color="#3b82f6" />
              <Text style={styles.drawerItemText}>Filtros</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeDrawerButton}
              onPress={() => setMenuVisible(false)}
            >
              <Text style={styles.closeDrawerText}>Fechar Menu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        visible={userMenuVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setUserMenuVisible(false)}
      >
        <View style={styles.drawerOverlay}>
          <View style={styles.drawerContent}>
            <Text style={styles.drawerHeader}>Minha Conta</Text>

            {userLoggedIn ? (
              <>
                <TouchableOpacity
                  style={styles.drawerItem}
                  onPress={navigateToUserScreen}
                >
                  <Ionicons name="person-circle" size={24} color="#3b82f6" />
                  <Text style={styles.drawerItemText}>Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.drawerItem}
                  onPress={() => {
                    auth.signOut();
                    setUserMenuVisible(false);
                  }}
                >
                  <Ionicons name="log-out" size={24} color="#3b82f6" />
                  <Text style={styles.drawerItemText}>Sair</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                  style={styles.drawerItem}
                  onPress={() => {
                    setUserMenuVisible(false);
                    navigation.navigate('Login');
                  }}
                >
                  <Ionicons name="log-in" size={24} color="#3b82f6" />
                  <Text style={styles.drawerItemText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.drawerItem}
                  onPress={() => {
                    setUserMenuVisible(false);
                    navigation.navigate('Register');
                  }}
                >
                  <Ionicons name="person-add" size={24} color="#3b82f6" />
                  <Text style={styles.drawerItemText}>Registrar</Text>
                </TouchableOpacity>
              </>
            )}

            <TouchableOpacity
              style={styles.closeDrawerButton}
              onPress={() => setUserMenuVisible(false)}
            >
              <Text style={styles.closeDrawerText}>Fechar Menu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
