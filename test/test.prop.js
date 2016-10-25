/**
 * Created by imamudin.naseem on 25/10/16.
 */

'use strict'

import prop from '../utils/prop'
import test from 'ava'

test('path', t => {
  const obj = {
    a: 1,
    b: {
      c: 2
    },
    d: "Hello",
    e: {
      f: 3
    }
  }
  t.deepEqual(prop('d', obj), 'Hello')
  t.deepEqual(prop('z', obj), undefined)
})