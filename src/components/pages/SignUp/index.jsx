import { useState } from "react";
import { Link } from "react-router-dom";
import { UserService } from "@/api";

export function SignUp() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  function handleChange(prop, value) {
    setValues({ ...values, [prop]: value });
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const { username, password } = values;

    try {
      const response = await UserService.register({ username, password });

      if (response.data.error) {
        console.log(response.data.error);
      } else {
        console.log(response.data, "data");
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={values.username}
          onChange={(ev) => handleChange("username", ev.target.value)}
          placeholder="Пользователь"
        />
        <input
          type="text"
          placeholder="Пароль"
          value={values.password}
          onChange={(ev) => handleChange("password", ev.target.value)}
        />
        <button type="submit">Зарегистрироваться</button>
        <hr />
        <Link to="/">
          <button>У меня уже есть аккаунт</button>
        </Link>
      </form>
    </div>
  );
}
