import {
  createContext,
  useContext,
  useMemo,
  useState,
  PropsWithChildren,
} from "react";
import { commentData } from "@/mock/comments";
import { CommentModel } from "@/types/types";

interface CommentContextType {
  searchValue: string;
  setSearchValue: (value: string) => void;
  visitType: string;
  setVisitType: (value: string) => void;
  sortType: string;
  setSortType: (value: string) => void;
  filteredComments: CommentModel[];
}

export const CommentContext = createContext<CommentContextType>({
  searchValue: "",
  setSearchValue: () => {},
  visitType: "all",
  setVisitType: () => {},
  sortType: "mostPopular",
  setSortType: () => {},
  filteredComments: [],
});

export const CommentsProvider = ({ children }: PropsWithChildren) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [visitType, setVisitType] = useState<string>("all");
  const [sortType, setSortType] = useState<string>("mostPopular");

  const filteredComments = useMemo(
    () =>
      commentData
        .filter((comment) => {
          const matchSearch = comment.message
            .toLowerCase()
            .includes(searchValue.toLowerCase());

          const matchVisitType =
            visitType === "all" ||
            (visitType === "online" && comment.onlineVisit) ||
            (visitType === "onsite" && !comment.onlineVisit);
          return matchSearch && matchVisitType;
        })
        .sort((a, b) => {
          if (sortType === "mostPopular") {
            return b.rate - a.rate;
          } else if (sortType === "newest") {
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
          }
          return 0;
        }),
    [searchValue, visitType, sortType],
  );

  return (
    <CommentContext.Provider
      value={{
        searchValue,
        setSearchValue,
        visitType,
        setVisitType,
        sortType,
        setSortType,
        filteredComments,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export const useComment = () => useContext(CommentContext);
