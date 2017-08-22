/**
 * Created by imamudin.naseem on 25/10/16.
 */

'use strict'

import {path} from '../utils/path'
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
  t.deepEqual(path(['b', 'c'], obj), 2)
  t.deepEqual(path(['b', 'd'], obj), undefined)
  t.deepEqual(path(['e'], obj), {f: 3})
  t.deepEqual(path(['d'], obj), 'Hello')
})