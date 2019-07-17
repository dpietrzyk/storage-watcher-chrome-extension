const template = `
    <span :style="{backgroundColor}"
        class="list-row-ribbon"/>
`;

export default {
    template,
    props: {
        backgroundColor: {
            type: String,
            required: true,
        },
    },
};


