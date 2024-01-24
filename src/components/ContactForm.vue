<template>
    <form action="" @submit.prevent="submitForm">
       

<div class="mb-3">
  <label for="name" class="form-label">name</label>
  <input class="form-control" type="text" id="name" v-model="name">
</div>
<div class="mb-3">
  <label for="email" class="form-label">email</label>
  <input class="form-control" type="email" id="email" v-model="email">
</div>
<div class="mb-3">
  <label for="address" class="form-label">address</label>
  <input class="form-control form-control-sm" id="address" type="text" name="address" v-model="address">
</div>
<div class="mb-3">
  <label for="message" class="form-label">message</label>
  <textarea class="form-control form-control-sm" id="message" v-model="message" ></textarea>
</div>
<button type="submit">invia</button>
<button type="reset">reset</button>
</form>
</template>

<script>
import {store} from '../data/store';
import axios from "axios";
    export default {
        name :' ContactForm',
        data(){
            return{
                store,
               
                name:'',
                email:'',
                address:'',
                message:''

            }
        },
        methods:{

            submitForm(){
                const data = {
                    name:this.name,
                    email:this.email,
                    address:this.address,
                    message:this.message
                }
                // console.log('funziona');
                axios.post(`${this.store.apiUrl}/contacts`, data).then((res)=>{
                    console.log(res.data);
                    this.name='';
                    this.email='';
                    this.address='';
                    this.message='';
                }).catch((err)=>{
                    console.log('error', err);
                })
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>