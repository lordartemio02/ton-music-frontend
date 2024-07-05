import { Input } from "@telegram-apps/telegram-ui";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { CloseCircleIcon, SearchInputIcon } from "../assets/icons";
import { useDebounce } from "../hooks/useDebounce";

const SearchPage: FC = () => {
  const [search, setSearch] = useState("");
  const debounceValue = useDebounce(search, 300);

  useEffect(() => {
    // handle request to search
  }, [debounceValue]);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="[&>div]:p-0 [&>div]:rounded-[10px]">
        <Input
          before={<SearchInputIcon className="h-4 w-4" />}
          after={
            search.length > 0 ? <CloseCircleIcon className="h-4 w-4" /> : null
          }
          onChange={onChangeSearch}
          value={search}
          placeholder={"Search"}
          className={"!rounded-[10px] p-[10px] gap-2 bg-black/75 text-white"}
          type={"search"}
        />
      </div>
    </div>
  );
};

export default SearchPage;
