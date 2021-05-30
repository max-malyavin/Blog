import { hashSync, compareSync } from "bcryptjs";
// import jwt from "jsonwebtoken";

const UserCtrl = {
  create(schema, request) {
    const data = JSON.parse(request.requestBody);

    const user = schema.all("user").models.find((model) => model.attrs.username === data.username);

    if (user) {
      return {
        error: "Пользователь с таким именем уже существует.",
      };
    }

    const newPassword = hashSync(data.password, 8);

    schema.create("user", {
      ...data,
      password: newPassword,
    });

    // const token = jwt.sign({ username: data.username }, SECRET_KEY);
    const token = "123";

    return {
      data: {
        username: data.username,
        token,
      },
      status: "Успешно",
    };
  },
  login(schema, request) {
    const data = JSON.parse(request.requestBody);

    const user = schema.all("user").models.find((model) => model.attrs.username === data.username);

    if (!user) {
      return {
        error: "Нет пользователя с таким именем.",
      };
    }

    const validatedPassword = compareSync(data.password, user.attrs.password);

    if (!validatedPassword) {
      return {
        error: "Неправильный пароль",
      };
    }

    // const token = jwt.sign({ username: data.username }, SECRET_KEY);
    const token = "123";

    return {
      data: {
        username: data.username,
        token,
      },
      status: "Успешно",
    };
  },

  logout(schema, request) {},
};
export default UserCtrl;
