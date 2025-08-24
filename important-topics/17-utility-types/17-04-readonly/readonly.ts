interface Profile {
  id: number;
  settings: { darkMode: boolean };
}

const p: Readonly<Profile> = { id: 1, settings: { darkMode: true } };

// p.id = 2;            // error
p.settings.darkMode = false; // allowed (inner object not readonly!)


const config = { url: 'https://example.com', timeout: 5000 } as const;
// stronger than Readonly<T> - all properties are readonly and literal types