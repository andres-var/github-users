import { component$ } from "@builder.io/qwik";
import { useUser } from "~/routes";

export default component$(() => {

    const userSignal = useUser();

    return (
        <div class="flex flex-row items-center bg-[#1e2a47] max-w-2xl w-full gap-4 p-6 rounded-lg">
            <div>
                <img src={`${userSignal.value.avatar_url}`} class="rounded-full h-24 w-24" />
            </div>
            <div class="flex flex-col flex-1">
                <div class="flex justify-between items-center">
                    <h1 class="text-2xl font-bold text-white">{ userSignal.value.name }</h1>
                    <p class="text-gray-400">Joined {userSignal.value.created_at}</p>
                </div>
                <div class="mb-6">
                    <p class="text-[#0079ff]">@{userSignal.value.login}</p>
                </div>
                <div class="text-gray-500 mb-6">
                    <p>{ userSignal.value.bio }</p>
                </div>

                <div class="flex w-full bg-[#141c2f] p-4 px-8 rounded-lg mb-6">
                    <div class="flex-1">
                        <p class="text-gray-400 text-sm">Repos</p>
                        <p class="text-white text-xl">{ userSignal.value.public_repos }</p>
                    </div>
                    <div class="flex-1">
                        <p class="text-gray-400 text-sm">Followers</p>
                        <p class="text-white text-xl">{ userSignal.value.followers }</p>
                    </div>
                    <div class="flex-1">
                        <p class="text-gray-400 text-sm">Following</p>
                        <p class="text-white text-xl">{ userSignal.value.following }</p>
                    </div>
                </div>

                <div class="flex justify-between text-white">
                    <div>
                        <div>{userSignal.value.location}</div>
                        <div>{userSignal.value.blog}</div>
                        <div>{userSignal.value.url}</div>
                    </div>
                </div>
            </div>
        </div>
    );
  });