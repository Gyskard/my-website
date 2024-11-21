<template>
<div id="carousel-5" data-carousel='{ "loadingClasses": "opacity-0" }' class="relative mt-10 mb-10 w-112">
  <div class="carousel h-96">
    <div class="carousel-body h-3/4 opacity-0">
      <!-- Slide 1 -->
      <div class="carousel-slide">
        <div class="flex size-full justify-center">
          <img src="./1.jpg" class="size-full object-contain" alt="mountain" />
        </div>
      </div>
      <!-- Slide 2 -->
      <div class="carousel-slide">
        <div class="flex size-full justify-center">
          <img src="./2.jpg" class="size-full object-contain" alt="mountain" />
        </div>
      </div>
      <!-- Slide 3 -->
      <div class="carousel-slide">
        <div class="flex size-full justify-center">
          <img src="./3.jpg" class="size-full object-contain" alt="mountain" />
        </div>
      </div>
    </div>
    <div class="carousel-pagination bg-base-100 bottom-0 z-[1] h-1/4 justify-between gap-2 space-x-0 pt-2 overflow-y-auto">
      <img
        src="./1.jpg"
        class="carousel-active:opacity-100 grow object-contain opacity-30"
        alt="mountain"
      />
      <img
        src="./2.jpg"
        class="carousel-active:opacity-100 grow object-contain opacity-30"
        alt="sand"
      />
      <img
        src="./3.jpg"
        class="carousel-active:opacity-100 grow object-contain opacity-30"
        alt="cloud"
      />
    </div>
  </div>
  <!-- Previous Slide -->
  <button type="button" class="carousel-prev">
    <span class="mb-15" aria-hidden="true">
      <span class="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
        <span class="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180"></span>
      </span>
    </span>
    <span class="sr-only">Previous</span>
  </button>
  <!-- Next Slide -->
  <button type="button" class="carousel-next">
    <span class="sr-only">Next</span>
    <span class="mb-15" aria-hidden="true">
      <span class="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
        <span class="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180"></span>
      </span>
    </span>
  </button>
</div>
</template>