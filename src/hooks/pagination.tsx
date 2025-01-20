"use client";

import { DoctorModel } from "@/types/types";
import { useState, useEffect } from "react";

interface PaginationProps {
  items: DoctorModel[];
  pageSize: number;
}

const usePagination = ({ items, pageSize }: PaginationProps) => {
  const [currentPage, setPage] = useState<number>(1);
  const [currentItems, setCurrentItems] = useState<DoctorModel[]>([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setCurrentItems(items.slice(startIndex, endIndex));
  }, [items, currentPage, pageSize]);

  const totalPages = Math.ceil(items.length / pageSize);

  return { currentItems, currentPage, totalPages, setPage };
};

export default usePagination;
