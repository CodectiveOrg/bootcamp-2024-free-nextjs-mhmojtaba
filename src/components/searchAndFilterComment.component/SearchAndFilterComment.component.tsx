import React from "react";

import { useComment } from "@/providers/commentsProvider";

import styles from "./searchAndFilterComment.module.css";

const SearchAndFilterCommentComponent = () => {
  const {
    visitType,
    setVisitType,
    sortType,
    setSortType,
    searchValue,
    setSearchValue,
  } = useComment();
  return (
    <div className={styles.sortSearchContainer}>
      <div className={styles.sort}>
        <select
          onChange={(e) => setVisitType(e.target.value)}
          value={visitType}
        >
          <option value="all">همه نظرات</option>
          <option value="online">ویزیت شده آنلاین</option>
          <option value="onsite">ویزیت شده در مطب</option>
        </select>
        <select onChange={(e) => setSortType(e.target.value)} value={sortType}>
          <option value="mostPopular">محبوب ترین</option>
          <option value="newest">جدیدترین</option>
        </select>
      </div>
      <div className={styles.search}>
        <input
          type="text"
          name="search"
          placeholder="جستجو در نظرات بیماران"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </div>
    </div>
  );
};

export default SearchAndFilterCommentComponent;
