/**
 * Created by imamudinnaseem on 8/23/17.
 */

import test from 'ava'
import {mapObj} from '../utils/mapObj'

test("mapObj", t => {
    const input = {
        name: 'John',
        age: 25,
        occupation: 'Actor'
    }
    const output = {
        name: 'Profile-John',
        age: 'Profile-25',
        occupation: 'Profile-Actor'
    }
    t.deepEqual(mapObj(x => "Profile-" + x, input), output)
});
