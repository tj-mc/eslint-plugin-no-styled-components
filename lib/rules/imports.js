module.exports = {
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
};
