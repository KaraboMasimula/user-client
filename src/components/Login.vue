<template>
    
    <div class="container">
        <form class="login-form center">
            <h1>Enter Your Login Details!</h1>
            <br>
            <div class="text-danger" v-if="loginFail">
                Incorrect Username and Password!!
            </div>
            <div class="form-group">
                <input type="email" class="form-control" name="email" id="email" v-model="credentials.email" required
                    placeholder="Enter Username">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="password" id="password" v-model="credentials.password" required
                    placeholder="Enter password">
            </div>
            <div class="btn-group">
                <button class="btn btn-success" v-on:click="login">Submit</button>
            </div>
            
        </form>
    </div>

</template>

<script>
import Vue from 'vue';
import http from "../http-common";

export default {
    name: "login",
    data() {
        return{
            credentials: {
                email: "",
                password: "",
            },
            loginFail: false,
        }
    },
    methods:{
        login(){
            http
                .get("/login?email="+this.credentials.email+"&password="+this.credentials.password)
                .then(response => {
                    console.log("success:"+response);
                }).catch(error => {
                    console.log("error:"+error.data);
                
                })
        }
    }    
}
</script>

<style>
.login-form{
    max-width: 500px;
    margin: auto;
}
.btn{
    text-align: center;
    margin: auto
}
</style>
