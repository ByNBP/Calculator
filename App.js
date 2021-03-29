import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class App extends React.Component {
  state = {
    number: '0',
    number1: 0,
    number2: 0,
    islem: -1,
  };

  Sonuc = () => {
    let toplam = 0;

    switch (this.state.islem) {
      case '1':
        toplam = parseInt(this.state.number1) + parseInt(this.state.number2);
        this.setState({number: `${toplam}`});
        break;

      case '2':
        toplam = parseInt(this.state.number1) - parseInt(this.state.number2);
        this.setState({number: `${toplam}`});
        break;

      case '3':
        toplam = parseInt(this.state.number1) / parseInt(this.state.number2);
        this.setState({number: `${toplam}`});
        break;

      case '4':
        toplam = parseInt(this.state.number1) * parseInt(this.state.number2);
        this.setState({number: `${toplam}`});
        break;
      case '5':
        toplam = parseInt(this.state.number1) * parseInt(this.state.number2)/100;
        this.setState({number: `${toplam}`});
        break;
    }

    // this.setState({number: '0' });
    this.setState({number1: 0});
    this.setState({number2: 0});
    this.setState({islem: -1});
  };

  changeIslem = islem => {
    if (this.state.islem == -1 && this.state.number1 > 0) {
      this.setState({islem: `${islem}`});
      this.setState({number: ``});
    }
  };

  changeNumber = number => {
    if (
      this.state.islem == -1 &&
      parseInt(this.state.number) > 0 &&
      this.state.number1 == 0 &&
      this.state.number2 == 0
    ) {
      this.setState({number: `${number}`});
      this.setState({number1: `${number}`});
    } else if (
      this.state.islem == -1 &&
      this.state.number == '0' &&
      this.state.number1 < 1
    ) {
      this.setState({number: `${number}`});
      this.setState({number1: `${number}`});
    } else if (
      this.state.islem == -1 &&
      this.state.number > 0 &&
      this.state.number1 > 0
    ) {
      this.setState({number: `${this.state.number}${number}`});
      this.setState({number1: `${this.state.number}${number}`});
    } else if (this.state.islem != -1 && this.state.number2 < 1) {
      this.setState({number: `${number}`});
      this.setState({number2: `${number}`});
    } else if (
      this.state.islem != -1 &&
      this.state.number2 > 0 &&
      this.state.number > 0
    ) {
      this.setState({number: `${this.state.number}${number}`});
      this.setState({number2: `${this.state.number}${number}`});
    }
  };

  setZero = () => {
    this.setState({number: '0'});
    this.setState({number1: 0});
    this.setState({number2: 0});
    this.setState({islem: -1});
  };

  changeNegative = () => {
    let number = parseFloat(this.state.number) * -1;
    this.setState({number: number.toString()});
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <View
          style={{flex: 2, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
          <Text
            style={{
              color: '#fff',
              fontSize: width / 6,
              marginEnd: 30,
              marginBottom: 10,
            }}>
            {this.state.number}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={[styles.button, styles.colorWhite]}
            onPress={() => this.setZero()}>
            <Text style={[styles.buttonText, styles.textColorBlack]}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.colorWhite]}
            onPress={() => this.changeNegative()}>
            <Text style={[styles.buttonText, styles.textColorBlack]}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.colorWhite]}>
            <Text
              style={[styles.buttonText, styles.textColorBlack]}
              onPress={() => this.changeIslem('5')}>
              %
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.colorOrange]}
            onPress={() => this.changeIslem('4')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.changeNumber('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.changeNumber('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.changeNumber('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.colorOrange]}
            onPress={() => this.changeIslem('3')}>
            <Text style={styles.buttonText}>x</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.changeNumber('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.changeNumber('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.changeNumber('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.colorOrange]}
            onPress={() => this.changeIslem('2')}>
            <Text style={styles.buttonText}>--</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.changeNumber('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.changeNumber('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.changeNumber('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.colorOrange]}
            onPress={() => this.changeIslem('1')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={[styles.button, {width: (width / 5) * 2 + 15}]}
            onPress={() => this.changeNumber('0')}>
            <Text
              style={[styles.buttonText, {textAlign: 'left', marginLeft: 25}]}>
              0
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.changeNumber('.')}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.colorOrange]}
            onPress={() => this.Sonuc()}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'gray',
    justifyContent: 'center',
    borderRadius: width / 5,
    width: width / 5,
    height: width / 5,
    margin: 5,
  },
  colorOrange: {
    backgroundColor: 'orange',
  },
  colorWhite: {
    backgroundColor: 'white',
  },
  textColorBlack: {
    color: 'black',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: width / 11,
    fontStyle: 'normal',
  },
});
