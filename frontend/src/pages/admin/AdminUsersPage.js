import UsersPageComponent from "./components/UsersPageComponent";

import axios from "axios";

const fetchUsers = async (abctrl) => {
    const {data} = await axios.get("/api/users", {
        signal: abctrl.signal,
    });
    return data
}

const deleteUser = async (userId) => {
    const { data } = await axios.delete(`/api/users/${userId}`);
    return data
}

const AdminUsersPage = () => {
  return <UsersPageComponent fetchUsers={fetchUsers} deleteUser={deleteUser} />;
};

export default AdminUsersPage;
