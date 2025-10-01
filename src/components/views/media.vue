<template>
  <div class="media-page w-full pb-[120px]">
    <!-- Hero / Banner -->
    <section class="relative w-full h-60">
      <img
        src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/bg/sub-event-bg.jpg"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-purple-400/50 opacity-60"></div>
      <div
        class="bg-black w-full py-2 text-white flex items-center justify-center absolute bottom-0"
      >
        Home > Media
      </div>
    </section>

    <!-- Two-line gap -->
    <div class="h-8"></div>

    <div class="container mx-auto px-6 mt-12">
      <!-- Posters + Buttons Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 text-center">
        <!-- Seminar Poster -->
        <div>
          <a
            href="/seminarposter.jpg"
            download="SeminarPoster.jpg"
            class="inline-block bg-gradient-to-r from-purple-800 to-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:from-purple-900 hover:to-purple-600 text-sm font-semibold transition-all duration-300 mb-4"
          >
            Seminar Poster
            <i class="fas fa-download ml-2"></i>
          </a>
          <!-- Two-line gap -->
          <div class="h-8"></div>
          <img
            src="/seminarposter.jpg"
            alt="Seminar Poster"
            class="rounded-lg shadow-md mx-auto"
          />
        </div>

        <!-- Virtual Background -->
        <div>
          <a
            href="/virtualbackground.jpg"
            download="VirtualBackground.jpg"
            class="inline-block bg-gradient-to-r from-purple-800 to-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:from-purple-900 hover:to-purple-600 text-sm font-semibold transition-all duration-300 mb-4"
          >
            Virtual Background
            <i class="fas fa-download ml-2"></i>
          </a>
          <!-- Two-line gap -->
          <div class="h-8"></div>
          <img
            src="/virtualbackground.jpg"
            alt="Virtual Background"
            class="rounded-lg shadow-md mx-auto"
          />
        </div>
      </div>

      <!-- Picture Gallery -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold text-center mb-8">Picture Gallery</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/gallery/sirkm5.jpg"
            class="rounded-lg shadow-md"
          />
          <img
            src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/gallery/sirkm9.jpg"
            class="rounded-lg shadow-md"
          />
          <img
            src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/gallery/sirkm7.jpg"
            class="rounded-lg shadow-md"
          />
          <img
            src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/gallery/sirkm8.jpg"
            class="rounded-lg shadow-md"
          />
          <img
            src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/gallery/sirkm10.jpg"
            class="rounded-lg shadow-md"
          />
          <img
            src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/gallery/sirkm6.jpg"
            class="rounded-lg shadow-md"
          />
          <img
            src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/gallery/sirkm12.jpg"
            class="rounded-lg shadow-md"
          />
          <img
            src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/gallery/sirkm11.jpg"
            class="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
