// constructs an object type. Key type is K and value type is T
type Scores = Record<string, number>;
const scores: Scores = {
  Alice: 90,
  Bob: 85,
};

type Role = 'admin' | 'user' | 'guest';
type RolePermissions = Record<Role, boolean>;
const permissions: RolePermissions = {
  admin: true,
  user: false,
  guest: false,
};

// enum to value mapping
enum Status {
  Open,
  Closed,
  Pending,
}
type StatusLabels = Record<Status, string>;
const labels: StatusLabels = {
  [Status.Open]: 'Open',
  [Status.Closed]: 'Closed',
  [Status.Pending]: 'Pending',
};

// lookup table/dictionary
type CountryCode = 'US' | 'CA' | 'MX';
const countryNames: Record<CountryCode, string> = {
  US: 'United States',
  CA: 'Canada',
  MX: 'Mexico',
};

// unions to dynamic object structures
type FeatureFlag = 'darkMode' | 'betaUser' | 'analytics';
const flags: Record<FeatureFlag, boolean> = {
  darkMode: true,
  betaUser: false,
  analytics: true,
};

// use Record instead of index signatures
