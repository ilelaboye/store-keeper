import VueI18n from 'vue-i18n'
import Vue from 'vue'
import EnIndex from './en/index'
import FrIndex from './fr/index'

Vue.use(VueI18n);
var lang=window.localStorage.getItem('language');
if(!lang){
	window.localStorage.setItem('language', process.env.VUE_APP_DEFAULT_LANG);
}else{
	if(lang == 'undefined'){ 
		window.localStorage.setItem('language', process.env.VUE_APP_DEFAULT_LANG);
	}
}
// Create VueI18n instance with options
const i18n = new VueI18n({
	locale: window.localStorage.getItem('language'), // set locale
	messages:{  
		en : EnIndex,
        fr : FrIndex,
	},
	silentTranslationWarn: true
});

export default i18n;
