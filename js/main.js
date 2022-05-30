const app = new Vue({
    el: '#app',
    data: {
        emailList: [],
    },

    created() {
        for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                // handle success
                // console.log(res.data.response);
                this.emailList.push(res.data.response);
                console.log(this.emailList);
            })           
        }
    },
});