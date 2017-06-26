import { test } from 'ava'
import Comment from '../Comment'

test('Comment', (t) => {
  const c: Comment = new Comment({
    bottom: 3,
    content: 'sample',
    id: 0,
    name: 'sample',
  })
  t.is(c.content, 'sample')
  t.is(c.id, 0)
  t.is(c.bottom, '4em')
})
