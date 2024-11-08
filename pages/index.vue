<template>
  <v-row>
    <v-col>
      <v-sheet class="d-flex align-center justify-center flex-wrap text-left">
        <div>
          <h1 class="font-weight-black">Yeow Kok Guan</h1>
          <div class="text-h4 mb-5">
            Fresh Graduate
          </div>
          <p class="text-h6 mb-4 font-weight-thin">
            As a recent graduate with a Bachelor’s Degree in Computer Science specializing in Intelligent Computing from Universiti Sains Malaysia (USM),
            I am driven by a passion for developing innovative solutions and pushing the boundaries of technology.
            My experience as a Software Engineer intern at Sophic Automation Sdn Bhd allowed me to gain practical skills in full-stack web development
            and enhanced my ability to create efficient, user-focused applications.
          </p>
          <p class="text-h6 mb-4 font-weight-thin">
            I am deeply committed to advancing my expertise in software engineering, intelligent computing, and problem-solving.
            I am actively seeking an opportunity to contribute to a forward-thinking organization where I can leverage my skills in web development,
            data management, and system automation to deliver impactful solutions.
            With a strong foundation in programming languages and frameworks, I am excited to bring my technical abilities and analytical mindset to a role that challenges me and fosters continuous growth.
          </p>
        </div>
      </v-sheet>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
      <v-row>
        <!-- Sales overview -->
        <v-col cols="12" lg="8">
          <SalesOverview/>
        </v-col>
        <!-- Yearly Breakup / Monthly Earnings -->
        <v-col cols="12" lg="4">
          <div class="mb-6">
            <YearlyBreakup/>
          </div>
          <div>
            <MonthlyEarning/>
          </div>
        </v-col>
        <!-- Recent transaction -->
        <v-col cols="12" lg="4">
          <RecentTransaction/>
        </v-col>
        <!-- Product performence -->
        <v-col cols="12" lg="8">
          <ProductPerformance/>
        </v-col>
        <!-- Product Cards -->
        <v-col cols="12">
          <ProductCards/>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
/*Call Components*/
import SalesOverview from '@/components/dashboard/SalesOverview.vue';
import YearlyBreakup from '@/components/dashboard/YearlyBreakup.vue';
import MonthlyEarning from '@/components/dashboard/MonthlyEarnings.vue';
import RecentTransaction from '@/components/dashboard/RecentTransaction.vue';
import ProductPerformance from '@/components/dashboard/ProductPerformance.vue';
import ProductCards from '@/components/dashboard/ProductCards.vue';
</script>