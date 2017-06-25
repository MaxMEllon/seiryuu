import { test } from 'ava'
import List from '../List'

test('List<T>().add()', (t) => {
  const list = new List<number>()
  t.deepEqual(list.map((i) => i), [])
  list.add(1)
  t.deepEqual(list.map((i) => i), [1])
  list.add(2)
  t.deepEqual(list.map((i) => i), [1, 2])
})

test('List<T>().remove()', (t) => {
  const list = new List<any>()
  list.add({ id: 0 })
  list.add({ id: 1 })
  list.add({ id: 2 })
  list.add({ id: 3 })
  const before: string = list.hash
  list.remove(3)
  list.remove(8)
  list.remove(22)
  t.deepEqual(list.map((i) => i.id), [0, 1, 2])
  list.add({ id: 3 })
  t.is(before, list.hash)
})

test('List<T>().is()', (t) => {
  const list1 = new List<any>()
  list1.add({ id: 0 })
  list1.add({ id: 1 })
  list1.add({ id: 2 })
  const list2 = new List<any>()
  list2.add({ id: 0 })
  list2.add({ id: 1 })
  list2.add({ id: 2 })
  t.is(list1.hash, list2.hash)
  t.is(list1.is(list2), true)
})

test('List<T>().each()', (t) => {
  const list = new List<any>()
  list.add({ id: 0 })
  list.add({ id: 1 })
  list.add({ id: 2 })
  let c = 0
  list.each((i) => t.is(i.id, c++))
})

test('List<T>().map()', (t) => {
  const list = new List<any>()
  list.add({ id: 0 })
  list.add({ id: 1 })
  list.add({ id: 2 })
  t.deepEqual(list.map((i) => i.id), [0, 1, 2])
})

test('List<T>().find()', (t) => {
  const list = new List<any>()
  list.add({ id: 0 })
  list.add({ id: 1 })
  list.add({ id: 2 })
  t.deepEqual(list.find(1), { id: 1 })
  t.deepEqual(list.find(2), { id: 2 })
  t.deepEqual(list.find(5), undefined)
})

test('List<T>().where()', (t) => {
  const list = new List<any>()
  list.add({ id: 0, content: 'hoge' })
  list.add({ id: 1, content: 'poge' })
  list.add({ id: 2, content: 'hoge' })
  t.deepEqual(list.where((i) => i.content === 'hoge'), [
    { id: 0, content: 'hoge' },
    { id: 2, content: 'hoge' },
  ])
})

test('List<T>().clone()', (t) => {
  const list = new List<any>()
  list.add({ id: 0, content: 'hoge' })
  list.add({ id: 1, content: 'poge' })
  list.add({ id: 2, content: 'hoge' })
  const copy = list.clone()
  t.not(list, copy)
  t.deepEqual(list, copy)
})

test('List<T>().size', (t) => {
  const list = new List<any>()
  list.add({ id: 0 })
  list.add({ id: 1 })
  list.add({ id: 2 })
  t.is(list.size, 3)
})
