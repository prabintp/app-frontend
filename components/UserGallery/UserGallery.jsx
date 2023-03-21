import { useQuery } from "react-query";
import fetcher from "@/lib/fetcher";

export default function UserGallery() {
  const { isLoading, isError, isSuccess, data } = useQuery(["users"], fetcher.bind(this, "https://jsonplaceholder.typicode.com/users"), { staleTime: 60000 });

  if(isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  if(isError) {
    return (
      <div>There was some error fetching users.</div>
    )
  }

  return (
    <div className="flex justify-around">
      {[data.map(user => (
        <div className="bg-slate-400 m-1">
          <h3>{user.name}</h3>
          <p>{user.username}</p>
          <p>{user.phone}</p>
        </div>
      ))
      ]}
    </div>
  );
}