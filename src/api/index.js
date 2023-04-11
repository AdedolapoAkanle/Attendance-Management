const url = "https://attendance-mgt.onrender.com/api";

export const api = async (page, method, data) => {
  const headers = {
    Accept: "application/json",
    "Content-type": "application/json",
  };
  const req = await fetch(`${url}/${page}`, {
    method,
    headers,
    // body: JSON.stringify(data),
  });
  const res = await req.json();

  return res;
};

export class Api {
  constructor() {
    this.headers = {
      Accept: "application/json",
      "Content-type": "application/json",
    };
  }

  async get(page) {
    const req = await fetch(`${url}/${page}`, {
      method: "GET",
      headers: this.headers,
    });

    const res = await req.json();

    return res;
  }

  async post(page, data) {
    const req = await fetch(`${url}/${page}`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    });

    const res = await req.json();

    return res;
  }

  async delete(page, data) {
    const req = await fetch(`${url}/${page}`, {
      method: "DELETE",
      headers: this.headers,
      body: JSON.stringify(data),
    });

    const res = await req.json();

    return res;
  }

  async update(page, data) {
    const req = await fetch(`${url}/${page}`, {
      method: "PUT",
      headers: this.headers,
      body: JSON.stringify(data),
    });

    const res = await req.json();

    return res;
  }
}
