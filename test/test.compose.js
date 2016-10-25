/**
 * Created by imamudin.naseem on 25/10/16.
 */

'use strict'

import compose from '../utils/compose'
import test from 'ava'

test('path', t => {
  const add3 = a => a + 3
  const mult3 = a => a * 3
  t.deepEqual(compose(add3, mult3)(10), 33)
  t.deepEqual(compose(add3, mult3)(0), 3)
})