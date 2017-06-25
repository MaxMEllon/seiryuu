import * as ava from 'ava'
import List from '../List'

ava.test('List<T>().add()', (t) => {
  const list = new List<number>()
  t.deepEqual(list.map((i) => i), [])
  list.add(1)
  t.deepEqual(list.map((i) => i), [1])
  list.add(2)
  t.deepEqual(list.map((i) => i), [1, 2])
})
