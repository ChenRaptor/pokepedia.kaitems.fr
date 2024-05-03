import handleApiFetchErrors from "./error-route-handler";

async function fetchApi(method: string, url: string, {body, token}: {body?: any, token?: string}) {
  return await handleApiFetchErrors(async () => {
    let options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (token) {
      options = { ...options, headers: { ...options.headers, Authorization: `Bearer ${token}` } };
    }

    if (body) {
      options = { ...options, body: JSON.stringify(body) };
    }

    const value = await fetch(`${process.env.NEXT_PUBLIC_API_ADRESS}/${url}`, options);
    if (!value.ok) {
      throw new Error(value.status.toString());
    }
    return await value.json();
  })
}

export { fetchApi }