import Store from '../../vuex/Store.js';

const template = `
<v-toolbar flat>
    <v-list>
        <v-list-item>
            <v-list-item-title class="title">
                <span>
                    Available channels
                </span>
                    
                <v-spacer/>

                <v-btn text
                       icon
                       @click.stop="Store.toggleSync()">

                    <v-icon v-if="$store.state.sync">
                        pause_circle_outline
                    </v-icon>

                    <v-icon v-else>
                        play_circle_outline
                    </v-icon>
                
                </v-btn>
            </v-list-item-title>
        </v-list-item>
    </v-list>
</v-toolbar>
`;

export default {
    template,
    data: () => ({Store}),
};


