<script setup lang="ts">
const samplePosts = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1549490349-8643362c367d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    userName: 'travel_lover',
    title: 'Khám phá Vịnh Hạ Long: Kỳ quan thiên nhiên thế giới',
    views: 12500,
    likes: 2100,
    comments: 154,
    postTime: '2 giờ trước',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1542831371-29b0f74f9d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    avatarUrl: 'https://i.pravatar.cc/150?img=2',
    userName: 'dev_ninja',
    title: 'Vue 3 và Composition API: Hướng dẫn chuyên sâu về Ref và Reactive',
    views: 4800,
    likes: 890,
    comments: 55,
    postTime: '1 ngày trước',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    userName: 'foodie_vn',
    title: 'Top 5 món ăn đường phố phải thử khi đến Sài Gòn',
    views: 950,
    likes: 120,
    comments: 15,
    postTime: '3 tuần trước',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    userName: 'foodie_vn',
    title: 'Top 5 món ăn đường phố phải thử khi đến Sài Gòn',
    views: 950,
    likes: 120,
    comments: 15,
    postTime: '3 tuần trước',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    userName: 'foodie_vn',
    title: 'Top 5 món ăn đường phố phải thử khi đến Sài Gòn',
    views: 950,
    likes: 120,
    comments: 15,
    postTime: '3 tuần trước',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1549490349-8643362c367d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    userName: 'travel_lover',
    title: 'Khám phá Vịnh Hạ Long: Kỳ quan thiên nhiên thế giới',
    views: 12500,
    likes: 2100,
    comments: 154,
    postTime: '2 giờ trước',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1542831371-29b0f74f9d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    avatarUrl: 'https://i.pravatar.cc/150?img=2',
    userName: 'dev_ninja',
    title: 'Vue 3 và Composition API: Hướng dẫn chuyên sâu về Ref và Reactive',
    views: 4800,
    likes: 890,
    comments: 55,
    postTime: '1 ngày trước',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    userName: 'foodie_vn',
    title: 'Top 5 món ăn đường phố phải thử khi đến Sài Gòn',
    views: 950,
    likes: 120,
    comments: 15,
    postTime: '3 tuần trước',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    userName: 'foodie_vn',
    title: 'Top 5 món ăn đường phố phải thử khi đến Sài Gòn',
    views: 950,
    likes: 120,
    comments: 15,
    postTime: '3 tuần trước',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    userName: 'foodie_vn',
    title: 'Top 5 món ăn đường phố phải thử khi đến Sài Gòn',
    views: 950,
    likes: 120,
    comments: 15,
    postTime: '3 tuần trước',
  },
];

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
      </div>
    </div>

    <!-- Khu vực hiển thị Model Items -->
    <div class="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2">
      <CommonArticleItem
        v-for="(post, index) in samplePosts"
        :key="index"
        :image-url="post.imageUrl"
        :avatar-url="post.avatarUrl"
        :user-name="post.userName"
        :title="post.title"
        :views="post.views"
        :likes="post.likes"
        :comments="post.comments"
        :post-time="post.postTime"
      />

      <CommonArticleItem
        image-url=""
        avatar-url=""
        user-name="unknown_author"
        title="Tiêu đề bài viết này rất dài và có thể bị cắt bớt ở cuối. Đây là một bài viết mẫu để kiểm tra tính năng truncate."
        :views="10"
        :likes="0"
        :comments="0"
        post-time="Vừa đăng"
      />
    </div>
  </UPage>
</template>
