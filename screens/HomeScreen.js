import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// Sample data for the FlatList
const DATA = [
  {
    id: '1',
    icon: 'apple',
    companyName: 'Apple',
    description: 'Entertainment',
    amount: '-$5.99',
  },
  {
    id: '2',
    icon: 'spotify',
    companyName: 'Spotify',
    description: 'Music',
    amount: '-$12.99',
  },
  {
    id: '3',
    icon: 'download',
    companyName: 'Money Transfer',
    description: 'Transaction',
    amount: '$300',
  },
  {
    id: '4',
    icon: 'shopping-cart',
    companyName: 'Grocery',
    description: 'Buying',
    amount: '-$88',
  }
  // Add more items as needed
];

// Card Component
const Card = ({ item, theme }) => (
  <View style={[styles.card, { backgroundColor: theme.background }]}>
    <FontAwesome5 name={item.icon} size={50} color={theme.text} style={styles.logo} />
    <View style={styles.textContainer}>
      <Text style={[styles.companyName, { color: theme.text }]}>{item.companyName}</Text>
      <Text style={[styles.description, { color: theme.text }]}>{item.description}</Text>
    </View>
    <Text style={[styles.amount, { color: item.companyName === 'Money Transfer' ? 'blue' : theme.text }]}>{item.amount}</Text>
  </View>
);

// HomeScreen Component
export function HomeScreen({ theme }) {
  const dynamicStyles = {
    searchContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: -10,
      backgroundColor: theme.name === 'light' ? '#cccccc' : '#bb86fc',
      borderRadius: 37,
      width: 70,
      height: 70,
    },
    transactionImage: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      backgroundColor: theme.name === 'light' ? '#cccccc' : '#bb86fc',
      width: 60,
      borderRadius: 30,
    },
  };

  return (
    <ScrollView>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={styles.greetingsContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.dp}>
              <Image source={require('../assets/profile.png')} style={styles.dpImage} />
            </View>
            <View style={styles.name}>
              <Text style={{ color: theme.text }}>Welcome back,</Text>
              <Text style={[{ color: theme.text , fontSize: 28, fontWeight: 'bold'},]}>Eric Atsu</Text>
            </View>
          </View>
          <View style={dynamicStyles.searchContainer}>
            <Ionicons
              name="search"
              size={30}
              color={theme.text}
              style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center', padding: 10 }}
            />
          </View>
        </View>

        <View style={styles.cardContainer}>
          <Image source={require('../assets/Card.png')} style={styles.cardImage} />
        </View>

        <View style={styles.transactionContainer}>
          <View style={styles.transaction}>
            <View style={dynamicStyles.transactionImage}>
              <Ionicons
                name="arrow-up"
                size={30}
                color={theme.text}
                style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center', padding: 10 }}
              />
            </View>
            <View style={styles.transactionText}>
              <Text style={{ color: theme.text }}>Sent</Text>
            </View>
          </View>

          <View style={styles.transaction}>
            <View style={dynamicStyles.transactionImage}>
              <Ionicons
                name="arrow-down"
                size={30}
                color={theme.text}
                style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center', padding: 10 }}
              />
            </View>
            <View style={styles.transactionText}>
              <Text style={{ color: theme.text }}>Receive</Text>
            </View>
          </View>

          <View style={styles.transaction}>
            <View style={dynamicStyles.transactionImage}>
              <Ionicons
                name="cash"
                size={30}
                color={theme.text}
                style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center', padding: 10 }}
              />
            </View>
            <View style={styles.transactionText}>
              <Text style={{ color: theme.text }}>Loan</Text>
            </View>
          </View>

          <View style={styles.transaction}>
            <View style={dynamicStyles.transactionImage}>
              <Ionicons
                name="cloud-upload"
                size={30}
                color={theme.text}
                style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center', padding: 10 }}
              />
            </View>
            <View style={styles.transactionText}>
              <Text style={{ color: theme.text }}>Topup</Text>
            </View>
          </View>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ alignSelf: 'flex-start', fontSize: 24, fontWeight: 'bold',color: theme.text  }}>Transaction</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ alignSelf: 'flex-end', color: 'blue', fontSize: 18 }}>View All</Text>
          </View>
        </View>

        <FlatList
          data={DATA}
          renderItem={({ item }) => <Card item={item} theme={theme} />}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  greetingsContainer: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    columnGap: 100,
  },
  headerContainer: {
    flexDirection: 'row',
    flex: 3,
    alignItems: 'center',
  },
  dp: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  dpImage: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  name: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  cardContainer: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  cardImage: {
    width: '95%',
    padding: 10,
    marginLeft: 10,
    justifyContent: 'center',
  },
  transactionContainer: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 20,
  },
  transaction: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'column',
  },
  transactionText: {
    flex: 1,
  },
  card: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
