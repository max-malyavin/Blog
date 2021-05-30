import { hashSync, compareSync } from "bcryptjs";

const usersSeeder = (server) => {
  server.db.loadData({
    users: [
      {
        id: 1,
        username: "admin",
        password: hashSync("admin", 8),
      },
    ],
  });
};

export default function seeds(server) {
  // server.loadFixtures();
  usersSeeder(server);
}
