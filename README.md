# emulator-launcher-cli
A very simple CLI to launch emulators from a command line. Right now only Android is support for WIndows.  Maybe one day I'll add support for Mac as well as launching iOS emulators.

# Install
```
npm install -g
```

# Usage
### List all available Android Emulators
```
emu list
```

### Start an emulator by name
```
emu start <name>
```

### Start default emulator
The default emulator should be set to your desired emulator name before installing.
```
emu start
```
