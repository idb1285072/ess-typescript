type Env = 'development' | 'production' | 'test';
interface Config {
  apiUrl: string;
  retryCount: number;
  featureFlags: Record<string, boolean>;
}
class ConfigLoader {
  constructor(private readonly env: Env, private readonly config: Config) {}
  public getApiUrl(): string {
    return this.config.apiUrl;
  }
  public isFeatureEnabled(flag: string): boolean {
    return this.config.featureFlags[flag] ?? false;
  }
  public describe(): string {
    return `Environment: ${this.env}, API: ${this.config.apiUrl}`;
  }
}

const loader = new ConfigLoader('production', {
  apiUrl: 'https://api.example.com',
  retryCount: 3,
  featureFlags: { betaMode: true, logging: false },
});
console.log(loader.getApiUrl());
console.log(loader.isFeatureEnabled('betaMode'));
console.log(loader.describe());
