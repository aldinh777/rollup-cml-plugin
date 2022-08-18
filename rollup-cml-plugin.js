const { extname } = require('path');
const { parseCML } = require('@aldinh777/cml-parser');

module.exports = function () {
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
