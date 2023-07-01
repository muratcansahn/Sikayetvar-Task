"use client";

import React, { useState, useEffect, useCallback } from "react";
import { getUsersDetail } from "../services/UsersService";
import { debounce } from "lodash";
import { useSearchParams, useRouter } from "next/navigation";

const UsersList = () => {
  console.log("users list rendered");
  const searchParams = useSearchParams();
  const router = useRouter();

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [debounceSearch, setDebounceSearch] = useState("");

  const searchp = searchParams.get("search");

  const fetchUsers = async () => {
    try {
      const res = await getUsersDetail();
      if (res.status === 200) {
        setUsers(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = useCallback(
    debounce((value) => {
      console.log("handle search", value);
      setDebounceSearch(value);
    }, 500),
    []
  );

  const debounceValue = useCallback(
    debounce(() => handleSearch(search, 50000), [search]),
    [handleSearch]
  );

  const filteredData = users.filter((user) =>
    user.firstName.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    handleSearch(search);
    return handleSearch.cancel;
  }, [search, handleSearch]);

  return (
    <>
      <div>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <p>Search; {search}</p>
          {console.log(setSearch)}
          <p>Debounce search; {debounceSearch}</p>
          <p>Search params : {searchp}</p>
        </div>
        {users.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </div>

      <button type="button" onClick={() => router.push("/dashboard")}>
        button
      </button>
    </>
  );
};

export default UsersList;
