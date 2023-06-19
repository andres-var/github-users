import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";

export default component$(() => {

    return (
        <Form class="max-w-2xl w-full bg-[#1e2a47] flex p-4 items-center justify-between rounded-lg">
            <div class="flex-1">
                <input 
                    name="username"
                    type="text" 
                    placeholder="Search GitHub users" 
                    class="w-full bg-transparent border-none focus:border-none focus:outline-none focus:ring-0 text-white"
                />
            </div>
            <div>
                <button
                    class="bg-[#0079ff] text-white px-4 py-2 rounded-md"
                >
                    Search
                </button>
            </div>
        </Form>
    );
  });