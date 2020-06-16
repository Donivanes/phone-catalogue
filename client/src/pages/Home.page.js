import React, { useState } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export const HomePage = connect((state) => ({ phones: state.phones }))(
  ({ phones }) => {
    const [list, setList] = useState(phones);

    // const [search, setSearch] = useState("");

    // const handleSearchPhone = (e) => {
    //   searchPhone(e.target.value).then((list) => setList(list));
    //   setSearch(e.target.value);
    // };

    return (
      <>
        <Header />
        <input
          type="text"
          id="search"
          value={search}
          placeholder="Search Phone"
          onChange={handleSearchPhone}
        />
        <ul>
          {list.map((phone) => (
            <li key={phone.id}>
              <Link to={`/phones/${phone.id}`}>
                {/* <img src={phone.image_url} alt={phone.name} /> */}
                <h2>{phone.name}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
);
