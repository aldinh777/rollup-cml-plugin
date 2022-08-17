import { extname } from 'path';
import { parseCML } from '@aldinh777/cml-parser';

export default function () {
    return {
        name: 'parse-cml',
        transform(source, id) {
            if (extname(id) === '.cml') {
                const cmlTree = parseCML(source);
                return `export default ${JSON.stringify(cmlTree, null, 2)}`;
            }
            return null;
        }
    }
}
