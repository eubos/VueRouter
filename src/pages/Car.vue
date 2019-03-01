<template>
<div>
    <h1>Car id {{id}}</h1>  
    <button class="btn btn-sm btn-default" @click="goBackToCars">Back</button>
   
    <router-link class="btn btn-info"
     tag="button"
     :to="{name: 'carFull', params:{id:id}, query:{name: 'Mazda', year: 2002}, hash: '#scroll'}">
     Full info</router-link>
    <router-view></router-view>
</div>
</template>
<script>
export default {
    data(){
        return{
        id: this.$route.params['id']
        }
    },
    methods:{
        goBackToCars(){
            this.$router.push('/')
        }
    },
    watch:{
        $route(toR, fromR){
            this.id = toR.params['id']
        }
    },
    beforeRouteLeave (to, from, next) {
        console.log('beforeRouterLeave')
        if (confirm('Are you sure you want leave?')) {
            next()
        }
        else{ next(false)}
        
    }
}
</script>
<style>

</style>
