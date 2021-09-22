import React from 'react';
import MyInput from "./input/MyInput";
import MySelect from "./select/MySelect";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder="Search..."
      />
      <MySelect
        defaultValue="Sort"
        options={[
          {value: 'title', name: 'by title'},
          {value: 'body', name: 'by description'}
        ]}
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
      />
    </div>
  );
};

export default PostFilter;