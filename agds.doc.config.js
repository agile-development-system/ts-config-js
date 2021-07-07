/*
 * @Author: 锦阳
 * @Create: 2021年05月31日
 */
const GenDoc = require('@agds/cli-plugin-doc');
const fs = require('fs-extra');
const { FastPath } = require('@agds/node-utils');
const preset = require('@agds/agds-doc-preset');
module.exports = (
    /**
     * 配置参数
     *
     * @returns {GenDoc.RenderOptions}
     */
    async () => {
        const [source] = (await Promise.all([
            GenDoc.getFilesCode({ dir: '.', files: ['tsconfig.json'] }),
        ]));
        return {
            presets: [preset],
            helpers: {
                remark: '### 引入\n' +
                '```json\n' +
                '// tsconfig.json\n' +
                 fs.readFileSync(FastPath.getCwdPath('./docs/import.json'), { encoding: 'utf-8' }) +
                '```\n',
                postfixes: [
                    {
                        id: 'source',
                        title: '配置源码',
                        content: GenDoc.renderCode(source),
                    },
                ],
            },
        };
    })();
