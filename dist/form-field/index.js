Component({
    behaviors: ['wx://form-field'],

    externalClasses: ['i-class'],

    properties: {
        title: {
            type: String,
            value: ''
        },
        mode: {
            type: String,
            value: 'normal'
        },
        error: {
            type: Boolean,
            value: false
        }
    },

    methods: {
    }
});
