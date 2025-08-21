// order: required -> default(=) -> optional(?) -> rest(...)
function logMessage(
  level: 'info' | 'warn' | 'error',
  message: string = 'No message provided',
  timestamp?: Date,
  ...tags: string[]
) {
  const time = timestamp?.toISOString() ?? new Date().toISOString();
  console.log(`[${level.toUpperCase()}] ${time}: ${message}`);
  if (tags.length) {
    console.log(`Tags: ${tags.join(', ')}`);
  }
}
logMessage('info');
logMessage('error', 'Something broke');
logMessage('error', 'Something broke', new Date(), 'urgent', 'backend');

// p?:T => T|undefined
function use(x?: number) {
  if (x !== undefined) console.log(x.toFixed()); // x: number | undefined
}
use(32);
// default parameter is optional but type not T|undefined inside funtion
