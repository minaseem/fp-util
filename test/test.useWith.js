/**
 * Created by imamudin.naseem on 26/10/16.
 */

'use strict'

import useWith from '../utils/useWith'
import test from 'ava'

test('path', t => {
  const add = (a, b) => a + b
  const mult3 = a => a * 3
  const add3 = a => a * 3
  t.deepEqual(useWith(add, [add3, mult3])(3, 4), 21)
  t.deepEqual(useWith(add, [add3, mult3])(3, 0), 9)
})