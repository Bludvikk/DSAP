"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Control,
  Controller,
  ControllerFieldState,
  FieldValues,
} from "react-hook-form";

interface DatePicProps {
  control: Control<FieldValues>;
  name: string;
  label: string;
}

export function DatePickerDemo({ control, name, label }: DatePicProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start focus:border-teal-500 text-left font-normal",
                !value && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {value ? format(value, "PPP") : <span>{label}</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              className="text-teal-500"
              mode="single"
              selected={value}
              onSelect={onChange}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      )}
    />
  );
}
