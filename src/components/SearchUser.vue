<template>
  <div class="searchform">
    
    <h4>Find by Name</h4>
    <div class="form-group">
      <input type="text" class="form-control" id="firstName" required v-model="firstName" name="firstName">
    </div>
 
    <div class="btn-group">
      <button v-on:click="searchUsers" class="btn btn-success">Search</button>
    </div>
 
    <ul class="search-result">
      <li v-for="(user, index) in users" :key="index">
        <h6>{{user.firstName}} ({{user.lastName}})</h6>
      </li>
    </ul>
    <div v-if="noData" class="text-danger">
        <span>No data Found for {{firstName}}</span>
      </div>
  </div>
</template>
 
<script>
import http from "../http-common";

export default {
  name: "search-user",
  data() {
    return {
      firstName: "",
      users: [],
      noData: false
    };
  },
  methods: {
    /* eslint-disable no-console */
    searchUsers() {
      http
        .get("/users/" + this.firstName)
        .then(response => {
          this.users = response.data; // JSON are parsed automatically.

          if(this.users.length == 0){
            this.noData = true;
          }else{
          this.noData = false;
          console.log(response.data);
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
    /* eslint-enable no-console */
  }
};
</script>
 
<style>
.searchform {
  max-width: 300px;
  margin: auto;
}
.search-result {
  margin-top: 20px;
  text-align: left;
}
</style>