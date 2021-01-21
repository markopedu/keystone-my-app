const { Text, Select,  } = require('@keystonejs/fields');
const { AuthedRelationship } = require('@keystonejs/fields-authed-relationship');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');


const Post = {
    fields: {
        title: { type: Text },
        status: {
            type: Select,
            defaultValue: 'draft',
            options: [
                { label: 'Draft', value: 'draft' },
                { label: 'Published', value: 'published' },
            ],
        },
        author: {
            type: AuthedRelationship,
            ref: 'User',
            isRequired: true,
        },
        body: { type: Wysiwyg },
    },
    labelResolver: item => item.title,
};

module.exports = Post;
