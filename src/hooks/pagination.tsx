"use client";

import { DoctorModel } from "@/types/types";
import { useState, useEffect, useMemo } from "react";

interface PaginationProps {
  items: DoctorModel[];
  pageSize: number;
}

const usePagination = ({ items, pageSize }: PaginationProps) => {
  const [currentPage, setPage] = useState<number>(1);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return items.slice(startIndex, endIndex);
  }, [items, currentPage, pageSize]);

  const totalPages = Math.ceil(items.length / pageSize);

  return { currentItems, currentPage, totalPages, setPage };
};

export default usePagination;
