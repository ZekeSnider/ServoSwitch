# Servo Switch

This sets up a simple HTTP server to modify and retrieve the state of a 180° servo that is connected to a switch. It will move the servo to hit the switch to the desired position, then switch back to the default position.

## Configuration
See Parameters in [config.json](/config.json). For a hardware wiring diagram, check out [the wiring diagram on this page](https://tutorials-raspberrypi.com/raspberry-pi-servo-motor-control/).

## API

### GET `/state`
Returns an integer the state of the blinds, either `0` or `1`.

### POST `/position/:state`
The post :state in the url should be either `OFF` or `ON` the desired state that the switch should move to. Note: if you request the state that the switch is currently set to, it will do nothing.

## HomeKit
I use [homebridge-http](https://github.com/rudders/homebridge-http) with this server to enable connectivity with HomeKit. See [accessoryConfig.json](/accessoryConfig.json) for the an example configuration. (You must replace localhost with the host of the blinds server)