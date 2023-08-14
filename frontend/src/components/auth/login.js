export default function Login() {
  return (
    <div className="input-form">
      <label htmlFor="username">Username</label>
      <input type="text" name="username"></input>
      <label htmlFor="email">Email</label>
      <input type="email" name="email"></input>
      <label htmlFor="password">Password</label>
      <input type="password" name="password"></input>
    </div>
  );
}
