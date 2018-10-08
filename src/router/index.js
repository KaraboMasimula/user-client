import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from "@/components/User.vue";
import AddUser from "@/components/AddUser.vue";
import UserList from "@/components/UserList.vue";
import SearchUser from "@/components/SearchUser.vue";
import EditUser from "@/components/EditUser";
import Login from "@/components/Login";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: 'login',
      component: Login
    },
    {
      path: '/users',
      name: 'users',
      component: UserList,
      children: [
        {
          path: "user/:id",
          name: "user-details",
          component: User,
          props: true
        },
        {
          path: "/edit",
          name: "edit-user",
          component: EditUser,
          props: true
        }
      ]
    },
    {
      path: "/add",
      name: "add",
      component: AddUser
    },
    {
      path: "/search",
      name: "search",
      component: SearchUser
    },

  ]
})
