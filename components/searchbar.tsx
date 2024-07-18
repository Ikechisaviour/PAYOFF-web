"use client";
import { useState, ChangeEventHandler, FormEventHandler } from "react";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";

export function Search() {
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
        `border  flex items-center rounded-lg w-full md:max-w-[200px] lg:max-w-[521px] max-w-[70%] `,
        isFocused ? "border-green" : "border-[#E1E1E1]"
      )}
    >
      <Button
        variant="ghost"
        type="submit"
        className={cn(
          "rounded-lg  text-xs sm:text-lg md:text-xl",
          isFocused ? "text-green" : "text-formText"
        )}
        aria-label="Search"
      >
        <Icons.search className="w-3 h-3 " />
      </Button>
      <Input
        // type="search"
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        list="suggestions"
        placeholder="Search for anything"
        className={cn(
          "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg bg-transparent border-0 text-xs sm:text-sm ",
          isFocused ? "text-green placeholder:text-green" : "text-formText"
        )}
        aria-label="Search input"
      />
    </form>
  );
}
