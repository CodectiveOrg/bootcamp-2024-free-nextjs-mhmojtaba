"use client";

import { DoctorModel } from "@/types/types";
import { useState, useEffect } from "react";

interface PaginationProps {
  items: DoctorModel[];
  pageSize: number;
}

function usePagination({ items, pageSize }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(items.length / pageSize);
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;

  const currentItems: DoctorModel[] = items.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const setPage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    // Ensure currentPage doesn't exceed totalPages
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return {
    currentItems,
    currentPage,
    totalPages,
    setPage,
  };
}

export default usePagination;
