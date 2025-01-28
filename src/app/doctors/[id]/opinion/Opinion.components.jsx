"use client";
import React, { useState } from "react";
import Image from "next/image";
import star from "@/assets/Images/starImage.svg";
import styles from "./opinion.module.css";
import { opinionData } from "@/mock/opinions";

const OpinionComponents = ({ selectedDoctor }) => {
  const [searchValue, setSearchValue] = useState("");
  const [visitType, setVisitType] = useState("all");
  const [sortType, setSortType] = useState("mostPopular");
  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const sortTypeHandler = (e) => {
    setSortType(e.target.value);
  };

  const sortVisitTypeHandler = (e) => {
    setVisitType(e.target.value);
  };

  const filteredOpinions = opinionData
    .filter((opinion) => {
      const matchSearch = opinion.message
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const matchVisitType =
        visitType === "all" ||
        (visitType === "online" && opinion.onlineVisit) ||
        (visitType === "onsite" && !opinion.onlineVisit);
      return matchSearch && matchVisitType;
    })
    .sort((a, b) => {
      if (sortType === "mostPopular") {
        return b.rate - a.rate;
      } else if (sortType === "newest") {
        return new Date(b.date) - new Date(a.date);
      }
      return 0;
    });

  return (
    <div className={styles.reviewsContainer}>
      <div className={styles.rating}>
        <div className={styles.ratingContent}>
          <Image src={star} alt="star" width={14} height={14} />
          <p className={styles.average}>
            {selectedDoctor.averageRating.toPrecision(2)}
          </p>
        </div>
        <p
          className={styles.totalVotes}
        >{`( ${selectedDoctor.totalVotes} نظر)`}</p>
      </div>
      <div className={styles.sort_search}>
        <div className={styles.sort}>
          <select
            name=""
            id=""
            className={styles.sortSelect_visit}
            onChange={sortVisitTypeHandler}
            value={visitType}
          >
            <option value="all">همه نظرات</option>
            <option value="online">ویزیت شده آنلاین</option>
            <option value="onsite">ویزیت شده در مطب</option>
          </select>
          <select
            name=""
            id=""
            className={styles.sortSelect_rate}
            onChange={sortTypeHandler}
            value={sortType}
          >
            <option value="mostPopular">محبوب ترین</option>
            <option value="newest">جدیدترین</option>
          </select>
        </div>
        <div className={styles.search}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="جستجو در نظرات بیماران"
            onChange={searchHandler}
            value={searchValue}
          />
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.reviewsContent}>
        {filteredOpinions.map((opinion) => (
          <div className={styles.review} key={opinion.id}>
            <div className={styles.reviewBox}>
              <div className={styles.reviewContent}>
                <div className={styles.reviewUser}>
                  <div className={styles.reviewUser_info}>
                    <div className={styles.reviewUser_logo}>
                      {opinion.author.slice(0, 1)}
                    </div>
                    <div className={styles.reviewUser_nameBadge}>
                      <div className={styles.reviewUser_name}>
                        {opinion.author}{" "}
                        <span>
                          {opinion.isVisited ? "ویزیت شده" : "ویزیت نشده"}
                        </span>
                      </div>
                      <div className={styles.reviewUser_visitInfo}>
                        <span>{opinion.lastVisit}</span> |{" "}
                        <span>
                          {opinion.onlineVisit
                            ? "ویزیت آنلاین"
                            : `مطب دکتر ${selectedDoctor.name}`}
                        </span>
                      </div>
                      <div></div>
                    </div>
                    <div></div>
                  </div>
                  <div className={styles.reviewUser_rate}>{opinion.rate}</div>
                </div>
                <div className={styles.message}>{opinion.message}</div>
                <div className={styles.reviewRate}>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="1em"
                      className="plasmic-default__svg plasmic_all__rN0Vc PlasmicReviewCard_svg__lsG2C__aB0AZ"
                      role="img"
                    >
                      <path
                        d="M7.48 18.35l3.1 2.4c.4.4 1.3.6 1.9.6h3.8c1.2 0 2.5-.9 2.8-2.1l2.4-7.3c.5-1.4-.4-2.6-1.9-2.6h-4c-.6 0-1.1-.5-1-1.2l.5-3.2c.2-.9-.4-1.9-1.3-2.2-.8-.3-1.8.1-2.2.7l-4.1 6.1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      ></path>
                      <path
                        d="M2.38 18.35v-9.8c0-1.4.6-1.9 2-1.9h1c1.4 0 2 .5 2 1.9v9.8c0 1.4-.6 1.9-2 1.9h-1c-1.4 0-2-.5-2-1.9z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    چقد مفید بود؟
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="plasmic-default__svg plasmic_all__rN0Vc PlasmicReviewCard_svg__buJg__12jlA lucide lucide-share-2"
                      viewBox="0 0 24 24"
                      height="1em"
                      role="img"
                    >
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <path d="M8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98"></path>
                    </svg>
                    ارسال کن
                  </div>
                </div>
              </div>
              <div className={styles.divider}></div>
            </div>
          </div>
        ))}
        <button className={styles.btn}>مشاهده بیشتر</button>
      </div>
    </div>
  );
};

export default OpinionComponents;
