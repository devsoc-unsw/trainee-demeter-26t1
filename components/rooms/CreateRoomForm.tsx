"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import InputField from "@/components/ui/inputs/InputField";
import TextArea from "@/components/ui/inputs/TextArea";
import { useState } from "react";

type CreateRoomFormData = {
  meetingName: string;
  date: string;
  description: string;
};

export default function CreateRoomForm({ user }: any) {
const router = useRouter();

  const { register, handleSubmit, formState: { errors } } =
    useForm<CreateRoomFormData>();

  const [isCreating, setIsCreating] = useState(false);

  async function onSubmit(data: CreateRoomFormData) {
  setIsCreating(true);

  console.log(data);

  setTimeout(() => {
    setIsCreating(false);
    router.push("/rooms/lobby");
  }, 800);
  
}

  return (
    <div className="ml-5">
      
      {/* HEADER */}
      <h1 className="mt-10 mb-2 text-5xl font-bold text-gray-900 dark:text-white">
        Create Your Meetup {user?.fname}
      </h1>

      <p className="ml-1 text-lg text-gray-600 dark:text-gray-400 max-w-xl">
        Take charge of your meetup and choose a place where meaningful
        connection happen. Create a room and invite your friends. 
      </p>

      {/* FORM BOX */}
      <div className="mt-15 w-full max-w-3xl rounded-xl bg-gray-200/75 dark:bg-gray-800/75 p-6 backdrop-blur-sm">

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Meeting Name */}
          <InputField
            label="Meeting Name"
            name="meetingName"
            placeholder="e.g. DevSoc TP hangout"
            register={register}
            error={errors.meetingName}
          />

          {/* Date */}
          <InputField
            label="Date"
            name="date"
            type="date"
            placeholder=""
            register={register}
            error={errors.date}
          />

          {/* Optional description */}
          <TextArea 
            label=""
            name="description"
            placeholder="Add a description of the Room (optional)"
            rows={6}
            register={register}
            error={errors.description}
          />

          {/* Button */}
          <button
            type="submit"
            disabled={isCreating}
            className="w-full rounded-xl bg-cyan-600 px-4 py-3 font-medium text-white transition hover:bg-cyan-500 disabled:opacity-70"
          >
            {isCreating ? "Creating..." : "Create Room"}
          </button>

        </form>
      </div>
    </div>
  );
}