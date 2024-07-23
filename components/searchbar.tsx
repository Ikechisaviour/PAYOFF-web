"use client";
import { useState, ChangeEventHandler, FormEventHandler } from "react";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";

interface IProps {
  className?: string;
  placeHolder?: string;
}
export function Search({ className, placeHolder = "Search for anything" }: IProps) {
  const [searchTerm, setSearchTerm] = useState("");
  //   const [suggestions, setSuggestions] = useState(dummySuggestions); // to be fetched
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    // setSuggestions(
    //   dummySuggestions.filter((suggestion) =>
    //     suggestion.toLowerCase().includes(value.toLowerCase())
    //   )
    // );
  };

  const handleSearch: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // a form submitted
  };
  return (
    <form
      onSubmit={handleSearch}
      className={cn(
        `border  flex items-center rounded-lg  `,
        isFocused ? "border-green" : "border-[#E1E1E1]",
        className
      )}
    >
      <Button
        variant="ghost"
        type="submit"
        className={cn(
          "rounded-lg  text-xs sm:text-lg md:text-xl ",
          isFocused ? "text-green" : "text-formText"
        )}
        aria-label="Search"
      >
        <Icons.search className="w-4 h-4 " />
      </Button>
      <Input
        // type="search"
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        list="suggestions"
        placeholder={placeHolder}
        className={cn(
          "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg bg-transparent border-0 text-xs sm:text-sm ",
          isFocused ? "text-green placeholder:text-green" : "text-formText"
        )}
        aria-label="Search input"
      />
    </form>
  );
}
