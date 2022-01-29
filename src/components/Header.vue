<template>
  <nav class="navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <!-- pc -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link class="nav-link px-4 py-3" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-4 py-3" to="/Profile">
              Profile
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-4 py-3" to="/Works">
              Works
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-4 py-3" to="/Experience">
              Experience
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-4 py-3" to="/News">
              News
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-4 py-3" to="/Contact">
              Contact
            </router-link>
          </li>
        </ul>
      </div>
      <!-- sp -->
      <ul class="sp px-5">
        <li>
          <router-link class="ancar text-black" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="ancar text-black" to="/Profile">
            Profile
          </router-link>
        </li>
        <li>
          <router-link class="ancar text-black" to="/Works">
            Works
          </router-link>
        </li>
        <li>
          <router-link class="ancar text-black" to="/Experience">
            Experience
          </router-link>
        </li>
        <li>
          <router-link class="ancar text-black" to="/News">
            News
          </router-link>
        </li>
        <li>
          <router-link class="ancar text-black" to="/Contact">
            Contact
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
nav {
  height: 56px;
}
.nav-link:hover {
  background-color: rgba(188, 93, 158, 0.5);
  transition: 0.5s;
}
.sp {
  display: none;
}
@media screen and (max-width: 800px) {
  .collapse {
    display: none;
  }
  .sp {
    display: block;
  }
  nav {
    height: 80px;
  }
  ul {
    overflow: hidden;
  }
  ul li {
    float: left;
    list-style: none;
  }
  .ancar {
    display: block;
    padding: 4px 4px;
  }
}
</style>
