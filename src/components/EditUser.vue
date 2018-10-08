<template>
    <div v-if="this.user" class="container">
      <div v-if="!submitted">
          <h1>Edit {{user.firstName}}</h1>
      <form>
        <div class="form-group">
          <label for="firstName">Name</label>
          <input type="text" class="form-control" id="firstName" required v-model="user.firstName" name="firstName">
        </div>
    
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" class="form-control" id="lastName" required v-model="user.lastName" name="lastName">
        </div>

        <div class="form-group">
          <label for="married">Married</label>
          <input type="checkbox" class="form-control" id="married" name="married" required v-model="user.married">
        </div>

        <div  class="form-group">
          <label for="dateOfBirth">Date Of Birth</label>
          <input type="date" class="form-control" id="dateOfBirth" required v-model="user.dateOfBirth" name="dateOfBirth">
        </div>

        <div class="form-group">
          <label for="gender">Gender</label>
          <select class="form-control" name="gender" id="gender" v-model="user.gender" >
            <option value="Male">Female</option>
            <option value="Female">Male</option>
          </select>
        </div>

        <div v-if="this.user.married" class="form-group">
          <label for="dateOfMarriage">Date Of Mariage</label>
          <input type="date" class="form-control" id="dateOfMarriage" required v-model="user.dateOfMarriage" name="dateOfMarriage">
        </div>

        <div class="form-group">
          <label for="photo">Photo</label>
          <input type="text" class="form-control" id="photo" required v-model="user.photo" name="photo">
        </div>
        <hr>

        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="text" class="form-control" id="email" required v-model="user.email" name="email">
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="text" class="form-control" id="password" required v-model="user.password" name="password">
        </div>

        <button v-on:click="updateUser" class="btn btn-success">Update</button>
        <button v-on:click="cancel" class="btn btn-success">Cancel</button>
      </form>
    </div>
    
    <div v-else >
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" v-on:click="cancel">Continue</button>
    </div>
  </div>
</template>

<script>

import Vue from 'vue';
import http from "../http-common";

export default({
    name: "edit-user",
    props: ["user"],
    data(){
        return{
            submitted: false
        }
    },
    methods:{
        updateUser(){
            http
                .put("/users/"+this.user.id , this.user)
                .then(response => {
                    console.log(response.data);
                    this.submitted = true;
                }).catch (e => {
                    console.log(e);
                    this.submitted = false;
                })
        },
        cancel(){
            this.$emit("refreshData");
            this.$router.push("/");
        }
    }
})

</script>

<style>

</style>
