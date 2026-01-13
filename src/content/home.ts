const basePath = process.env.NODE_ENV === 'production' ? '/moonple' : '';

export const content = {
  ko: {
    hero: {
      slogan1: '보름달에 소원을 적듯,',
      slogan2: '당신의 하루를 적어보세요',
      subtitle1: '달이 당신의 하루를 기억하며,',
      subtitle2: '모든 일정이 이루어지도록 함께합니다',
    },
    features: {
      title: '주요 기능',
      subtitle: '작심삼일로 끝나지 않게, 매일 밤 당신을 응원합니다',
      cards: [
        {
          title: '캘린더 일정 관리',
          description: '간편하게 일정을 등록하고 관리하세요.',
          image: `${basePath}/assets/Screenshot_home-left.png`,
        },
        {
          title: '일정 검색',
          description: '과거 일정이나 중요한 약속을 키워드로 즉시 찾아보세요.',
          image: `${basePath}/assets/Screenshot_search-right.png`,
        },
        {
          title: '일정 완료 체크',
          description: '오늘 할 일을 하나씩 체크하며 성취감을 느껴보세요.',
          image: `${basePath}/assets/Screenshot_daily_check-left.png`,
        },
        {
          title: '일정 공유',
          description: '친구, 가족과 일정을 공유하고 함께 관리하세요.',
          image: `${basePath}/assets/Screenshot_share-left.png`,
        },
        {
          title: '월간/주간 통계',
          description: '월별, 주별 일정 달성률과 현황을 한눈에 확인하세요.',
          images: [`${basePath}/assets/Screenshot_my_month-right.png`, `${basePath}/assets/Screenshot_my_week-right.png`],
        },
      ],
    },
    message: {
      text1: '작심삼일로 끝난 계획들, 중간에 무너진 다짐들...',
      text2: '결국, 나 자신을 비춰줄 사람은 나 자신뿐이었습니다.',
      text3: '그래서 달에 나를 투영했어요.',
      text4: '밤마다 떠오르는 저 달처럼,',
      text5: '매일 당신의 하루를 지켜보고',
      text6: '당신이 세운 모든 계획을 기억하며',
      text7: '당신의 일정을 응원합니다.',
      text8: '달은 항상 당신 곁에 있어요.',
      text9: '포기하지 마세요.',
    },
    download: {
      title: '매일 밤 달과 함께',
      subtitle: 'App Store와 Google Play에서 만나보세요',
      comingSoon: '곧 출시 예정',
    },
    footer: {
      developer: '개발자',
      contact: '문의',
      privacy: '개인정보 처리방침',
    },
  },
  en: {
    hero: {
      slogan1: 'Like making a wish on the full moon,',
      slogan2: 'Write down your day',
      subtitle1: 'The moon remembers your day,',
      subtitle2: 'Supporting all your plans to come true',
    },
    features: {
      title: 'Key Features',
      subtitle: "So your resolutions don't end in three days, the moon encourages you every night",
      cards: [
        {
          title: 'Calendar Schedule Management',
          description: 'Easily register and manage your schedule.',
          image: `${basePath}/assets/Screenshot_home-left.png`,
        },
        {
          title: 'Event Search',
          description: 'Instantly find past events or important appointments by keyword.',
          image: `${basePath}/assets/Screenshot_search-right.png`,
        },
        {
          title: 'Complete Task Checklist',
          description: 'Check off your daily tasks one by one and feel accomplished.',
          image: `${basePath}/assets/Screenshot_daily_check-left.png`,
        },
        {
          title: 'Share Events',
          description: 'Share your schedule with friends and family to manage together.',
          image: `${basePath}/assets/Screenshot_share-left.png`,
        },
        {
          title: 'Monthly/Weekly Statistics',
          description: 'View your monthly and weekly schedule completion rate at a glance.',
          images: [`${basePath}/assets/Screenshot_my_month-right.png`, `${basePath}/assets/Screenshot_my_week-right.png`],
        },
      ],
    },
    message: {
      text1: 'Plans that ended in three days, resolutions that collapsed halfway...',
      text2: 'In the end, only I could reflect on myself.',
      text3: 'So I projected myself onto the moon.',
      text4: 'Like the moon that rises every night,',
      text5: 'Watching over your day,',
      text6: 'Remembering every plan you made,',
      text7: 'Cheering for your schedule.',
      text8: 'The moon is always by your side.',
      text9: "Don't give up.",
    },
    download: {
      title: 'Every Night with the Moon',
      subtitle: 'Available on App Store and Google Play',
      comingSoon: 'Coming Soon',
    },
    footer: {
      developer: 'Developer',
      contact: 'Contact',
      privacy: 'Privacy Policy',
    },
  },
};

export type Language = 'ko' | 'en';
export type Content = typeof content.ko;
