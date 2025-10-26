<script setup lang="ts">
import { defineProps } from 'vue';
import { abbreviateNumber } from '@/utils/format';
// Định nghĩa giao diện (interface) cho ModelItem để giúp kiểm tra kiểu dữ liệu
interface ModelItemProps {
  // Phần hình ảnh model (phần trên cùng của card)
  imageUrl: string;

  // Phần thông tin người dùng
  avatarUrl: string;
  userName: string;

  // Phần thông tin model
  modelName: string;

  // Phần thống kê (dòng 3)
  views: number;
  likes: number; // Lượt tim/thích
  rating: number; // Điểm đánh giá (ví dụ: 0.0 đến 5.0)
  downloads: number;
}

const props = defineProps<ModelItemProps>();
</script>

<template>
  <!-- Card Container -->
  <!-- bg-white/50 cho hiệu ứng mờ nhẹ, border, shadow -->
  <div
    class="w-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800 dark:shadow-2xl dark:shadow-gray-900/50"
  >
    <!-- Phần 1: Hình ảnh Model -->
    <div class="relative aspect-[4/3] w-full bg-gray-200 dark:bg-gray-700">
      <img
        :src="props.imageUrl"
        :alt="`Hình ảnh mô hình: ${props.modelName}`"
        class="h-full w-full cursor-pointer object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
        onerror="this.onerror=null;this.src='https://placehold.co/400x300/e0f2fe/0369a1?text=3D+Model';"
      />
      <!-- Tag -->
      <!-- <div
        class="absolute top-2 right-2 rounded-full bg-yellow-500 px-2 py-1 text-xs font-bold text-white shadow-md"
      >
        Featured
      </div> -->
    </div>

    <!-- Phần 2: Thông tin chi tiết -->
    <div class="flex items-start space-x-3 p-4">
      <!-- Bên trái: Avatar -->
      <div class="flex-shrink-0">
        <img
          :src="props.avatarUrl"
          :alt="`Avatar của ${props.userName}`"
          class="h-10 w-10 cursor-pointer rounded-full border-2 border-indigo-400 object-cover shadow-md dark:border-indigo-600"
          onerror="this.onerror=null;this.src='https://placehold.co/40x40/cbd5e1/1e293b?text=U';"
        />
      </div>

      <!-- Bên phải: Tên Model, Username, Thống kê -->
      <div class="min-w-0 flex-grow">
        <!-- Dòng 1: Tên Model -->
        <h3
          class="cursor-pointer truncate text-lg font-semibold text-gray-900 transition-colors duration-300 dark:text-white"
        >
          {{ props.modelName }}
        </h3>

        <!-- Dòng 2: Username -->
        <p
          class="-mt-0.5 cursor-pointer truncate text-sm font-medium text-indigo-600 dark:text-indigo-400"
        >
          @{{ props.userName }}
        </p>

        <!-- Dòng 3: Thống kê (Lượt xem, Tim, Download) -->
        <div
          class="mt-1 flex cursor-pointer items-center space-x-3 text-xs font-medium text-gray-500 dark:text-gray-400"
        >
          <!-- Lượt xem (Views) -->
          <div class="flex cursor-pointer items-center space-x-0.5">
            <UIcon name="ph:eye" size="16" />
            <span>{{ abbreviateNumber(props.views) }}</span>
          </div>

          <!-- Lượt likes -->
          <div class="flex cursor-pointer items-center space-x-0.5">
            <UIcon name="ph:thumbs-up" size="16" />
            <span>{{ abbreviateNumber(props.likes) }}</span>
          </div>

          <!-- Rating -->
          <div class="flex cursor-pointer items-center space-x-0.5">
            <UIcon name="ph:star-thin" size="16" />
            <span>{{ props.rating.toFixed(1) }}</span>
          </div>

          <!-- Lượt Download -->
          <div class="flex cursor-pointer items-center space-x-0.5">
            <UIcon name="ph:download" size="16" />
            <span>{{ abbreviateNumber(props.downloads) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
