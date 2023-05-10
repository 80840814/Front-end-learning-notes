const app = Vue.createApp({
    data() {
        return {
            name: '根组件'
        }
    },
    template: `<div>{{name}}<xjdemo/></div>`
})
app.component('xjdemo', {
    data() {
        return {
            name: 'demo'
        }
    },
    template: `<h2 style="background-color:red;color:white;">{{name}}</h2>`
    //  template:''
    // template:`{{ame}}`
})
const vm = app.mount('#app')