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
      'https://makerworld.bblmw.com/makerworld/model/DSUS0000001909652/design/2025-10-21_6e0943cf7ea888.jpg?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cwebp',
    avatarUrl:
      'https://public-cdn.bblmw.com/avatar/707210016/2023-12-16_15e3c033a7122.jpg?x-oss-process=image/resize,w_60/format,webp',
    userName: 'john_doe_design',
    modelName: 'Christmas House',
    views: 125890,
    likes: 4500,
    rating: 4.8,
    downloads: 15200,
  },
  {
    id: 2,
    imageUrl:
      'https://makerworld.bblmw.com/makerworld/model/DSUS0000001909790/design/2025-10-21_457280796b44f8.jpg?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cwebp',
    avatarUrl:
      'https://public-cdn.bblmw.com/avatar/2443083707/2025-10-24_44bb2d24428ac.jpg?x-oss-process=image/resize,w_60/format,webp',
    userName: 'lisa_stark_arch',
    modelName:
      'Laser Engraved Dragon|Grayscale Engraved Dragon|Embossed Effect',
    views: 8900,
    likes: 720,
    rating: 4.1,
    downloads: 850,
  },
  {
    id: 3,
    imageUrl:
      'https://makerworld.bblmw.com/makerworld/model/DSUS0000001925926/design/2025-10-26_fac76a3200fe18.jpg?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cwebp',
    avatarUrl:
      'https://public-cdn.bblmw.com/avatar/2052377899/2024-08-14_2b69a81dd4d54.jpg?x-oss-process=image/resize,w_60/format,webp',
    userName: 'maker_kit_pro',
    modelName: 'Schwibbogen Winter Landscape',
    views: 150000,
    likes: 9800,
    rating: 5.0,
    downloads: 45000,
  },
  {
    id: 4,
    imageUrl:
      'https://makerworld.bblmw.com/makerworld/model/DSUS0000001912774/design/2025-10-22_e8c3762c3ebb2.png?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cwebp',
    avatarUrl:
      'https://public-cdn.bblmw.com/avatar/1213249990/2025-10-14_9f13d9db9d46a8.png?x-oss-process=image/resize,w_60/format,webp',
    userName: 'kksutudio',
    modelName: 'Handmade Wooden Bottle or Can Holder',
    views: 125890,
    likes: 4500,
    rating: 4.8,
    downloads: 15200,
  },
  {
    id: 5,
    imageUrl:
      'https://makerworld.bblmw.com/makerworld/model/DSUS0000001923701/design/2025-10-25_6f8021d947323.png?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cwebp',
    avatarUrl:
      'https://public-cdn.bblmw.com/avatar/11128021/2023-11-16_3044ef5c7c4448.jpg?x-oss-process=image/resize,w_60/format,webp',
    userName: 'otodesign',
    modelName: 'Christmas house ornament 2',
    views: 8900,
    likes: 720,
    rating: 4.1,
    downloads: 850,
  },
  {
    id: 6,
    imageUrl:
      'https://makerworld.bblmw.com/makerworld/model/DSUS0000001923246/design/2025-10-25_51b6e5516ed5f.jpg?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cwebp',
    avatarUrl:
      'https://public-cdn.bblmw.com/avatar/3735423520/2025-03-03_9cee6c53109b2.png?x-oss-process=image/resize,w_60/format,webp',
    userName: 'thelightning',
    modelName: '11 Cute Chibi Monsters with Pumpkins (Ornament)',
    views: 150000,
    likes: 9800,
    rating: 5.0,
    downloads: 45000,
  },
  {
    id: 7,
    imageUrl:
      'https://makerworld.bblmw.com/makerworld/model/DSUS0000001910185/design/2025-10-21_6e2c3eb13a8228.png?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cwebp',
    avatarUrl:
      'https://public-cdn.bblmw.com/avatar/707210016/2023-12-16_15e3c033a7122.jpg?x-oss-process=image/resize,w_60/format,webp',
    userName: 'skinnyprint',
    modelName: 'Christmas Mailbox – Christmas Mailbox',
    views: 125890,
    likes: 4500,
    rating: 4.8,
    downloads: 15200,
  },
  {
    id: 8,
    imageUrl:
      'https://makerworld.bblmw.com/makerworld/model/DSUS0000001916795/design/2025-10-23_f1f9ed4c34cff.jpg?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cwebp',
    avatarUrl:
      'https://public-cdn.bblmw.com/avatar/2443083707/2025-10-24_44bb2d24428ac.jpg?x-oss-process=image/resize,w_60/format,webp',
    userName: 'sparky3d',
    modelName: 'Customizable Tree of Life',
    views: 8900,
    likes: 720,
    rating: 4.1,
    downloads: 850,
  },
  {
    id: 9,
    imageUrl:
      'https://makerworld.bblmw.com/makerworld/model/DSUS0000001915139/design/2025-10-23_bfd95ef3c69c4.png?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cwebp',
    avatarUrl:
      'https://public-cdn.bblmw.com/avatar/2052377899/2024-08-14_2b69a81dd4d54.jpg?x-oss-process=image/resize,w_60/format,webp',
    userName: 'maker_kit_pro',
    modelName: 'Fighter jet',
    views: 150000,
    likes: 9800,
    rating: 5.0,
    downloads: 45000,
  },
  {
    id: 10,
    imageUrl:
      'https://makerworld.bblmw.com/makerworld/model/DSUS0000001914838/design/2025-10-22_d297f175997068.jpg?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cwebp',
    avatarUrl:
      'https://public-cdn.bblmw.com/avatar/1213249990/2025-10-14_9f13d9db9d46a8.png?x-oss-process=image/resize,w_60/format,webp',
    userName: 'Atooman',
    modelName: '180° Hinges',
    views: 125890,
    likes: 4500,
    rating: 4.8,
    downloads: 15200,
  },
  {
    id: 11,
    imageUrl:
      'https://makerworld.bblmw.com/makerworld/model/DSUS0000001916369/design/2025-10-23_6bda7b2270b9f8.jpeg?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cwebp',
    avatarUrl:
      'https://public-cdn.bblmw.com/avatar/1338296342/2024-09-23_cfe77b5ce85a4.png?x-oss-process=image/resize,w_60/format,webp',
    userName: 'AT96',
    modelName: 'Articulated Desk Lamp',
    views: 8900,
    likes: 720,
    rating: 4.1,
    downloads: 850,
  },
  {
    id: 12,
    imageUrl:
      'https://makerworld.bblmw.com/makerworld/model/DSUS0000001902388/design/2025-10-19_6d4911be6de33.png?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cwebp',
    avatarUrl: '',
    userName: 'thelightning',
    modelName: 'Halloween Moon Hanging Ornament',
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
      <h1 class="mt-4 text-4xl font-bold">Laser Models</h1>
      <div class="mt-8 flex justify-end">
        <b>Sorting:</b>
        <a class="ml-2">Match</a>
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
