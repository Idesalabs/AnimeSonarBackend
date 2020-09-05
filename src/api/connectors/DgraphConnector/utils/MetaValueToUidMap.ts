import { chain } from 'lodash';
import { UidMap } from 'src/types';
import { MetaValue } from './getMeta';


export default (value: MetaValue): UidMap => {

    return chain(value).keyBy('name').mapValues('uid').value();
};
