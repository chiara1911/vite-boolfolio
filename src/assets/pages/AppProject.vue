<template>
    <div>
        <h1>Project List</h1>
<ul>
    <!-- <li v-for="project in store.state.project" :key="project.id">{{ project.title }}

    </li> -->
    <li v-for = "project in store.project">

    </li>
</ul>
    </div>
</template>

<script>

import {store} from '../../data/store.js';
import axios from 'axios';
    export default {
        name:'AppProject',
        data(){
            return {
                store
            }
        },
        methods:{
            getAllProjects(){
                axios.get(this.store.apiUrl + '/projects').then((res)=>{
                    console.log(res.data);
                    this.store.projects = res.data.results.data;
                }
            )}
        }
    }
</script>

<style lang="scss" scoped>

</style>