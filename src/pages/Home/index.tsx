import { createElement } from 'rax';
import View from 'rax-view';
 

import Main from '../main'

import styles from './index.module.css';
 

export default function Home() {
  return (
    <View className={styles.homeContainer} id="main-app">
      <Main/>
    </View>
  );
}
