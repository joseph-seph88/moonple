export const privacyContent = {
  ko: {
    title: '개인정보 처리방침',
    lastUpdated: '최종 수정일: 2026년 1월 13일',
    sections: [
      {
        title: '개인정보 수집 항목',
        highlight: {
          main: 'Moon Ple은 사용자의 개인정보를 수집하지 않습니다.',
          points: [
            '모든 데이터는 사용자 기기에만 저장됩니다',
            '일정 데이터 (제목, 날짜, 시간, 메모)',
            '앱 설정 (언어, 테마)',
            '일정 점검 기록',
          ],
          note: '서버로 전송되지 않으며, 개발자가 접근할 수 없습니다.',
        },
      },
      {
        title: '제3자 제공',
        subtitle: 'Google AdMob (광고 서비스)',
        content: 'Moon Ple은 무료 앱 제공을 위해 Google AdMob 광고를 사용합니다.',
        list: {
          title: 'AdMob이 자동으로 수집하는 정보:',
          items: [
            '광고 식별자 (익명)',
            '기기 정보 (OS 버전, 화면 크기, 제조사)',
            'IP 주소 (대략적인 위치 정보)',
            '광고 조회 및 클릭 데이터',
          ],
        },
        settings: {
          title: '광고 맞춤설정 관리',
          description: '광고 맞춤설정을 원하지 않으시면 아래 방법으로 설정을 변경하실 수 있습니다:',
          options: [
            { platform: 'Android', instruction: '설정 → Google → 광고 → 광고 맞춤설정 선택 해제' },
            { platform: 'iOS', instruction: '설정 → 개인정보 보호 → Apple 광고 → 맞춤형 광고 끄기' },
            { platform: 'Web', instruction: 'Google 광고 설정', link: 'https://adssettings.google.com' },
          ],
        },
        policy: {
          text: 'Google 개인정보 처리방침',
          link: 'https://policies.google.com/privacy',
        },
      },
      {
        title: '개인정보 보유 및 이용 기간',
        content: '모든 데이터는 앱 삭제 시 완전히 제거됩니다.',
        items: [
          '로컬 저장된 데이터: 앱 삭제 시 자동 삭제',
          'AdMob 데이터: Google의 개인정보 처리방침에 따름',
        ],
      },
      {
        title: '사용자 권리',
        content: '다음 권리를 행사하실 수 있습니다:',
        items: [
          { label: '데이터 삭제', description: '앱 삭제를 통해 모든 로컬 데이터 제거' },
          { label: '알림 권한 관리', description: '기기 설정에서 알림 권한 변경' },
          { label: '광고 설정', description: '위의 광고 맞춤설정 관리 참고' },
        ],
      },
      {
        title: '앱 권한',
        content: 'Moon Ple은 알림 권한만 요청합니다. 일정 리마인더와 알림을 보내기 위해 사용되며, 기기 설정에서 언제든지 변경할 수 있습니다.',
      },
      {
        title: '일정 공유 기능',
        content: 'Moon Ple의 일정 공유는 파일로 내보내기하여 공유하는 방식입니다.',
      },
      {
        title: '개발자 연락처',
        contact: {
          label: '문의',
          email: 'pathetic.sim@gmail.com',
          message: '개인정보 처리 또는 앱 사용과 관련된 문의사항이 있으시면 언제든지 연락 주시기 바랍니다.',
        },
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last Updated: January 13, 2026',
    sections: [
      {
        title: 'Information We Collect',
        highlight: {
          main: 'Moon Ple does not collect any personal information.',
          points: [
            'All data is stored only on your device',
            'Schedule data (title, date, time, memo)',
            'App settings (language, theme)',
            'Schedule check records',
          ],
          note: 'No data is transmitted to servers or accessible by developers.',
        },
      },
      {
        title: 'Third-Party Services',
        subtitle: 'Google AdMob (Advertising Service)',
        content: 'Moon Ple uses Google AdMob to provide the app for free.',
        list: {
          title: 'Information automatically collected by AdMob:',
          items: [
            'Advertising identifier (anonymous)',
            'Device information (OS version, screen size, manufacturer)',
            'IP address (approximate location)',
            'Ad views and clicks data',
          ],
        },
        settings: {
          title: 'Managing Ad Personalization',
          description: 'You can opt out of personalized ads:',
          options: [
            { platform: 'Android', instruction: 'Settings → Google → Ads → Opt out of Ads Personalization' },
            { platform: 'iOS', instruction: 'Settings → Privacy → Apple Advertising → Turn off Personalized Ads' },
            { platform: 'Web', instruction: 'Google Ads Settings', link: 'https://adssettings.google.com' },
          ],
        },
        policy: {
          text: 'Google Privacy Policy',
          link: 'https://policies.google.com/privacy',
        },
      },
      {
        title: 'Data Retention',
        content: 'All data is completely removed when you uninstall the app.',
        items: [
          'Local data: Automatically deleted on app uninstall',
          'AdMob data: Subject to Google\'s Privacy Policy',
        ],
      },
      {
        title: 'Your Rights',
        content: 'You have the following rights:',
        items: [
          { label: 'Data deletion', description: 'Uninstall the app to remove all local data' },
          { label: 'Notification control', description: 'Manage notification permissions in device settings' },
          { label: 'Ad settings', description: 'See "Managing Ad Personalization" above' },
        ],
      },
      {
        title: 'App Permissions',
        content: 'Moon Ple only requests notification permission. It is used to send schedule reminders and notifications, and can be changed at any time in device settings.',
      },
      {
        title: 'Schedule Sharing Feature',
        content: 'Moon Ple\'s schedule sharing works by exporting schedules as files.',
      },
      {
        title: 'Developer Contact',
        contact: {
          label: 'Contact',
          email: 'pathetic.sim@gmail.com',
          message: 'If you have any questions about privacy or app usage, please feel free to contact us.',
        },
      },
    ],
  },
};

export type PrivacyLanguage = 'ko' | 'en';
export type PrivacyContent = typeof privacyContent.ko;
