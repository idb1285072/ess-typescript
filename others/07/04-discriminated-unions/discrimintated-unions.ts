type FileSource = { type: 'file'; path: string };
const fileSource: FileSource = {
  type: 'file',
  path: 'some/path/to/file.csv',
};

type DBSource = { type: 'db'; connectionUrl: string };
const dbSource: DBSource = {
  type: 'db',
  connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

// function loadData(source: Source) {
//   // Open + read file OR reach out the database server
//   if (source.type === 'db') {
//     source.connectionUrl;
//     return;
//   }
//   source.path;
// }

// Type Barricade
function isFile(source: Source) {
  return source.type === 'file';
}

function loadData(source: Source) {
  // Open + read file OR reach out the database server
  if (isFile(source)) {
    source.path;
    return;
  }
  source.connectionUrl;
}
