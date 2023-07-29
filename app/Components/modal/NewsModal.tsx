"use client";

import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import toast, { Toast } from "react-hot-toast";
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

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { DatePickerDemo } from "../Input/DatePicker";
import Image from "next/image";
import useNewsModal from "@/app/hooks/useNewsModal";

interface WriteNewsModalProps {
  newsItemId: number | null;
}
const WriteNewsModal = ({ newsItemId }: WriteNewsModalProps) => {
  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      author: "Admin",
      userId: 1,
    },
    mode: "onChange",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const WriteModal = useNewsModal();

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

    axios
      .post("api/news", data)
      .then(() => {
        toast.success("News Posted!");
        WriteModal.onClose();
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onUpdate: SubmitHandler<FieldValues> = (data) => {
    if (!newsItemId) {
      console.error("newsItemId is missing for update.");
      return;
    }

    setIsLoading(true);

    axios
      .put(`api/news?id=${newsItemId}`, data) // Use the newsItemId for the update
      .then(() => {
        toast.success("News Updated!");
        WriteModal.onClose();
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (newsItemId) {
      // Fetch the news item by its ID from your backend API
      // Update the below API endpoint to match your actual backend endpoint for fetching a single news item
      axios
        .get(`/api/news?id=${newsItemId}`)
        .then((response) => {
          const existingNewsItem = response.data; // Assuming your API response returns the existing news item
          if (existingNewsItem) {
            // Set the form fields' initial values with the existing data
            setValue("title", existingNewsItem.title);
            setValue("attachments", existingNewsItem.attachments);
            setValue("content", existingNewsItem.content);
            // ... set other form field values ...
          }
        })
        .catch((error) => {
          console.error("Error fetching existing news item:", error);
        });
    }
  }, [newsItemId, setValue]);

  const handleSubmitFunction = newsItemId ? onUpdate : onSubmit;

  const bodyContent = (
    <div className="flex flex-col h-[600px] gap-6 overflow-auto ">
      <div className="flex flex-col items-start justify-center">
        <div className="flex-col flex gap-2 w-auto h-auto items-start justify-center">
          <h1>Date</h1>
          <div className="flex flex-row gap-4">
            <DatePickerDemo label={"News Date"} control={control} name="date" />
          </div>
        </div>
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="file_input"
        >
          Upload file
        </label>
        <div className="flex-row flex w-full justify-between items-center border-[1px] rounded-md px-2 py-2">
          <input
            id="file_input"
            {...register("attachments")}
            type="file"
            onChange={handleFileChange}
          />

          {imageUrl && (
            <div className="flex-col flex items-center justify-start">
              <Image
                src={imageUrl}
                width={100}
                height={100}
                alt="Uploaded file"
                className="h-[60px] w-auto"
                priority
                placeholder="blur"
                blurDataURL={imageUrl}
              />
            </div>
          )}
        </div>
      </div>
      <Input
        id="title"
        label="Title"
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
            className="h-full pb-12"
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
      title="Write News"
      actionLabel={newsItemId === null ? "POST" : "UPDATE"} // Conditionally set the actionLabel
      onClose={WriteModal.onClose}
      onSubmit={handleSubmit(handleSubmitFunction)}
      body={bodyContent}
    />
  );
};

export default WriteNewsModal;
