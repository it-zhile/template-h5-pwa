import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './lang/zh'
import vi from './lang/vi'
import store from '@/store'

Vue.use(VueI18n)

const messages = {vi,zh};

const i18n = new VueI18n({
    silentTranslationWarn: process.env.NODE_ENV === 'production',
    locale: store.state.lang,
    messages
});

export default i18n