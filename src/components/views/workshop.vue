<template>
  <div class="workshop-page w-full pb-[120px]">
    <!-- Hero / Banner -->
    <section class="relative w-full h-60">
      <img
        src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/bg/sub-event-bg.jpg"
        class="w-full h-full object-cover"
        alt="Hero background"
      />
      <div class="absolute inset-0 bg-purple-400/50 opacity-60"></div>
      <div
        class="bg-black w-full py-2 text-white flex items-center justify-center absolute bottom-0"
      >
        Home &gt; Workshops
      </div>
    </section>

    <!-- Two-line gap -->
    <div class="h-8"></div>

    <!-- Main content -->
    <section class="py-16 px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold text-center text-[#1d3557] mb-6">
          Workshops
        </h1>

        <!-- big TBA block centered -->
        <div class="py-16">
          <div
            class="bg-purple-100 border border-purple-300 text-purple-700 rounded-lg p-10 shadow-md flex items-center justify-center"
          >
            <div class="text-center">
              <div class="text-3xl font-bold mb-2">TBA</div>
              <p class="text-sm text-gray-600">
                Detailed workshop schedules and descriptions will be posted here
                soon. Please check back later.
              </p>
            </div>
          </div>
        </div>

        <!-- optional placeholder for later: a small note -->
        <p class="text-xs text-center text-gray-500">
          If you have workshop proposals or enquiries, email:
          <a href="mailto:sirkm2025@gmail.com" class="text-yellow-500 underline">sirkm2025@gmail.com</a>
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
// no script needed (placeholder component)
</script>

<style scoped>
/* small tweak if you want narrower hero on very small screens */
@media (max-width: 420px) {
  section.relative.w-full.h-60 img {
    object-position: center top;
  }
}
</style>
