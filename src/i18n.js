import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './messages.js'

Vue.use(VueI18n);

export default new VueI18n({
    locale: 'de', // set locale // de, en, zh, ja
    messages // set locale messages
})
