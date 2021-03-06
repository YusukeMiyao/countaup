import useSWR from 'swr'

const key = "/api/local";

// function Data() {
//   const { data, error } = useSWR('/api/user', fetcher)

//   if (error) return <div>failed to load</div>
//   if (!data) return <div>loading...</div>
//   return <div>hello {data.name}!</div>
// }

// function useUser() {
//   return useSWR<User>(key, fetcher, {
//     onFailure() {
//       localStorage.removeItem(key)
//     }
//     onSuccess(user) {
//       localStorage.setItem(key, JSON.stringify(user));
//     },
//   });
// }
