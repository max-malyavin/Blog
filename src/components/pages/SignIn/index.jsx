import { useState } from "react";
import { Link } from "react-router-dom";
import { UserService } from "@/api";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/store/ducks/user/reducer";
import { userSelectors } from "@/store/ducks/user/selectors";

export function SignIn() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const isLoading = useSelector(userSelectors.isLoading);
  const user = useSelector(userSelectors.userData);

  const dispatch = useDispatch();
  function handleChange(prop, value) {
    setValues({ ...values, [prop]: value });
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    dispatch(login(values));
    setValues({
      username: "",
      password: "",
    });
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
        <button disabled={isLoading} type="submit">
          Логин
        </button>
        {isLoading && <span>Загрузка...</span>}
        <hr />
        <Link to="/signup">
          <button>Создать новый аккаунт</button>
        </Link>
      </form>
      <div style={{ fontSize: "20px", padding: "10px" }}> {user && JSON.stringify(user.data)}</div>
    </div>
  );
}
