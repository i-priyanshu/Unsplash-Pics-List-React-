import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID UrvIko-yDp9EWuvkvBTYQvixKBwEyRnjJ1uxjV7-VCM",
      }
});

