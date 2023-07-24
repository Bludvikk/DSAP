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

import useWriteConventionModal from "@/app/hooks/useWriteConventionModal";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { DatePickerDemo } from "../Input/DatePicker";
import Image from "next/image";

const WriteConventionModal = () => {
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

  const attachments = watch("attachments");

  console.log(attachments);
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    // Send the event data to your endpoint
    axios
      .post("/api/conventions", data)
      .then(() => {
        toast.success("Event Posted!");
        WriteModal.onClose();
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });

    // Handle the response, e.g., show success message, redirect, etc.
  };
  const bodyContent = (
    <div className="flex flex-col h-[600px] self-stretch gap-6 overflow-x-hidden overflow-y-scroll ">
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
        <div className="flex-col flex gap-2 w-auto h-auto items-start justify-center">
          <h1>Event Date</h1>
          <div className="flex flex-row gap-4">
            <DatePickerDemo
              label={"Start Date"}
              control={control}
              name="startDate"
            />
          </div>
          <div className="flex flex-row gap-4">
            <DatePickerDemo
              label={"End Date"}
              control={control}
              name="endDate"
            />
          </div>
        </div>
        <div className=" flex-col flex gap-2 w-auto md:w-96 h-auto items-start justify-center">
          <h1>Venue</h1>
          <Input
            register={register}
            id="location"
            type="text"
            errors={errors}
            label="Venue"
            required
          />
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
            className="
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
      actionLabel="POST"
      onClose={WriteModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default WriteConventionModal;
