"use client";

import * as React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { APP_KEYS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ISortTable } from "@/types";
import { Icons } from "./icons";
import { Search } from "./searchbar";
import { motion, AnimatePresence } from "framer-motion";
import { format, parseISO } from "date-fns";
import { Transaction } from "./transaction";

export const data: Transaction[] = [
  {
    id: "T001",
    date: "2024-07-15T09:23:54Z",
    description: "Grocery shopping",
    channel: "Credit Card",
    amount: 85.5,
    status: "complete",
  },
  {
    id: "T002",
    date: "2024-07-16T14:30:00Z",
    description: "Online subscription",
    channel: "PayPal",
    amount: 12.99,
    status: "processing",
  },
  {
    id: "T003",
    date: "2024-07-17T18:45:12Z",
    description: "Gas station",
    channel: "Debit Card",
    amount: 45.0,
    status: "complete",
  },
  {
    id: "T004",
    date: "2024-07-18T20:15:30Z",
    description: "Restaurant dinner",
    channel: "Credit Card",
    amount: 78.25,
    status: "complete",
  },
  {
    id: "T005",
    date: "2024-07-19T11:00:00Z",
    description: "Mobile phone bill",
    channel: "Bank Transfer",
    amount: 55.0,
    status: "processing",
  },
  {
    id: "T006",
    date: "2024-07-20T16:20:45Z",
    description: "Online shopping",
    channel: "Credit Card",
    amount: 129.99,
    status: "failed",
  },
  {
    id: "T007",
    date: "2024-07-21T22:10:18Z",
    description: "Taxi ride",
    channel: "Digital Wallet",
    amount: 22.5,
    status: "complete",
  },
  {
    id: "T008",
    date: "2024-07-22T08:00:00Z",
    description: "Gym membership",
    channel: "Bank Transfer",
    amount: 50.0,
    status: "incomplete",
  },
  {
    id: "T009",
    date: "2024-07-23T10:30:25Z",
    description: "Coffee shop",
    channel: "Debit Card",
    amount: 4.75,
    status: "complete",
  },
  {
    id: "T010",
    date: "2024-07-24T19:45:00Z",
    description: "Electric bill",
    channel: "Bank Transfer",
    amount: 95.0,
    status: "processing",
  },
];

