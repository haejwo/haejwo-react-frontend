import React, { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
      };
    return (
        <>
            <form onSubmit={handleSubmit}>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
            <h2>간편로그인</h2>
            <button>카카오</button>
            <button>구글</button>
        </>
    );
}

