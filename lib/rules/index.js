module.exports = {
    rules: {
        "usages": {
            create: function (context) {
                return {
                    VariableDeclarator(node) {
                        if (node.init && node.init.type === 'TaggedTemplateExpression') {
                            const tag = node.init.tag;
                            if (tag.type === 'MemberExpression' && tag.object.name === 'styled') {
                                context.report({
                                    node,
                                    message: 'Using styled-components to create styled components is not allowed.'
                                });
                            }
                        }
                    }
                };
            }
        },
        "imports": {
            create: function (context) {
                return {
                    ImportDeclaration(node) {
                        const source = node.source.value;
                        if (source.startsWith('styled-components')) {
                            context.report({
                                node,
                                message: `Importing from "${source}" is not allowed.`
                            });
                        }
                    }
                };
            }
        },
    }
};
