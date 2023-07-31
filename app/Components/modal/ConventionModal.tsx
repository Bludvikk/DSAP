"use client";

import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import axios from "axios";
import Modal from "./Modal";
import Input from "../Input/input";
import Heading from "../Heading";
import { BsBuildings } from "react-icons/bs";
import useWriteConventionModal from "@/app/hooks/useWriteConventionModal";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { DatePickerDemo } from "../Input/DatePicker";
import Image from "next/image";

interface WriteConventionModalProps {
  conventionItemId: number | null;
}
const WriteConventionModal = ({
  conventionItemId,
}: WriteConventionModalProps) => {
  const {
    handleSubmit,
    register,
    getValues,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      author: "Admin",
      userId: 1,
    },
    mode: "onChange",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const WriteModal = useWriteConventionModal();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file);

    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "my_upload");
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/dsap/image/upload`,
          formData
        );

        console.log(response);

        const imageUrl = response.data.secure_url;

        setImageUrl(imageUrl);

        setValue("attachments", imageUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  useEffect(() => {
    if (imageUrl) {
      const parser = imageUrl.toString();
      setValue("attachments", parser);
    }
  }, [imageUrl]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    // Send the event data to your endpoint
    axios
      .post("/api/conventions", data)
      .then(() => {
        toast({
          title: "Successfully added convention",
          description: `Convention Title ${getValues("title")}`,
        });
        WriteModal.onClose();
      })
      .catch((error) => {
        toast({
          title: `Error Adding Convention `,
          description: `${error.message}`,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });

    // Handle the response, e.g., show success message, redirect, etc.
  };

  const onUpdate: SubmitHandler<FieldValues> = (data) => {
    if (!conventionItemId) {
      console.error("EventItemID is missing for update");
      return;
    }

    setIsLoading(true);

    axios
      .put(`api/conventions?id=${conventionItemId}`, data)
      .then(() => {
        toast({
          title: "Successfully Updated Event",
        });
        WriteModal.onClose();
      })
      .catch((error) => {
        toast({
          title: "Error Updating Convention",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (conventionItemId) {
      // Fetch the news item by its ID from your backend API
      // Update the below API endpoint to match your actual backend endpoint for fetching a single news item
      axios
        .get(`/api/conventions?id=${conventionItemId}`)
        .then((response) => {
          const existingConventionItem = response.data; // Assuming your API response returns the existing news item
          if (existingConventionItem) {
            // Set the form fields' initial values with the existing data
            setValue("title", existingConventionItem.title);
            setValue("attachments", existingConventionItem.attachments);
            setValue("content", existingConventionItem.content);
            setValue("location", existingConventionItem.location);
            // ... set other form field values ...
          }
        })
        .catch((error) => {
          console.error("Error fetching existing news item:", error);
        });
    }
  }, [conventionItemId, setValue]);

  const handleSubmitFunction = conventionItemId ? onUpdate : onSubmit;

  const handleDiscard = () => {
    setSelectedFile(null);
    setImageUrl("");
  };

  const bodyContent = (
    <div className="flex flex-col h-[600px] self-stretch gap-6 overflow-x-hidden overflow-y-scroll ">
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
        <div className="flex-col flex gap-2 w-auto h-auto items-start justify-center">
          <h1>Convention Date</h1>
          <div className="flex flex-row gap-4">
            <DatePickerDemo
              label={"Start Date"}
              control={control}
              name="startDate"
            />
            <DatePickerDemo
              label={"End Date"}
              control={control}
              name="endDate"
            />
          </div>
        </div>
        <div className=" flex-col flex gap-2 w-auto md:w-96 h-auto items-start justify-center">
          <div className="pl-10">
            <text>Convention Name</text>
          </div>
          <div className="flex flex-row gap-2 w-full items-center justify-start ">
            <BsBuildings size={30} />
            <Input
              register={register}
              id="title"
              type="text"
              errors={errors}
              label="Convention Name"
              required
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="file_input"
        >
          Upload file
        </label>
        <div className="flex-row flex w-full justify-between items-center border-[1px] rounded-md px-2 py-2">
          {selectedFile ? (
            <div className="flex flex-col items-center justify-start">
              <img
                src={imageUrl}
                alt="Uploaded file"
                className="h-[60px] w-auto"
              />
              <div className="mt-2 flex space-x-4">
                <button
                  type="button"
                  onClick={handleDiscard}
                  className="bg-red-500 hover:bg-red-600 px-3 py-1 text-white rounded-md"
                >
                  Discard
                </button>
                <input
                  id="file_input"
                  {...register("attachments")}
                  type="file"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          ) : (
            <input
              id="file_input"
              {...register("attachments")}
              type="file"
              onChange={handleFileChange}
            />
          )}
        </div>
      </div>
      <Input
        id="location"
        label="Venue"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Controller
        name="content"
        control={control}
        rules={{
          required: "Please enter the content of the event",
        }}
        render={({ field }) => (
          <ReactQuill
            {...field}
            className=" h-full
             pb-12"
            theme={"snow"}
            onChange={(_content, _delta, _source, editor) => {
              field.onChange(editor.getHTML());
            }}
            value={field.value}
            modules={{
              toolbar: {
                container: [
                  [{ header: [1, 2, 3, 4, 5, 6, false] }], // Headers dropdown
                  ["bold", "italic", "underline", "strike"], // Toggled buttons
                  [{ list: "ordered" }, { list: "bullet" }], // Lists
                  ["blockquote", "code-block"], // Blockquote and code block
                  [{ align: [] }], // Text alignment
                  ["link"], // Link, image, and video
                  ["clean"], // Remove formatting
                ],
              },
            }}
          />
        )}
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={WriteModal.isOpen}
      title="Post a Convention"
      actionLabel={conventionItemId === null ? "POST" : "UPDATE"}
      onClose={WriteModal.onClose}
      onSubmit={handleSubmit(handleSubmitFunction)}
      body={bodyContent}
    />
  );
};

export default WriteConventionModal;
