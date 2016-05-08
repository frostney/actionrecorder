import test from 'ava';
import ActionList from './ActionList';

test('can be instantiated', t => {
  const list = new ActionList();

  t.truthy(list);
});

test('adds and retreives elements', t => {
  const list = new ActionList();

  list.add('item');

  t.is(list.first(), 'item');
  t.is(list.last(), 'item');
});
