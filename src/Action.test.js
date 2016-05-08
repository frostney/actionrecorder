import test from 'ava';
import Action from './Action';

test(t => {
  const action = new Action({
    type: 'click',
    screen: 'dashboard',
    data: 0,
  });

  t.truthy(action);
  t.is(action.type, 'click');
  t.is(action.screen, 'dashboard');
  t.is(action.data, 0);
});
