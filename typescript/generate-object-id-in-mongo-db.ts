export function generateObjectIdInMongoDB(): string {
  const currentTimestamp = Math.floor(Date.now() / 1000).toString(16);
  const objectId = 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => Math.floor(Math.random() * 16).toString(16));
  return `${currentTimestamp}${objectId}`;
}
