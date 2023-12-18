module.exports = {
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
};
