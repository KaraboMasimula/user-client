<template>
  <div v-if="this.user">
    <h4>User</h4>
    <div>
      <label>Name: </label> {{this.user.firstName}}
    </div>
    <div>
      <label>Last Name: </label> {{this.user.lastName}}
    </div>
    <div>
      <label>Married: </label> {{this.user.married}}
    </div>
    <div>
      <label>Date Of Birth: </label> {{this.user.dateOfBirth}}
    </div>
    <div>
      <label>Gender: </label> {{this.user.gender}}
    </div>
    <div v-if="this.user.married">
      <label>Date Of Marriage: </label> {{this.user.dateOfMarriage}}
    </div>
    <div>
      <label>Photo: </label> {{this.user.photo}}
    </div>

    <hr>
    <div>
      <label>Email: </label> {{this.user.email}}
    </div>
    <div>
      <label>Password: </label> {{this.user.password}}
    </div>
  
    <hr>
    <span v-if="this.user.married"
      v-on:click="updateMarried(false)"
      class="btn is-small btn-primary">Divorce</span>
    <span v-else
      v-on:click="updateMarried(true)"
      class="btn btn-primary">Marry</span>
  
    <span class="btn btn-danger" v-on:click="deleteUser()">Delete</span>
    <router-link :to="{
                        name: 'edit-user',
                        params: {user:this.user , id: this.user.id}
                        }">
        <button class="btn btn-success">Edit User</button>
    </router-link>
  </div>
  <div v-else>
    <br/>
    <p>Please click on a User...</p>
  </div>
</template>

<script>
import http from "../http-common";

export default {
  name: "user",
  props: ["user"],
  methods: {
    updateMarried(status) {
      var newUser = {
        id: this.user.id,
        firstName: this.user.firstName,
        firstName: this.user.firstName,
        married: status,
        dateOfBirth: this.user.dateOfBirth,
        gender: this.user.gender,
        dateOfMarriage: this.user.dateOfMarriage,
        photo: this.user.photo,
        email: this.user.email,
        password: this.user.password
      };

      http
        .put("/users/" + this.user.id, newUser)
        .then(response => {
          this.user.married = newUser.married;
          console.log(response.data);
          this.$emit("refreshData");
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteUser() {
      http
        .delete("/users/" + this.user.id)
        .then(response => {
          console.log(response.data);
          this.$emit("refreshData");
          this.$router.push("/");
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>