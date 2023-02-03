export default function authHeader() {
  const userData = JSON.parse(localStorage.getItem('userData'));

  if (userData && userData.accessToken) {
    return { Authorization: 'Bearer ' + userData.accessToken };
  } else {
    return {};
  }
}