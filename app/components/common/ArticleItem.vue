<script setup lang="ts">
import { defineProps } from 'vue';
import { abbreviateNumber } from '@/utils/format';

// Định nghĩa giao diện (interface) cho PostItemProps
interface PostItemProps {
  // Phần hình ảnh bài viết (phần trên cùng của card)
  imageUrl: string;

  // Phần thông tin người dùng
  avatarUrl: string;
  userName: string;

  // Phần thông tin bài viết
  title: string; // Tên/Tiêu đề bài viết

  // Phần thống kê (dòng 3)
  views: number; // Lượt xem
  likes: number; // Lượt tim/thích
  comments: number; // Số lượng bình luận
  postTime: string; // Thời gian đăng bài (ví dụ: "2 giờ trước", "1 ngày trước")
}

const props = defineProps<PostItemProps>();
</script>

<template>
  <div
    class="w-fulloverflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800 dark:shadow-2xl dark:shadow-gray-900/50"
  >
    <div class="relative aspect-video w-full bg-gray-200 dark:bg-gray-700">
      <img
        :src="props.imageUrl"
        :alt="`Hình ảnh bài viết: ${props.title}`"
        class="h-full w-full cursor-pointer object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
        onerror="this.onerror=null;this.src='https://placehold.co/400x225/e0f2fe/0369a1?text=Article+Image';"
      />
      <div
        class="absolute top-2 right-2 rounded-full bg-gray-900/70 px-2 py-1 text-xs font-bold text-white shadow-md backdrop-blur-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="-mt-0.5 mr-0.5 inline-block h-3 w-3"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        {{ props.postTime }}
      </div>
    </div>

    <div class="flex items-start space-x-3 p-4">
      <div class="flex-shrink-0 cursor-pointer">
        <img
          :src="props.avatarUrl"
          :alt="`Avatar của ${props.userName}`"
          class="h-10 w-10 rounded-full border-2 border-indigo-400 object-cover shadow-md dark:border-indigo-600"
          onerror="this.onerror=null;this.src='https://placehold.co/40x40/cbd5e1/1e293b?text=U';"
        />
      </div>

      <div class="min-w-0 flex-grow">
        <h3
          class="line-clamp-2 cursor-pointer text-lg font-semibold text-gray-900 transition-colors duration-300 dark:text-white"
        >
          {{ props.title }}
        </h3>

        <p
          class="-mt-0.5 cursor-pointer truncate text-sm font-medium text-indigo-600 dark:text-indigo-400"
        >
          @{{ props.userName }}
        </p>

        <div
          class="mt-1 flex items-center space-x-3 text-xs font-medium text-gray-500 dark:text-gray-400"
        >
          <div class="flex cursor-pointer items-center">
            <UIcon name="ph:eye" size="16" />
            <span>{{ abbreviateNumber(props.views) }}</span>
          </div>

          <div class="flex cursor-pointer items-center">
            <UIcon name="ph:thumbs-up" size="16" />
            <span>{{ abbreviateNumber(props.likes) }}</span>
          </div>

          <div class="flex cursor-pointer items-center">
            <UIcon name="ph:star-thin" size="16" />
            <span>{{ abbreviateNumber(props.comments) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
