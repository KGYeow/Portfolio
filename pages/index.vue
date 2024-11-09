<template>
  <v-row>
    <v-col>
      <MainAboutMe/>
    </v-col>
  </v-row>
  <v-row class="bg-white">
    <v-col>
      <!-- Job Experiences -->
      <v-sheet class="pt-8 maxWidth bg-transparent">
        <!-- Title -->
        <h1 class="font-weight-black mb-10">Experiences</h1>

        <!-- Experience List -->
        <v-data-iterator :items="jobExperiences">
          <template #default="{ items }">
            <div class="d-flex flex-wrap justify-space-between">
              <v-card class="mb-10 px-6 py-4" max-width="360" rounded="2" elevation="10" v-for="(item, i) in items" :key="i">
                <v-label class="text-subtitle-1 font-weight-medium text-muted">{{ item.raw.timeStart }} - {{ item.raw.timeEnd }}</v-label>
                <h5 class="text-h5 mb-1">{{ item.raw.job }}</h5>
                <h5 class="text-subtitle-1 text-muted font-weight-medium font-italic">{{ item.raw.company }}</h5>
                <p class="text-body-1 font-weight-light mb-2">{{ item.raw.description }}</p>
                <div class="d-flex flex-wrap">
                  <v-chip class="text-caption me-2 my-1" density="compact" v-for="skill in item.raw.skills">{{ skill }}</v-chip>
                </div>
              </v-card>
            </div>
          </template>
        </v-data-iterator>
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
import jobExperiences from '~/data/experiences'
import SalesOverview from '@/components/dashboard/SalesOverview.vue';
import YearlyBreakup from '@/components/dashboard/YearlyBreakup.vue';
import MonthlyEarning from '@/components/dashboard/MonthlyEarnings.vue';
import RecentTransaction from '@/components/dashboard/RecentTransaction.vue';
import ProductPerformance from '@/components/dashboard/ProductPerformance.vue';
import ProductCards from '@/components/dashboard/ProductCards.vue';

// Head
useHead({
  title: "Yeow Kok Guan",
})
</script>