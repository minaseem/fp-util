/**
 * Created by imamudin.naseem on 25/10/16.
 */

'use strict'

import {pipe} from '../utils/pipe'
import test from 'ava'

test('pipe', t => {
  const add3 = a => a + 3
  const mult3 = a => a * 3
  t.deepEqual(pipe(add3, mult3)(10), 39)
  t.deepEqual(pipe(add3, mult3)(0), 9)
})