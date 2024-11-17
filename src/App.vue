<template>
  <button
  type="button"
  class="collapse-toggle btn btn-primary"
  id="basic-collapse"
  aria-expanded="false"
  aria-controls="basic-collapse-heading"
  data-collapse="#basic-collapse-heading"
>
  <span class="collapse-open:hidden">Collapsed</span>
  <span class="collapse-open:block hidden">Collapse</span>
  <span class="icon-[tabler--chevron-down] collapse-open:rotate-180 transition-rotate size-4 duration-300"></span>
</button>
<div
  id="basic-collapse-heading"
  class="collapse hidden w-full overflow-hidden transition-[height] duration-300"
  aria-labelledby="basic-collapse"
>
  <div class="border-base-content/25 mt-3 rounded-md border p-3">
    <p class="text-base-content/80">
      The collapsible body remains hidden until the collapse plugin adds specific classes. These control appearance and
      manage visibility through transitions.
    </p>
  </div>
</div>
</template>