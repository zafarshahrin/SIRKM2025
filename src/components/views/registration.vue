<template>
  <div class="registration-page w-full pb-[120px]">
    <!-- Hero / Banner -->
    <section class="relative w-full h-60">
      <img
        src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/bg/sub-event-bg.jpg"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-orange-500 opacity-60"></div>
      <div
        class="bg-black w-full py-2 text-white flex items-center justify-center absolute bottom-0"
      >
       Home > Registration
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-12 px-6 md:px-16">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <!-- LEFT COLUMN -->
        <div>
          <!-- Fee Table -->
          <h2 class="text-2xl font-bold mb-4">FEE</h2>
          <table class="w-full border border-gray-200 text-sm">
            <thead>
              <tr class="bg-gray-50">
                <th class="border border-gray-200 px-4 py-2 text-left">Category</th>
                <th class="border border-gray-200 px-4 py-2 text-left">Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-200 px-4 py-2">
                  Presenter or Participant who are PECAMP Members:
                </td>
                <td class="border border-gray-200 px-4 py-2">RM100 / USD25</td>
              </tr>
              <tr>
                <td class="border border-gray-200 px-4 py-2">
                  Presenter or Participant:
                </td>
                <td class="border border-gray-200 px-4 py-2">RM125 / USD30</td>
              </tr>
              <tr>
                <td class="border border-gray-200 px-4 py-2" colspan="2">
                  Let's become a PECAMP member:
                  <a href="http://pecamp.org/main/membership.php" target="_blank" class="text-yellow-500 hover:underline ml-1">
                    http://pecamp.org/main/membership.php
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- PECAMP Flyer -->
          <h2 class="text-2xl font-bold mt-10 mb-4">PECAMP FLYERS</h2>
          <div class="flex items-start gap-6">
            <img
              src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/PECAMP%20flyers.png"
              alt="PECAMP Flyers"
              class="rounded-lg shadow-md w-140 object-cover"
            />

          </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div>
          <!-- Payment Method -->
          <h2 class="text-2xl font-bold mb-4">PAYMENT METHOD</h2>
          <p class="text-sm leading-relaxed mb-50">
            Payment should be made through Online Transfer / Bank Transfer /
            Telegraphic Transfer to the following account:
          </p>
          <div class="bg-gray-50 p-4 rounded-lg text-sm mb-200 border border-gray-100">
            <p><strong>Bank:</strong> CIMB Bank</p>
            <p><strong>Account Name:</strong> Persatuan Pengurusan Maklumat Malaysia</p>
            <p><strong>Account Number:</strong> 8602645308</p>
            <p><strong>Swift Code:</strong> CIBBMYKL</p>
            <p><strong>Branch:</strong> CIMB Bank Berhad, UKM Bangi, Selangor</p>
          </div>

          <!-- Important Notes -->
          <h2 class="text-2xl font-bold mb-200">IMPORTANT NOTES</h2>
          <ul class="list-disc pl-6 text-sm mb-8 space-y-2 text-gray-700">
            <li>All participants must register online.</li>
            <li>Proof of payment must be uploaded during registration.</li>
            <li>Conference fees are non-refundable but transferable.</li>
          </ul>

          <!-- Registration Form -->
          <h2 class="text-2xl font-bold mb-4">REGISTRATION FORM</h2>
          <a
            href="#"
            target="_blank"
            class="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 text-sm font-semibold"
          >
            CLICK HERE TO REGISTER
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>