export type Transaction = {
  id: string;
  date: string;
  description: string;
  channel: string;
  amount: number;
  status: "complete" | "processing" | "incomplete" | "failed";
};

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "date",
    header: () => (
      <h3 className="text-[#989898] text-xs lg:text-sm font-normal">Period</h3>
    ),
    cell: ({ row }) => {
      const date = format(parseISO(row.original.date), "dd/MM/yyyy hh:mma");
      return <div className="text-nowrap">{date}</div>;
    },
  },
  {
    accessorKey: "description",
    header: () => (
      <h3 className="text-[#989898] text-xs lg:text-sm font-normal">
        Description
      </h3>
    ),
    cell: ({ row }) => (
      <div className="text-nowrap">{row.getValue("description")}</div>
    ),
  },

  {
    accessorKey: "channel",

    header: () => (
      <h3 className="text-[#989898] text-xs lg:text-sm font-normal">Channel</h3>
    ),
    cell: ({ row }) => (
      <div className="text-nowrap">{row.getValue("channel")}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: () => (
      <h3 className="text-[#989898] text-xs lg:text-sm font-normal">Amount</h3>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount);

      return <div className="">{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: () => (
      <h3 className="text-[#989898] text-xs lg:text-sm font-normal">Status</h3>
    ),
    cell: ({ row }) => (
      <div className="flex">
        <span className="capitalize text-xs bg-status-background text-status relative inline-flex items-center gap-2 rounded-2xl px-2 p-1">
          <span className="w-[6px] h-[6px] bg-status rounded-full"></span>
          {row.getValue("status")}
        </span>
      </div>
    ),
  },
];

export function HistoryTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [sort, setSort] = React.useState<ISortTable>({
    transaction: "",
    date: [],
    dateLabel: [],
  });
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const [openSheet, setOpenSheet] = React.useState<boolean>(false);
  const toggleSheet = () => setOpenSheet((prev) => !prev);

  const [currentTransaction, setCurrentTransaction] = React.useState("");
  const handleTransaction = (_id: string) => setCurrentTransaction(_id);

  const handlePopup = (_id: string) => {
    toggleSheet();
    handleTransaction(_id);
  }

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 flex-wrap  justify-start">
        <h3 className="scroll-m-20 text-xs text-[#767575] font-normal tracking-tight ">
          Filter By:
        </h3>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="sm"
              variant="outline"
              className=" border h-[26px] text-xs p-0 px-2 py-1 rounded-[15px] bg-transparent"
            >
              {APP_KEYS.TRANSACTION_TYPES?.find(
                (item) => item.value === sort.transaction
              )?.label || "Type"}{" "}
              <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="md:min-w-[233px] rounded-2xl p-0 py-5"
          >
            {APP_KEYS.TRANSACTION_TYPES.map((item) => (
              <DropdownMenuItem
                key={item.value}
                onClick={() =>
                  setSort((prev) => ({ ...prev, transaction: item.value }))
                }
                className={cn(
                  "hover:bg-dashboardLink-activeBg hover:text-dashboardLink-active cursor-pointer px-5 rounded-none",
                  item.value === sort.transaction
                    ? "bg-dashboardLink-activeBg text-dashboardLink-active"
                    : ""
                )}
              >
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="sm"
              variant="outline"
              className=" border h-[26px] text-xs p-0 px-2 py-1 rounded-[15px] bg-transparent"
            >
              <Icons.sort className="w-4 h-4 mr-2" />
              Date
              <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="md:min-w-[233px] rounded-2xl p-0 py-5"
          >
            {APP_KEYS.DATE_TYPES.map((item) => (
              <DropdownMenuItem
                key={item.label}
                onClick={() =>
                  setSort((prev) => {
                    const exist = prev.dateLabel?.find(
                      (label) => label === item.label
                    );
                    if (exist) return prev;
                    return {
                      transaction: prev.transaction,
                      date: [...prev.date, item.value],
                      dateLabel: [...prev.dateLabel, item.label],
                    };
                  })
                }
                className={cn(
                  "hover:bg-dashboardLink-activeBg hover:text-dashboardLink-active cursor-pointer px-5 rounded-none",
                  sort.date.includes(item.value)
                    ? "bg-dashboardLink-activeBg text-dashboardLink-active"
                    : ""
                )}
              >
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <ul className="flex items-center gap-3 flex-wrap">
          <AnimatePresence>
            {sort.dateLabel?.map((label) => (
              <motion.li
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="flex items-center h-[26px] border rounded-[15px] text-xs p-2 bg-[#F1FFE8] text-[#41920D] cursor-pointer hover:opacity-95"
              >
                <Icons.sort className="w-[10px] h-[10px] mr-2" />
                {label}{" "}
                <motion.button
                  className="p-0"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    const item = APP_KEYS.DATE_TYPES.find(
                      (item) => item.label === label
                    );
                    if (!item) return;
                    setSort((prev) => {
                      const date =
                        prev.date?.filter((date) => date !== item.value) || [];
                      const dateLabel =
                        prev.dateLabel?.filter(
                          (label) => label !== item.label
                        ) || [];
                      return {
                        ...prev,
                        date,
                        dateLabel,
                      };
                    });
                  }}
                >
                  <Icons.close className="w-[10px] h-[10px] ml-2" />
                </motion.button>{" "}
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
        <Button
          variant="outline"
          className=" bg-transparent text-xs lg:text-sm w-full md:w-auto"
        >
          <Icons.cloudDownload className="mr-2 h-4 w-4 " />
          Download Statement
        </Button>
        <Search
          className="w-full md:max-w-sm"
          placeHolder="Search transactions history..."
        />
      </div>
      <div className=" mt-5">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="cursor-pointer"
                  onClick={() => handlePopup(row.original.id)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
      {currentTransaction && (
        <Transaction
          open={openSheet}
          transactionId={currentTransaction}
          onOpenChange={toggleSheet}
        />
      )}
    </div>
  );
}
