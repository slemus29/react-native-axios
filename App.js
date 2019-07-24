/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  StatusBar,
  FlatList,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Advices from "./services/Advices";

const advices = new Advices();

const App = () => {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux');
  useEffect(() => {
    const fetchData = async () => {
      const result = await advices.getReactAdvices();
      setData(result);
    };

    fetchData();
  }, []);
  const queryData = async () => {
    const result = await advices.getAdvices(query);
    setData(result);
  };
  console.log('Result datasdfa', query)
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <TextInput
            onChangeText={(text) => setQuery(text)}
            placeholder="Type the subject to search advices"
          />
          <Button
            onPress={() => queryData()}
            title="Search"
            color="blue"
            accessibilityLabel="Click this button to increase count"
          />
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) =>
              <Text>{`${index + 1} ${item.title}`}</Text>
            }
          />
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
