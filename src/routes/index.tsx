import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import Search from '~/components/home/search';
import User from '~/components/home/user';

export const useUser = routeLoader$(async (requestEvent) => {
  const username = requestEvent.query.get("username") ?? "andres-var";

  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: { Accept: 'application/json' },
  });
  return await response.json();
});


export default component$(() => {
  return (
    <>
      <main class="flex justify-center items-center h-screen flex-col gap-3">
        <Search />
        <User />
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: 'GitHub - Users',
  meta: [
    {
      name: '',
      content: '',
    },
  ],
};
