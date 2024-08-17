import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div style={styles.searchBar}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for questions..."
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>Search</button>
    </div>
  );
}

const styles = {
  searchBar: {
    display: 'flex',
    marginBottom: '20px'
  },
  input: {
    flex: '1',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  button: {
    marginLeft: '10px',
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#282c34',
    color: 'white',
    cursor: 'pointer'
  }
};

export default SearchBar;
