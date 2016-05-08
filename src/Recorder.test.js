import test from 'ava';
import Recorder from './Recorder';

test('can be instantiated', t => {
  const recorder = new Recorder();

  t.truthy(recorder);
});

test('adds and retreives elements', t => {
  const recorder = new Recorder();

  const item = {
    type: 'click',
    screen: 'dashboard',
    data: {
      x: 10,
      y: 10,
    },
  };

  recorder.add('click', 'dashboard', { x: 10, y: 10 });

  t.is(recorder.first().type, item.type);
  t.is(recorder.first().screen, item.screen);
  t.deepEqual(recorder.first().data, item.data);

  t.is(recorder.last().type, item.type);
  t.is(recorder.last().screen, item.screen);
  t.deepEqual(recorder.last().data, item.data);
});
