export default function getFullResponseFromAPI(bool) {
  if (!bool) throw new Error('The fake API is not working currently');
  return Promise.resolve({ status: 200, body: 'success' });
}
