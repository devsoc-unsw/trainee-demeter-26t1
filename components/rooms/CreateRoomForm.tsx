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
      <h1 className="mt-5 mb-2 text-5xl font-bold text-gray-900 dark:text-white">
        Create Your Meetup {user?.fname}
      </h1>

      <p className="ml-1 text-sm text-gray-600 dark:text-gray-400">
        Take charge of your meetup. Create a room and invite your friends.
      </p>

      
    </div>
  );
}