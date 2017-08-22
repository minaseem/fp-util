/**
 * Created by imamudin.naseem on 25/10/16.
 */

'use strict'

import {pickAll} from '../utils/pickAll'
import test from 'ava'

test('pickAll', t => {
  const obj = {
    a: 1,
    b: 'b',
    c: {
      d: 'Hello'
    },
    e: 'Bye'
  }
  t.deepEqual(pickAll(['a', 'c', 'e'], obj), {a: 1, c: {d: 'Hello'}, e: 'Bye'})
  t.deepEqual(pickAll(['a', 'd'], obj), {a: 1, d: undefined})
})