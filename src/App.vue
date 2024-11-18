<template>
  <button
    type="button"
    class="btn btn-primary collapse-toggle"
    id="basic-collapse"
    aria-expanded="false"
    aria-controls="basic-collapse-heading"
    data-collapse="#basic-collapse-heading"
  >
    <span class="collapse-open:hidden">Collapsed</span>
    <span class="hidden collapse-open:block">Collapse</span>
    <span
      class="transition-rotate icon-[tabler--chevron-down] size-4 duration-300 collapse-open:rotate-180"
    ></span>
  </button>
  <div
    id="basic-collapse-heading"
    class="collapse hidden w-full overflow-hidden transition-[height] duration-300"
    aria-labelledby="basic-collapse"
  >
    <div class="mt-3 rounded-md border border-base-content/25 p-3">
      <p class="text-base-content/80">
        The collapsible body remains hidden until the collapse plugin adds
        specific classes. These control appearance and manage visibility through
        transitions.
      </p>
    </div>
  </div>
</template>
