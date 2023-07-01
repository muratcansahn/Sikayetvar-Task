"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getUsersDetail } from "../services/UsersService";
import Sidebar from "../components/Sidebar";
import styles from "../../styles/dashboard.module.scss";
import Header from "../components/Header";
import { WidgetsItems } from "../utils/utils.js";
import Image from "next/image";

const Dashboard = () => {
  const [searchResults, setSearchResults] = useState([]);
  const searchParams = useSearchParams();

  const searchQuery = searchParams.get("search");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/users/search?q=${searchQuery}`
        );
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery]);

  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'
  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.sidebarContainer}>
          <Sidebar />
        </div>
        <div className={styles.contentContainer}>
          <div>
            <Header />
          </div>
          <div className={styles.contentWidgets}>
            {WidgetsItems.map((item) => (
              <div
                className={styles.contentWidget}
                style={{ backgroundColor: item.background }}
              >
                <div className={styles.left}>
                  <div style={{ backgroundColor: item.background }}>
                    <Image src={item.icon} width={48} height={38}></Image>
                  </div>
                  <span className={styles.widgetTitle}>{item.title}</span>
                </div>
                <div className={styles.right}>
                  <span className={styles.widgetCount}>{item.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
