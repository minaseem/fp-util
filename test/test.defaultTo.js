/**
 * Created by imamudin.naseem on 26/10/16.
 */

'use strict'
import defaultTo from '../utils/defaultTo'
import test from 'ava'

test('path', t => {
  t.deepEqual(defaultTo(32)(23), 23)
  t.deepEqual(defaultTo(32)(null), 32)
  t.deepEqual(defaultTo('Hello')(undefined), 'Hello')
  t.deepEqual(defaultTo(32)(NaN), 32)
  t.deepEqual(defaultTo(32)("Hello"), 'Hello')
})