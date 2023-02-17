import React, { useEffect } from "react";
import MenuItem from "../components/MenuItem";
import { useQuery } from "@apollo/client";
import { QUERY_MENU } from "../utils/queries";

export default function Menu() {
  const { data, loading, error } = useQuery(QUERY_MENU);

  if (loading) return <h1>Loading now...</h1>;

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="menu">
      <h1>Our menu</h1>
      {data.allMenuItems.map((item) => (
        <MenuItem key={item._id} item={item} />
      ))}
    </div>
  );
}
