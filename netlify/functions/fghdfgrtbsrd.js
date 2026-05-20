exports.handler = async () => {
  try {
    const response = await fetch(`${process.env.WP_URL}/wp-json/jwt-auth/v1/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: process.env.WP_USERNAME,
        password: process.env.WP_PASSWORD,
      }),
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ token: data.token }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch token" }),
    };
  }
};