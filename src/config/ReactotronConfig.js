import Reactotron from 'reactotron-react-native';

const tron = Reactotron
  .configure({ host: '10.14.11.109' })
  .useReactNative()
  .connect();

tron.clear();

console.tron = tron;
