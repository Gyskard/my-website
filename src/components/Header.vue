<template>
  <div class="container mx-auto mt-4">
    <div class="flex justify-center">
      <ul class="menu sm:menu-horizontal">
        <li>
          <RouterLink to="/">
            <span class="icon-[tabler--home] size-5"></span>
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/career">
            <span class="icon-[tabler--device-desktop-analytics] size-5"></span>
            Career
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/travel">
            <span class="icon-[tabler--globe-filled] size-5"></span>
            Travel
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/photos">
            <span class="icon-[tabler--camera] size-5"></span>
            Photos
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/contact">
            <span class="icon-[tabler--phone-call] size-5"></span>
            Contact
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
