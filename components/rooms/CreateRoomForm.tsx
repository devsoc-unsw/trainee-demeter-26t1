"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import InputField from "@/components/ui/inputs/InputField";
import TextArea from "@/components/ui/inputs/TextArea";
import { useState } from "react";

type CreateRoomFormData = {
  meetingName: string;
  category: string;
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
        <div className="mt-15 flex gap-55">
            { /* FORM BOX */}
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
                    <div className="mt-15 flex gap-15">
                        {/* Date */}
                        <InputField className=" min-w-xs"
                            label="Date"
                            name="date"
                            type="date"
                            placeholder=""
                            register={register}
                            error={errors.date}
                        />

                        <div className=" min-w-xs">
                            <label className="mb-2 block font-medium text-gray-900 dark:text-white">
                                Category
                            </label>

                            <select
                                {...register("category")}
                                className="w-full rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0a0a0a] p-3 text-lg text-gray-900 dark:text-gray-100 outline-none focus:border-cyan-500"
                            >
                                <option value="">Select a category</option>
                                <option value="food">Food</option>
                                <option value="study">Study</option>
                                <option value="sports">Sports</option>
                                <option value="nightlife">Nightlife</option>
                            </select>
                        </div>
                    </div>
                    {/* Optional description */}
                    <div className="min-w-xs">
                        <TextArea 
                            label=""
                            name="description"
                            placeholder="Add a description of the Room (optional)"
                            rows={3}
                            register={register}
                            error={errors.description}
                        />
                    </div>

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
            <div className="mt-15 w-full max-w-3xl rounded-xl bg-gray-200/75 dark:bg-gray-800/75 p-6 backdrop-blur-sm">










            </div>
        </div>


        
    </div>
  );
}