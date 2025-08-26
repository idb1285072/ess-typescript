class Settings {
  static env: string;
  static debug: boolean;

  static {
    // Settings.env = process.env.NODE_ENV ?? "development";
    Settings.debug = Settings.env !== "production"; // run time logic, calculation, condition
  }
}


class Numbers {
  static base: number;
  static double: number;

  static {
    Numbers.base = 10;
    Numbers.double = Numbers.base * 2; // one static property depend on another
  }
}

class Cache {
  static store: Map<string, string>;

  static { // one time setup
    Cache.store = new Map();
    console.log("Cache initialized");
  }
}
