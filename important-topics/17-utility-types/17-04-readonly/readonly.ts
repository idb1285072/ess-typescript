interface Profile {
  id: number;
  settings: { darkMode: boolean };
}

const p: Readonly<Profile> = { id: 1, settings: { darkMode: true } };

// p.id = 2;            // error
p.settings.darkMode = false; // allowed (inner object not readonly!)


// const config = { url: 'https://example.com', timeout: 5000 } as const;
// stronger than Readonly<T> - all properties are readonly and literal types

interface AppConfig {
  appName: string;
  version: string;
  features: string[];
}
const config: Readonly<AppConfig> = {
  appName: "MentorHub",
  version: "1.0.0",
  features: ["quiz", "cheat-sheet", "translation"]
};

// Error: Cannot assign to 'version' because it is a read-only property
// config.version = "2.0.0";

// Error: Property 'push' does not exist on type 'readonly string[]'
// config.features.push("analytics");

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? DeepReadonly<T[P]>
    : T[P];
};
interface User {
  id: string;
  profile: {
    name: string;
    email: string;
  };
}

const user: DeepReadonly<User> = {
  id: "u123",
  profile: {
    name: "Murad",
    email: "murad@example.com"
  }
};

// Error: Cannot assign to 'name' because it is a read-only property
// user.profile.name = "New Name";