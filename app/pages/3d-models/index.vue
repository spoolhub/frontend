<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';
import { ref } from 'vue';

definePageMeta({
  layout: 'default',
});

const sampleModels = ref([
  {
    id: 1,
    imageUrl:
      'https://makerworld.bblmw.com/makerworld/model/US1da811632eafb4/design/2025-10-23_4a55df1124ec1.png?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cwebp',
    avatarUrl:
      'https://public-cdn.bblmw.com/avatar/707210016/2023-12-16_15e3c033a7122.jpg?x-oss-process=image/resize,w_60/format,webp',
    userName: 'john_doe_design',
    modelName: 'Stitch Christmas Edition / NO AMS',
    views: 125890,
    likes: 4500,
    rating: 4.8,
    downloads: 15200,
  },
  {
    id: 2,
    imageUrl:
      'https://makerworld.bblmw.com/makerworld/model/USc5c70fc2ee6977/design/2025-10-27_2f8483feefbda.jpg?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cwebp',
    avatarUrl:
      'https://public-cdn.bblmw.com/avatar/2443083707/2025-10-24_44bb2d24428ac.jpg?x-oss-process=image/resize,w_60/format,webp',
    userName: 'lisa_stark_arch',
    modelName: 'IKEA SKADIS Organizer System',
    views: 8900,
    likes: 720,
    rating: 4.1,
    downloads: 850,
  },
  {
    id: 3,
    imageUrl:
      'https://makerworld.bblmw.com/makerworld/model/USed0e17cb3a3e78/design/2025-10-23_8a404a58312708.gif?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cjpeg',
    avatarUrl:
      'https://public-cdn.bblmw.com/avatar/2052377899/2024-08-14_2b69a81dd4d54.jpg?x-oss-process=image/resize,w_60/format,webp',
    userName: 'maker_kit_pro',
    modelName: 'Wedge Conveyor System-KE 50',
    views: 150000,
    likes: 9800,
    rating: 5.0,
    downloads: 45000,
  },
  {
    id: 4,
    imageUrl:
      'https://makerworld.bblmw.com/makerworld/model/USc90ea72522af26/design/2025-10-22_f244cea3c804d.jpg?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cwebp',
    avatarUrl:
      'https://public-cdn.bblmw.com/avatar/1213249990/2025-10-14_9f13d9db9d46a8.png?x-oss-process=image/resize,w_60/format,webp',
    userName: 'kksutudio',
    modelName: 'Coat Hook (Expandable)',
    views: 125890,
    likes: 4500,
    rating: 4.8,
    downloads: 15200,
  },
  {
    id: 5,
    imageUrl:
      'https://makerworld.bblmw.com/makerworld/model/US29599c7101f2a1/design/2025-10-21_2a1ebf255f7b5.jpg?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cwebp',
    avatarUrl:
      'https://public-cdn.bblmw.com/avatar/11128021/2023-11-16_3044ef5c7c4448.jpg?x-oss-process=image/resize,w_60/format,webp',
    userName: 'otodesign',
    modelName: 'Seraphon – Looks like fabric. Works like magic.',
    views: 8900,
    likes: 720,
    rating: 4.1,
    downloads: 850,
  },
  {
    id: 6,
    imageUrl:
      'https://makerworld.bblmw.com/makerworld/model/USbdd0f5a2db7128/design/2025-10-24_8c64448b74c0d.jpg?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cwebp',
    avatarUrl:
      'https://public-cdn.bblmw.com/avatar/3735423520/2025-03-03_9cee6c53109b2.png?x-oss-process=image/resize,w_60/format,webp',
    userName: 'thelightning',
    modelName: 'Mickey and Minnie Mouse Halloween Pumpkin Lamp',
    views: 150000,
    likes: 9800,
    rating: 5.0,
    downloads: 45000,
  },
  {
    id: 7,
    imageUrl:
      'https://makerworld.bblmw.com/makerworld/model/US9e61478676805f/design/2025-10-23_5b3a642d35b5d.png?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cwebp',
    avatarUrl:
      'https://public-cdn.bblmw.com/avatar/707210016/2023-12-16_15e3c033a7122.jpg?x-oss-process=image/resize,w_60/format,webp',
    userName: 'skinnyprint',
    modelName: 'Articulated Skeleton Stitch (NOAMS)',
    views: 125890,
    likes: 4500,
    rating: 4.8,
    downloads: 15200,
  },
  {
    id: 8,
    imageUrl:
      'https://makerworld.bblmw.com/makerworld/model/US9a17a1b51349ce/design/2025-10-25_d08584b052e55.jpg?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cwebp',
    avatarUrl:
      'https://public-cdn.bblmw.com/avatar/2443083707/2025-10-24_44bb2d24428ac.jpg?x-oss-process=image/resize,w_60/format,webp',
    userName: 'sparky3d',
    modelName: 'Satisfactory - Conveyor Lift',
    views: 8900,
    likes: 720,
    rating: 4.1,
    downloads: 850,
  },
  {
    id: 9,
    imageUrl:
      'https://makerworld.bblmw.com/makerworld/model/US1e88b8b90e26cb/design/2025-10-21_ebb2b7177d5b48.jpg?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cwebp',
    avatarUrl:
      'https://public-cdn.bblmw.com/avatar/2052377899/2024-08-14_2b69a81dd4d54.jpg?x-oss-process=image/resize,w_60/format,webp',
    userName: 'maker_kit_pro',
    modelName: 'Fully 3D-Printed Compact Utility Cutter',
    views: 150000,
    likes: 9800,
    rating: 5.0,
    downloads: 45000,
  },
  {
    id: 10,
    imageUrl:
      'https://makerworld.bblmw.com/makerworld/model/US49eb00067cea73/design/2025-10-26_ceb2a59938ca6.jpeg?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cwebp',
    avatarUrl:
      'https://public-cdn.bblmw.com/avatar/1213249990/2025-10-14_9f13d9db9d46a8.png?x-oss-process=image/resize,w_60/format,webp',
    userName: 'Atooman',
    modelName: 'AbramsX US next-generation Abrams tank 1/35 Scale',
    views: 125890,
    likes: 4500,
    rating: 4.8,
    downloads: 15200,
  },
  {
    id: 11,
    imageUrl:
      'https://makerworld.bblmw.com/makerworld/model/US80cadce5853cf9/design/2025-10-23_dbafd7c34be6d.jpg?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cwebp',
    avatarUrl:
      'https://public-cdn.bblmw.com/avatar/1338296342/2024-09-23_cfe77b5ce85a4.png?x-oss-process=image/resize,w_60/format,webp',
    userName: 'AT96',
    modelName: 'Mecha Pokemon Series — Cyber Gyarados Statue',
    views: 8900,
    likes: 720,
    rating: 4.1,
    downloads: 850,
  },
  {
    id: 12,
    imageUrl:
      'https://makerworld.bblmw.com/makerworld/model/US77b3e78beecea4/design/2025-10-23_0de86b320ad9b.png?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cwebp',
    avatarUrl: '',
    userName: 'thelightning',
    modelName: 'Halloween Graveyard Mini Train Diorama',
    views: 150000,
    likes: 9800,
    rating: 5.0,
    downloads: 45000,
  },
]);

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Categories',
      type: 'label',
    },

    {
      label: '3D Printers',
      description: 'Upgrades and accessories for 3D printers.',
      to: '/3d-models/3d-printers',
      children: [
        {
          label: 'Prusa Parts & Upgrades',
          description: 'Parts and improvements for Prusa printers.',
          to: '/3d-models/prusa-upgrades',
        },
        {
          label: 'Bambu Lab Parts & Upgrades',
          description: 'Parts and improvements for Bambu Lab printers.',
          to: '/3d-models/bambu-lab-upgrades',
        },
        {
          label: 'Other Printer Parts & Accessories',
          description: 'Parts for Creality, Anycubic, and general accessories.',
          to: '/3d-models/other-printer-parts',
        },
        {
          label: 'Test Models',
          description: 'Models used for testing and calibrating the printer.',
          to: '/3d-models/test-models',
        },
      ],
    },
    {
      label: 'Household',
      description:
        'Models for the kitchen, bathroom, decoration, and organization.',
      defaultOpen: true,
      to: '/3d-models/household',
      children: [
        {
          label: 'Home Decor',
          description: 'Home decoration, vases, and wall art.',
          to: '/3d-models/home-decor',
        },
        {
          label: 'Kitchen & Bathroom',
          description: 'Kitchen tools, stands, and bathroom accessories.',
          to: '/3d-models/kitchen-bathroom',
        },
        {
          label: 'Office & Garden',
          description: 'Office supplies and outdoor/gardening items.',
          to: '/3d-models/office-garden',
        },
        {
          label: 'Pets',
          description: 'Toys and accessories for pets.',
          to: '/3d-models/pets',
        },
      ],
    },
    {
      label: 'Hobby & Makers',
      description: 'Tools, organization, electronics, and mechanical parts.',
      to: '/3d-models/hobby-makers',
      children: [
        {
          label: 'Tools & Organizers',
          description: 'Storage boxes, organizing shelves, and making tools.',
          to: '/3d-models/tools-organizers',
        },
        {
          label: 'Electronics & Mechanical',
          description:
            'Electronic enclosures, mechanical parts, and automotive components.',
          to: '/3d-models/electronics-mechanical',
        },
        {
          label: 'RC & Robotics',
          description: 'Parts for remote-controlled vehicles and robots.',
          to: '/3d-models/rc-robotics',
        },
      ],
    },
    {
      label: 'Toys & Games',
      description: 'Puzzles, building toys, and character models.',
      to: '/3d-models/toys-games',
      children: [
        {
          label: 'Puzzles & Action Figures',
          description: 'Puzzles, statues, and action figures.',
          to: '/3d-models/puzzles-action-figures',
        },
        {
          label: 'Board Games & Accessories',
          description: 'Accessories and storage boxes for board games.',
          to: '/3d-models/board-games-accessories',
        },
        {
          label: 'Vehicles & Outdoor Toys',
          description: 'Vehicle models and outdoor toys.',
          to: '/3d-models/vehicles-outdoor-toys',
        },
      ],
    },
    {
      label: 'Gadgets & Tech',
      description: 'Mobile devices, computers, audio, and VR.',
      to: '/3d-models/gadgets-tech',
      children: [
        {
          label: 'Portable Devices & Computers',
          description: 'Phone accessories, computers, and PC enclosures.',
          to: '/3d-models/portable-devices-computers',
        },
        {
          label: 'Audio, Photo & VR',
          description:
            'Camera stands, speaker enclosures, and virtual reality accessories.',
          to: '/3d-models/audio-photo-vr',
        },
      ],
    },
    {
      label: 'Cosplay & Fashion',
      description: 'Masks, props, jewelry, and fashion accessories.',
      to: '/3d-models/cosplay-fashion',
      children: [
        {
          label: 'Cosplay, Masks & Props',
          description: 'Cosplay costumes, masks, and props.',
          to: '/3d-models/cosplay-masks-props',
        },
        {
          label: 'Jewelry & Other Fashion',
          description: 'Jewelry, hair accessories, and other fashion items.',
          to: '/3d-models/jewelry-fashion',
        },
      ],
    },
  ],
]);
</script>

<template>
  <UPage>
    <template #left>
      <UNavigationMenu orientation="vertical" :items="items" />
    </template>

    <div class="mb-6">
      <h1 class="mt-4 text-4xl font-bold">3D Models</h1>
      <div class="mt-8 flex justify-end">
        <b>Sorting:</b>
        <a class="ml-2">Trending</a>
        <a class="ml-2">Newest</a>
        <a class="ml-2">Most Viewed</a>
        <a class="ml-2">Most Loved</a>
        <a class="ml-2">Most Downloaded</a>
        <a class="ml-2">Most Rated</a>
      </div>
    </div>

    <!-- Khu vực hiển thị Model Items -->
    <div
      class="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
    >
      <!-- Vòng lặp để hiển thị từng ModelItem -->
      <CommonModelItem
        v-for="model in sampleModels"
        :key="model.id"
        :image-url="model.imageUrl"
        :avatar-url="model.avatarUrl"
        :user-name="model.userName"
        :model-name="model.modelName"
        :views="model.views"
        :likes="model.likes"
        :rating="model.rating"
        :downloads="model.downloads"
      />
    </div>
  </UPage>
</template>
