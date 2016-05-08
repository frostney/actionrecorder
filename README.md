# actionrecorder
:vhs: Keep all user actions in a centralized object

## Installation

```
$ npm install actionrecorder
```

## Usage

```
import ActionRecorder from 'actionrecorder';

ActionRecorder.add('click', 'dashboard', { x: 20, y: 50 });
ActionRecorder.add('keypress', 'dashboard', { key: 'Escape' });

// Return all actions in a screen
ActionRecorder.screen('dashboard');
// > [{ type: 'click', screen: 'dashboard', data: { x: 20, y : 50 } }, { type: 'keypress', screen: 'dashboard', data: { key: 'Escape' } }]

// Return all actions of a type
ActionRecorder.type('click');
// > [{ type: 'click', screen: 'dashboard', data: { x: 20, y : 50 } }]
```

## License

MIT
