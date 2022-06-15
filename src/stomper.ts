import { Client } from '@stomp/stompjs'

const client = new Client({
  brokerURL: 'ws://rabbitmq:15674/ws',
})

client.activate()
