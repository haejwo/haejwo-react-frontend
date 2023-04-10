import React, { useState } from 'react';

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
    };
    return (
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
            Password1:
            <input
              type="password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
            />
          </label>
          <label>
            Password2:
            <input
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
    );
}

