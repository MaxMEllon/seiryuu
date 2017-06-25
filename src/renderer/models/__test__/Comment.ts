import { test } from 'ava'
import Comment from '../Comment'

test('Comment', (t) => {
  const c: Comment = new Comment('sample', 0, 2)
  t.is(c.content, 'sample')
  t.is(c.id, 0)
  t.is(c.bottom, '3em')
})
