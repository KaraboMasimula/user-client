<template>
    <div class="row">
        <div class="col-md-4">
            <h1>User list</h1>
            <ul class="list">
                <li v-for="(user, index) in users" :key="index" >
                    <router-link :to="{
                        name: 'user-details',
                        params: {user:user, id: user.id}
                        }">
                        <h2 class="user-link">{{user.firstName}}</h2>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="col-md-4">
            <router-view @refreshData="refreshList"></router-view>
        </div>
    </div>
</template>

<script>
import http from "../http-common";

export default {
  name: "user-list",
  data() {
    return {
      users: []
    };
  },
  methods: {
    getUsers() {
      http
        .get("/users")
        .then(response => {
          this.users = response.data;
          console.log(response.data);
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.getUsers();
    }
  },
  mounted() {
    this.getUsers();
  }
};
</script>

<style>
.list {
  text-decoration: none;
  text-align: left;
  max-width: 450px;
  margin: auto;
}
ul{text-decoration: none;}
li{text-decoration: none;}
.user-link{
  font-size: 25px;
  color: black;
}
.user-link:hover{
  color: white;
  background-color: darkgrey;
  text-decoration: none;
  border-radius: 5px;
}
</style>