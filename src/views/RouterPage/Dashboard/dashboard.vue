<template>
  <div>
    <h2>User Settings</h2>
    <div class="us">
      <div class="us__nav">
        <router-link to="/dashbaord/emails">emails</router-link>
        <br>
        <router-link to="/dashbaord/profile">profile</router-link>
      </div>
      <div>
        <router-view class ="us__content"/>
        <router-view name="helper" class="us__content us__content--helper"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.us {
  display: flex;
}
h2 {
  grid-area: header;
}

.us__nav {
  width: 200px;
  border-right: 1px solid #e3e3e3;
}
.us__content {
  flex: 1
}
.us__content--helper {
  background: #e9e9e9;
}
</style>
