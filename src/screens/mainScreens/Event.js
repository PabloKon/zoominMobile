import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import QRCode from 'react-native-qrcode-svg'
import Background from '../../components/Background'
import Header from '../../components/Header'
import Button from '../../components/Button'
import { theme } from '../../core/theme'
import StyleCard from '../../components/StyledCard'

export default function Event() {
  const [status, setStatus] = useState({ value: 'myevent' })
  return (
    <Background type="main">
      <Header label="Events" icon={require('../../assets/event.png')} />
      <View style={styles.contain}>
        <Button
          labelStyle={{ color: theme.colors.white }}
          mode={status.value === 'myevent' ? 'contained' : 'outlined'}
          style={
            status.value === 'myevent' ? styles.selectedButton : styles.button
          }
          onPress={() => {
            setStatus({ value: 'myevent' })
          }}
        >
          My Events
        </Button>
        <Button
          labelStyle={{ color: theme.colors.white, fontSize: 13 }}
          mode={status.value === 'future' ? 'contained' : 'outlined'}
          style={
            status.value === 'future' ? styles.selectedButton : styles.button
          }
          onPress={() => setStatus({ value: 'future' })}
        >
          Future Events
        </Button>
      </View>

      {status.value === 'myevent' ? (
        <View style={styles.event}>
          <StyleCard style={styles.event}>
            <View>
              <QRCode
                value="http://awesome.link.qr"
                logoBackgroundColor="transparent"
              />
            </View>
            <Text style={styles.text1}>Event Name: Admin</Text>
            <Text style={styles.text1}>Event Schedule:</Text>
            <Text style={styles.text1}>From: 21/12/2022 08:00am</Text>
            <Text style={styles.text1}>To: 29/12/2022 08:00:am</Text>
            <Text style={styles.text1}>Location: re</Text>
            <Text style={styles.text1}>Rewards: 500 Coin</Text>
          </StyleCard>
        </View>
      ) : status.value === 'future' ? (
        <View style={styles.event}>
          <StyleCard style={styles.event}>
            <Text style={styles.text1}>Event Name: NBA Mania</Text>
            <Text style={styles.text1}>Date : 10/sep/2022</Text>
            <Text style={styles.text1}>Location : XYX Stadium, NY</Text>
          </StyleCard>
          <StyleCard style={styles.event}>
            <Text style={styles.text1}>Event Name: NBA Mania</Text>
            <Text style={styles.text1}>Date : 10/sep/2022</Text>
            <Text style={styles.text1}>Location : XYX Stadium, NY</Text>
          </StyleCard>
        </View>
      ) : null}
    </Background>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '47%',
    marginVertical: 10,
    paddingVertical: 2,
    borderRadius: 16,
    backgroundColor: theme.colors.transparent,
    borderColor: theme.colors.white,
    borderWidth: 2,
  },
  selectedButton: {
    width: '47%',
    marginVertical: 10,
    paddingVertical: 2,
    borderRadius: 16,
    backgroundColor: theme.colors.buttonColor,
    color: theme.colors.white,
    borderWidth: 2,
  },
  ticket: {
    width: '70%',
    marginVertical: 10,
    paddingVertical: 2,
    borderRadius: 16,
    backgroundColor: theme.colors.buttonColor,
    color: theme.colors.white,
    borderWidth: 2,
  },
  contain: {
    width: '100%',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    paddingLeft: 10,
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  event: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  text1: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 23,
    color: theme.colors.white,
  },
})
