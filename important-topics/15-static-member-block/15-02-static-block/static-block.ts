class Config {
  constructor(public name: string, private age: number) {
    console.log('constructor running');
  }
  static settings: Record<string, string>;
  static {
    Config.settings = {
      appName: 'MyApp',
      version: '1.0.0',
    };
    console.log('Static block executed!');
  }
  // public name: string = 'master';
}

const c = new Config('master', 54);
console.log(c.name);
console.log(Config.settings);
console.log(Config.settings);
console.log(Config.settings);

class Database {
  static url: string;
  static connection: string;

  static {
    Database.url = 'mongodb://localhost:27017';
    Database.connection = `Connected to ${Database.url}`;
    console.log('Database initialized.');
  }

  static getConnection() {
    return Database.connection;
  }
}

console.log(Database.getConnection());
// "Connected to mongodb://localhost:27017"

// initialized static property
// run (class first loaded)
// can access static member
