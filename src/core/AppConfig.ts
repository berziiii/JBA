interface AppConfigInterface {
  settings: {};
  pages: {
    Home: {
      contactForm: {
        enabled: boolean;
      };
    };
  };
}

export const AppConfig: AppConfigInterface = {
  settings: {},
  pages: {
    Home: {
      contactForm: {
        enabled: false,
      },
    },
  },
};
