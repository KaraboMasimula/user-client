<template>
  <div class="submitform">
      <div v-if="!submitted">
        <h1>Add User</h1>
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

        <div class="form-group">
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

        <div class="form-group">
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

        <button v-on:click="saveUser" class="btn btn-success">Submit</button>
      </form>
    </div>
    
    <div v-else >
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" v-on:click="newUser">Add</button>
    </div>
  </div>
</template>
 
<script>
import http from "../http-common";

export default {
  name: "add-user",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        married: false,
        dateOfBirth: "",
        gender: "",
        dateOfMarriage: "",
        photo: "",
        email: "",
        password: "",
      },
      submitted: false
    };
  },
  methods: {
    saveUser() {
      var data = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        married: status,
        dateOfBirth: this.user.dateOfBirth,
        gender: this.user.gender,
        dateOfMarriage: this.user.dateOfMarriage,
        photo: this.user.photo,
        email: this.user.email,
        password: this.user.password
      };

      http
        .post("/users", data)
        .then(response => {
          this.user.id = response.data.id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

      this.submitted = true;
    },
    newUser() {
      this.submitted = false;
      this.user = {};
    },
    logUser() {
      console.log("Subiad");
    }
  },
  mounted() {
    this.logUser();
  }
};
</script>
 
<style>
.submitform {
  max-width: 300px;
  margin: auto;
}
</style>